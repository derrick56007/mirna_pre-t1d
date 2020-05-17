#!/user/bin/env python

import sys
import json
import shutil
import subprocess

# add library code to path
sys.path.insert(0, 'src/')

# sys.path.insert(0, 'src/data')
# sys.path.insert(0, 'src/processing')
# sys.path.insert(0, 'src/visualization')

from etl import get_data
from processing import process_data
from visualization import visualize_data

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
        process_data(**cfg)
        visualize_data(**cfg)
        
    # make the process target
    if 'process' in targets:
        process_data(**cfg)

    if 'project' in targets:
#         shutil.rmtree('data/temp',ignore_errors=True)
#         shutil.rmtree('data/out',ignore_errors=True)
#         shutil.rmtree('data/test',ignore_errors=True)    

        cfg = load_params(DATA_PARAMS)
        get_data(**cfg)
        process_data(**cfg)
        visualize_data(**cfg)
        
    if 'test-project' in targets:
#         shutil.rmtree('data/temp',ignore_errors=True)
#         shutil.rmtree('data/out',ignore_errors=True)
#         shutil.rmtree('data/test',ignore_errors=True)    

        cfg = load_params(DATA_PARAMS)
        get_data(**cfg)
#         process_data(**cfg)
#         visualize_data(**cfg)        

#         subprocess.call("src/visualization.r")
        import os
        cwd = os.getcwd()
        print(cwd)
        subprocess.call (["src/visualization.r"])

    return

if __name__ == '__main__':
    targets = sys.argv[1:]
    main(targets)