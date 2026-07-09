import os
import re
import glob

base_dir = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class 9\SocialScience"
output_file = os.path.join(base_dir, "ImageChecklist.html")

# Regular expression to match the ncert-image-prompt blocks
prompt_pattern = re.compile(r'<div class="ncert-image-prompt">\s*<strong>(.*?)</strong><br>\s*(.*?)\s*</div>', re.DOTALL | re.IGNORECASE)
# Sometimes it might just be the class and text
fallback_pattern = re.compile(r'<div class="ncert-image-prompt">(.*?)</div>', re.DOTALL | re.IGNORECASE)

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Checklist - Chapters 1 to 9</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }
        h1 { text-align: center; color: #333; }
        table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; }
        th, td { padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: left; }
        th { background-color: #1e88e5; color: #fff; font-weight: bold; }
        tr:hover { background-color: #f1f1f1; }
        .chapter-row { background-color: #e3f2fd; font-weight: bold; color: #1e88e5; }
        .suggested-name { font-family: monospace; background: #eee; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
    <h1>Required Images Checklist (Chapters 1 - 9)</h1>
    <p style="text-align:center;">This is a helper file. You can use it to track all images to be inserted into the notes and solutions.</p>
    <table>
        <thead>
            <tr>
                <th>Chapter Name</th>
                <th>File Type</th>
                <th>Image Title / Figure Number</th>
                <th>Description / Placement Detail</th>
                <th>Suggested Image Filename</th>
            </tr>
        </thead>
        <tbody>
"""

chapters = sorted([d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d)) and d[0:2].isdigit()])

for chapter in chapters:
    chapter_path = os.path.join(base_dir, chapter)
    
    files_to_check = ['ChapterNotes.html', 'NcertSoluiton.html']
    
    has_images = False
    chapter_rows = ""
    
    for filename in files_to_check:
        filepath = os.path.join(chapter_path, filename)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        matches = prompt_pattern.findall(content)
        if not matches:
            # try fallback
            fb_matches = fallback_pattern.findall(content)
            for fb in fb_matches:
                if '<strong>' not in fb:
                    matches.append(("Figure", fb.strip()))
                    
        if matches:
            has_images = True
            for title, desc in matches:
                # clean up title and desc
                title = title.strip()
                desc = desc.strip().replace('\n', ' ').replace('<br>', ' ')
                
                # generate a suggested filename
                safe_title = re.sub(r'[^a-zA-Z0-9]', '', title)
                suggested_name = f"{chapter[:2]}_{safe_title}.png"
                if not safe_title:
                    suggested_name = f"{chapter[:2]}_image.png"
                
                file_type = "Notes" if filename == "ChapterNotes.html" else "NCERT Solutions"
                
                chapter_rows += f"""
                <tr>
                    <td>{chapter}</td>
                    <td>{file_type}</td>
                    <td>{title}</td>
                    <td>{desc}</td>
                    <td><span class="suggested-name">{suggested_name}</span></td>
                </tr>
                """
    
    if has_images:
        html_content += chapter_rows

html_content += """
        </tbody>
    </table>
</body>
</html>
"""

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Checklist created at {output_file}")
