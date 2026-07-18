# StudiesToday PDF Downloading Guide

This guide provides a detailed, step-by-step explanation of how to programmatically download textbook chapter PDFs from **studiestoday.com**. It is intended for developers who need to understand the website's architecture and security mechanisms to automate file downloads.

## 1. Overview
The website does not expose direct `.pdf` links to the user. Instead, it uses a node-based architecture and a secure endpoint (`/securefile/`) that requires specific headers and a base64-encoded identifier to serve the actual PDF file.

## 2. Architecture & URL Structure

To download all chapters for a specific subject, you must navigate through three levels:
1. **Main Book Page**: The index page containing links to all chapters (e.g., `https://www.studiestoday.com/download-books/24930/chemistry.html`).
2. **Chapter Page**: The page for a specific chapter (e.g., `https://www.studiestoday.com/download-book/icse-class-9-chemistry-chapter-01...`).
3. **Secure File Endpoint**: The actual backend URL that streams the PDF. It looks like `https://www.studiestoday.com/securefile/{base64_encoded_node_id}`.

## 3. Step-by-Step Extraction Flow

### Step 1: Fetch the Main Book Page
Start by sending a GET request to the Main Book Page. 
*Important:* You must always include a valid `User-Agent` header, or the server may block the request.

### Step 2: Scrape Chapter Links
Parse the HTML of the Main Book Page to find all links pointing to individual chapters. 
You can use a Regular Expression (Regex) to find all `href` attributes that match the chapter pattern.
Example Regex: `r'href="(.*?/download-book/icse-class-9-chemistry-chapter-\d+.*?)"'`
*Note:* De-duplicate the links while preserving their order, as the page usually lists them sequentially.

### Step 3: Extract the Node ID
For each Chapter Page URL, fetch the HTML. The actual PDF is tied to a specific CMS **Node ID**, which is embedded in the page's metadata.
You can extract this Node ID by searching the HTML for either:
1. The shortlink tag: `<link rel="shortlink" href="https://www.studiestoday.com/node/123456"`
2. The currentPath JSON: `"currentPath":"node\/123456"`

Regex examples to capture the Node ID:
```python
# Method 1
match = re.search(r'<link rel="shortlink" href="https://www.studiestoday.com/node/(\d+)"', html)
# Method 2
match = re.search(r'"currentPath":"node\\\\?/(\d+)"', html)
```

### Step 4: Construct the Secure File URL
Once you have the numeric Node ID (e.g., `503705`), you must **Base64 encode** it as a string.
For example, `503705` becomes `NTAzNzA1`.

Append this Base64 string to the secure endpoint:
`https://www.studiestoday.com/securefile/NTAzNzA1`

### Step 5: Download the PDF (CRITICAL: Referer Header)
To successfully download the PDF from the secure URL, you **MUST** pass a `Referer` header in your HTTP request. 
The server verifies that the request originated from the Chapter Page. If the `Referer` header is missing or incorrect, the server will refuse the connection or return an empty file.

Headers required for the final download:
- `User-Agent`: (Standard browser string)
- `Referer`: (The URL of the Chapter Page you just scraped)

## 4. Complete Python Boilerplate Script

Here is a robust, generalized script demonstrating the entire flow:

```python
import os
import urllib.request
import base64
import re
import time

def download_chapters(main_url, base_dir, subject_name):
    base_url = "https://www.studiestoday.com"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
    }

    print(f"Fetching main page: {main_url}")
    req = urllib.request.Request(main_url, headers=headers)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    
    # 1. Find all chapter links (adjust regex based on subject URL structure)
    # The regex looks for /download-book/ followed by any characters containing 'chapter-\d+'
    links = re.findall(r'href="(/download-book/.*?chapter-\d+.*?)"', html)
    
    # Deduplicate while preserving order
    unique_links = []
    for link in links:
        if link not in unique_links:
            unique_links.append(link)
            
    print(f"Found {len(unique_links)} chapters.")

    # 2. Iterate through each chapter
    for i, link in enumerate(unique_links):
        chap_url = base_url + link
        print(f"Processing Chapter {i+1} from {chap_url}")
        
        # Fetch chapter page
        c_req = urllib.request.Request(chap_url, headers=headers)
        with urllib.request.urlopen(c_req) as response:
            c_html = response.read().decode('utf-8')
        
        # 3. Extract Node ID
        node_id = None
        match = re.search(r'<link rel="shortlink" href="https://www.studiestoday.com/node/(\d+)"', c_html)
        if match:
            node_id = match.group(1)
        else:
            match = re.search(r'"currentPath":"node\\\\?/(\d+)"', c_html)
            if match:
                node_id = match.group(1)
                
        if not node_id:
            print(f"Could not find Node ID for Chapter {i+1}")
            continue
            
        # 4. Base64 Encode Node ID
        b64_id = base64.b64encode(str(node_id).encode('utf-8')).decode('utf-8')
        pdf_url = f"{base_url}/securefile/{b64_id}"
        
        # 5. Download PDF (Ensure Referer is set!)
        pdf_headers = headers.copy()
        pdf_headers['Referer'] = chap_url
        pdf_req = urllib.request.Request(pdf_url, headers=pdf_headers)
        
        try:
            with urllib.request.urlopen(pdf_req) as response:
                pdf_data = response.read()
                
                # Save file
                file_name = f"{subject_name}_Chapter_{i+1}.pdf"
                file_path = os.path.join(base_dir, file_name)
                
                with open(file_path, 'wb') as f:
                    f.write(pdf_data)
                print(f"Successfully downloaded: {file_name}")
        except Exception as e:
            print(f"Failed to download PDF: {e}")
            
        # Be polite to the server
        time.sleep(1)

# Example Usage:
# download_chapters(
#     main_url="https://www.studiestoday.com/download-books/24930/chemistry.html",
#     base_dir="./downloads",
#     subject_name="Chemistry"
# )
```

## 5. Summary of Gotchas
- **Missing `Referer`**: Will result in HTTP 403 Forbidden or empty responses.
- **Incorrect Main URL**: Some subjects have multiple index pages. Make sure the `main_url` points to the page listing the `/download-book/` links, NOT just the syllabus overview.
- **Rate Limiting**: The server might temporarily IP-ban you if you send too many requests instantly. Always use `time.sleep(1)`.
- **Node ID Edge Cases**: Usually, the Node ID is found in the `<link rel="shortlink">` tag. As a fallback, check the JSON script payloads at the bottom of the page (`currentPath`).
