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

def process_data(file_url, raw_dir, file_name, temp_dir):
    print("Processing data")
    
    df = read_file_type(['M'], ['rTreg', 'aTreg'], temp_dir, raw_dir + file_name)

    print(df.head())
    
    print("Done")
    return