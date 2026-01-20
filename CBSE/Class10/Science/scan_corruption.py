
import os
import re

base_dir = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class10\Science"

patterns = set()

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file == "PYQ.html":
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                    # Find sequences starting with â and followed by 2 chars
                    matches = re.findall(r"â.{2}", content)
                    patterns.update(matches)
                    matches2 = re.findall(r"â.{1}", content)
                    patterns.update(matches2)
            except Exception as e:
                print(f"Error reading {path}: {e}")

print("Found patterns:")
for p in sorted(list(patterns)):
    print(f"'{p}'")
