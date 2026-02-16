import re
import os
import requests

def download_images(photos_md_path, base_url, output_dir):
    with open(photos_md_path, 'r') as f:
        content = f.read()

    # Regex to find image paths like 'assets/images/fulls/*.jpg'
    # This assumes the paths are relative to the base_url
    image_paths = re.findall(r'assets/images/fulls/[^\s]+\.jpg', content)

    os.makedirs(output_dir, exist_ok=True)

    for rel_path in image_paths:
        img_url = f'{base_url}/{rel_path}'
        local_filename = os.path.join(output_dir, os.path.basename(rel_path))
        
        print(f'Downloading {img_url} to {local_filename}')
        try:
            response = requests.get(img_url, stream=True)
            response.raise_for_status() # Raise an exception for HTTP errors
            with open(local_filename, 'wb') as out_file:
                for chunk in response.iter_content(chunk_size=8192):
                    out_file.write(chunk)
            print(f'Successfully downloaded {local_filename}')
        except requests.exceptions.RequestException as e:
            print(f'Error downloading {img_url}: {e}')

# Define paths and URLs
photos_md_path = 'tmp_softbuild_photos.md'
photos_base_url = 'https://photos.softbuild.dev'
output_images_dir = 'public/images'

download_images(photos_md_path, photos_base_url, output_images_dir)
