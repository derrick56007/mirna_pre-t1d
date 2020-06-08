#!/usr/bin/python

import sys
import json
import shutil
import subprocess

# add library code to path
sys.path.insert(0, 'src/')

from etl import get_data

DATA_PARAMS = 'config/config.json'
TEST_PARAMS = 'config/test-config.json'

def load_params(fp):
    with open(fp) as fh:
        param = json.load(fh)
        
    return param

def main(targets):
    
    # make the clean target
    if 'clean' in targets:
        shutil.rmtree('data/temp',ignore_errors=True)
        shutil.rmtree('data/out',ignore_errors=True)
        shutil.rmtree('data/test',ignore_errors=True)    

    # make the data target
    if 'data' in targets:
        cfg = load_params(DATA_PARAMS)
        get_data(**cfg)

    # make the test target
    if 'test' in targets:
        cfg = load_params(TEST_PARAMS)
        get_data(**cfg)
        
        print('healthy heatmap')
        subprocess.call (["./src/heatmap_healthy.r"], shell=True, executable='/bin/bash')

        print('pret1 heatmap')
        subprocess.call (["./src/heatmap_pret1d.r"], shell=True, executable='/bin/bash')
        
        print('volcano')
        subprocess.call (["./src/volcano_plot_script.r"], shell=True, executable='/bin/bash')
        
    # make the project target
    if 'test-project' in targets:
        cfg = load_params(DATA_PARAMS)
        get_data(**cfg)
        
        print('healthy heatmap')
        subprocess.call (["./src/heatmap_healthy.r"], shell=True, executable='/bin/bash')

        print('pret1 heatmap')
        subprocess.call (["./src/heatmap_pret1d.r"], shell=True, executable='/bin/bash')
        
        print('volcano')
        subprocess.call (["./src/volcano_plot_script.r"], shell=True, executable='/bin/bash')
    return

if __name__ == '__main__':
    targets = sys.argv[1:]
    main(targets)
