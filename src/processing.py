import sys
import json
import subprocess
import os
import gzip
import pandas as pd
import tarfile
import numpy as np
import requests
import tarfile

def mkdir(d):
    if not os.path.exists(d):
        os.mkdir(d)

def read_file_type(health_types, cell_types, tmp, fp):
    tar = tarfile.open("data/raw/GSE44639_RAW.tar")

    mkdir(tmp)
    tar.extractall(tmp)
    
    df = pd.DataFrame(columns=['miRNA', 'Chromosome', 'Position', 'Strand', 'Total miRNA reads', 'RPM (reads per million)', 'healthy', 'subset', 'sample'])
    
    for name in tar.getnames():
        subset = name.split('_')[-1].split('.')[0]
        health_type = name[4:].split('_')[1][0]
        
        if subset in cell_types and health_type in health_types:
            df1 = pd.read_csv(gzip.open(tmp + name,'rt'), sep='\t')
            df1['healthy'] = 'M' in name[4:]
            df1['subset'] = subset
            df1['sample'] = name.split(".")[0]
            
            if len(df1.columns) != len(df.columns):
                continue
            
            df = pd.concat([df, df1])
            
    return df

def produce_heatmap_data(tmp, fp):
    df = read_file_type(['M'], ['rTreg', 'aTreg'], tmp, fp)

    healthy_mirnas = ['hsa-let-7a', 'hsa-miR-22*', 'hsa-mir-21', 'hsa-miR-221', 'hsa-miR-21*', 'hsa-miR-23b', 'hsa-miR-23a', 'hsa-miR-107', 'hsa-miR-21', 'hsa-mir-424', 'hsa-mir-532', 'hsa-miR-181a-2*', 'hsa-miR-151-3p', 'hsa-miR-193b', 'hsa-mir-30b', 'hsa-mir-3653', 'hsa-miR-335', 'hsa-mir-151', 'hsa-miR-151-5p', 'hsa-mir-31', 'hsa-miR-31', 'hsa-let-7c', 'hsa-mir-150', 'hsa-mir-26a-1', 'hsa-mir-26a-2']

    healthy_a_treg_samples = df[df['subset'] == 'aTreg']
    healthy_r_treg_samples = df[df['subset'] == 'rTreg']

    a = healthy_a_treg_samples[healthy_a_treg_samples['miRNA'].apply(lambda x: x in healthy_mirnas)][['miRNA', 'Total miRNA reads', 'sample']].groupby(['miRNA', 'sample']).sum()
    r = healthy_r_treg_samples[healthy_r_treg_samples['miRNA'].apply(lambda x: x in healthy_mirnas)][['miRNA', 'Total miRNA reads', 'sample']].groupby(['miRNA', 'sample']).sum()

    a['Total miRNA reads'] = a['Total miRNA reads'].astype(float)
    r['Total miRNA reads'] = r['Total miRNA reads'].astype(float)

    a = a['Total miRNA reads'].reset_index()
    a['name'] = a['miRNA'] + '_' + a['sample'].str.split('_',expand=True)[1]
    a['Total miRNA reads A'] = a['Total miRNA reads']
    a = a[['name', 'Total miRNA reads A']]
    a['name'] = a['name'].astype(str)
    a.set_index("name", inplace=True)

    # a

    r = r['Total miRNA reads'].reset_index()
    r['name'] = r['miRNA'] + '_' + r['sample'].str.split('_',expand=True)[1]
    r['Total miRNA reads R'] = r['Total miRNA reads']
    r = r[['name', 'Total miRNA reads R']]
    r['name'] = r['name'].astype(str)
    r.set_index("name", inplace=True)

    # r

    d = a.join(r, on='name').fillna(0).reset_index()
    d['sample'] = d['name'].str.split('_', expand=True)[1]
    d['name'] = d['name'].str.split('_', expand=True)[0]
    d['R/A'] = d['Total miRNA reads R'] / d['Total miRNA reads A']

    f = d.groupby(['name', 'sample'])['R/A'].first().unstack().fillna(0).reset_index()
    f['mean'] = f[f.columns[2:]].mean(axis=1)
    f['std'] = f[f.columns[2:]].std(axis=1)

    g = f[:]

    for i in range(2, 10):
    #     print(g.columns[i])
        g[g.columns[i]] = ((g[g.columns[i]] - g['mean']) / g['std']).fillna(0)

    g = g.set_index('name')[g.columns[1:-2]]
    return g

def process_data(file_url, raw_dir, file_name, temp_dir):
    print("Processing data")
    
    df = read_file_type(['M'], ['rTreg', 'aTreg'], temp_dir, raw_dir + file_name)

    print(df.head())
    
    g = produce_heatmap_data(temp_dir, raw_dir + file_name)
    g = g.round(2)
    g.to_csv(temp_dir + "heatmap.csv")
    print(g)
    print("saved to", temp_dir)
    
    print("Done")
    return