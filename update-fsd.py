import json
import os
from pathlib import Path
from urllib.parse import urlparse
import requests
import yaml
import shutil
from tqdm.rich import tqdm
from zipfile import ZipFile

zip_url = (
    "https://eve-static-data-export.s3-eu-west-1.amazonaws.com/tranquility/fsd.zip"
)
cks_url = zip_url + ".checksum"
zip_name = Path(os.path.basename(urlparse(zip_url).path))
zip_folder = zip_name.parent / "public" / zip_name.stem

if not os.path.exists(zip_name):
    response = requests.get(zip_url, stream=True)
    total_size = int(response.headers.get("content-length", 0))
    with open(zip_name, "wb") as f:
        with tqdm(
            desc=f"Downloading {zip_name}...",
            total=total_size,
            unit="B",
            unit_scale=True,
            unit_divisor=1024,
            leave=False,
        ) as pbar:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
                    pbar.update(len(chunk))
if zip_folder.exists():
    shutil.rmtree(zip_folder)
with ZipFile(zip_name, "r") as zip_ref:
    file_list = zip_ref.namelist()
    with tqdm(
        total=len(file_list), desc="Extracting...", unit=" file", leave=False
    ) as pbar:
        for file in file_list:
            zip_ref.extract(file, zip_folder)
            pbar.update(1)
            pbar.set_description(f"Extracting {file}...")

with tqdm(
    list(zip_folder.glob("**/*.yaml")) + list(zip_folder.glob("**/*.yml")),
    unit=" file",
    leave=False,
) as p1:
    for file_path in p1:
        p1.set_description(f"Processing {file_path.name}...")
        folder_Path = file_path.parent / file_path.stem
        if folder_Path.exists():
            shutil.rmtree(folder_Path)
        folder_Path.mkdir(parents=True)
        with open(file_path, encoding="utf-8") as f:
            data = yaml.safe_load(f)
            with tqdm(data, unit=" entry", leave=False) as p2:
                if isinstance(data, list):
                    for i, entry in enumerate(p2):
                        p2.set_description(f"Processing entry:{i}...")
                        if entry:
                            with open(
                                folder_Path / f"{i}.json", "w", encoding="utf-8"
                            ) as out_file:
                                json.dump(entry, out_file, ensure_ascii=False)
                elif isinstance(data, dict):
                    for key in p2:
                        p2.set_description(f"Processing entry:{key}...")
                        entry = data[key]
                        if entry:
                            with open(
                                folder_Path / f"{key}.json", "w", encoding="utf-8"
                            ) as out_file:
                                json.dump(entry, out_file, ensure_ascii=False)
        file_path.unlink()
