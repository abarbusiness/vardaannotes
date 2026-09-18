import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

req = urllib.request.Request('https://www.studiestoday.com/icse-class-9', headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'href="([^"]*history[^"]*)"', html, re.IGNORECASE)
        print("History links in icse-class-9:")
        for m in sorted(set(matches)):
            print("  ", m)
except Exception as e:
    print("Error:", e)
