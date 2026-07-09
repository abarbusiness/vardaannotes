import os
import re

base_dir = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class 9\SocialScience"

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Checklist for Chapters 1-9</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
        h1 { color: #333; }
        h2 { color: #d81b60; border-bottom: 2px solid #d81b60; padding-bottom: 5px; }
        .image-card { border: 1px solid #ccc; padding: 15px; margin-bottom: 15px; border-radius: 5px; background: #f9f9f9; }
        .image-card strong { color: #1e88e5; }
    </style>
</head>
<body>
    <h1>Image Details Checklist for Chapters 1-9</h1>
"""

chapter_dirs = sorted([d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d)) and d.startswith(("01", "02", "03", "04", "05", "06", "07", "08", "09"))])

for ch_dir in chapter_dirs:
    notes_path = os.path.join(base_dir, ch_dir, "ChapterNotes.html")
    if os.path.exists(notes_path):
        with open(notes_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Regex to find ncert-image-prompt and ai-image-prompt blocks
        prompts = re.findall(r'<div class="(?:ncert-image-prompt|ai-image-prompt)">(.*?)</div>', content, re.DOTALL)
        
        if prompts:
            html_content += f"<h2>Chapter: {ch_dir}</h2>\n"
            for p in prompts:
                # Clean up html tags inside if any
                clean_p = p.strip()
                html_content += f'<div class="image-card">{clean_p}</div>\n'

html_content += """
</body>
</html>
"""

output_path = os.path.join(base_dir, "Image_Checklist_Chapters_1_to_9.html")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Generated successfully at: {output_path}")
