import requests
import time

def get_pdf_url(node_id):
    url = f"https://www.studiestoday.com/node/{node_id}/download"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": f"https://www.studiestoday.com/node/{node_id}/viewfile.html"
    }
    
    print(f"Testing URL: {url}")
    try:
        # Use allow_redirects=False to see the first redirect
        response = requests.head(url, headers=headers, allow_redirects=False, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Headers: {response.headers}")
        
        if 'Location' in response.headers:
            print(f"Redirect Location: {response.headers['Location']}")
            return response.headers['Location']
        
        # If HEAD doesn't work, try GET
        response = requests.get(url, headers=headers, allow_redirects=False, timeout=10)
        print(f"GET Status Code: {response.status_code}")
        if 'Location' in response.headers:
            print(f"GET Redirect Location: {response.headers['Location']}")
            return response.headers['Location']
            
    except Exception as e:
        print(f"Error: {e}")
    return None

if __name__ == "__main__":
    node_id = "502921" # Chapter 1
    pdf_url = get_pdf_url(node_id)
    if pdf_url:
        print(f"Found PDF URL: {pdf_url}")
    else:
        print("Could not find PDF URL")
