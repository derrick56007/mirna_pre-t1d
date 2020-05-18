import sys
import json
import subprocess
import os
import gzip
import pandas as pd
import tarfile
import numpy as np
import requests

def mkdir(d):
    if not os.path.exists(d):
        os.makedirs(d, exist_ok=True)
        
def download_url(url, dirname, filename):
    print("Downloading", url)
    
    mkdir(dirname)

    r = requests.get(url, stream=True)

    with open(dirname + filename, 'wb') as f:
        for chunk in r.iter_content():
            f.write(chunk)        
            
    print("Done")
        
def get_data(file_url, raw_dir, file_name, temp_dir):
    download_url(file_url, raw_dir, file_name)    