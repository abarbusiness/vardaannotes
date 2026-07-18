import os
import urllib.request
import base64
import re
import time

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
}

main_url = "https://www.studiestoday.com/download-books/24932/physics.html"
base_url = "https://www.studiestoday.com"

base_dir = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 9\Physics"
folders = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))]
folders.sort()

def download_chapter():
    print("Fetching main page...")
    req = urllib.request.Request(main_url, headers=headers)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    
    # Find links like /download-book/icse-class-9-physics-chapter-01-measurements-and-experimentation
    links = re.findall(r'href="(.*?icse-class-9-physics-chapter-\d+.*?)"', html)
    # Deduplicate while preserving order
    unique_links = []
    for link in links:
        if link not in unique_links:
            unique_links.append(link)
            
    # filter just the class 9 physics ones
    unique_links = [l for l in unique_links if '/download-book/icse-class-9-physics-chapter-' in l]
    unique_links.sort()
    
    print(f"Found {len(unique_links)} chapter links.")
        
    for i, link in enumerate(unique_links):
        if i >= len(folders):
            print(f"More links than folders, skipping {link}")
            continue
            
        folder = folders[i]
        chap_url = base_url + link
        print(f"Processing {folder} from {chap_url}")
        
        c_req = urllib.request.Request(chap_url, headers=headers)
        with urllib.request.urlopen(c_req) as response:
            c_html = response.read().decode('utf-8')
        
        # find node id from shortlink or currentPath
        node_id = None
        match = re.search(r'<link rel="shortlink" href="https://www.studiestoday.com/node/(\d+)"', c_html)
        if match:
            node_id = match.group(1)
        else:
            match = re.search(r'"currentPath":"node\\\\?/(\d+)"', c_html)
            if match:
                node_id = match.group(1)
                
        if not node_id:
            print(f"Could not find node ID for {folder}")
            continue
            
        print(f"Node ID for {folder} is {node_id}")
        
        b64_id = base64.b64encode(str(node_id).encode('utf-8')).decode('utf-8')
        pdf_url = f"{base_url}/securefile/{b64_id}"
        
        print(f"Downloading PDF from {pdf_url}")
        pdf_headers = headers.copy()
        pdf_headers['Referer'] = chap_url
        pdf_req = urllib.request.Request(pdf_url, headers=pdf_headers)
        
        try:
            with urllib.request.urlopen(pdf_req) as response:
                pdf_data = response.read()
                pdf_path = os.path.join(base_dir, folder, f"Physics_Chapter_{i+1}.pdf")
                with open(pdf_path, 'wb') as f:
                    f.write(pdf_data)
                print(f"Successfully downloaded to {pdf_path} (Size: {len(pdf_data)} bytes)")
        except Exception as e:
            print(f"Failed to download PDF for {folder}: {e}")
            
        time.sleep(1)

if __name__ == "__main__":
    download_chapter()
