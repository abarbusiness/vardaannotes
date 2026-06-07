import re

html_path = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 10\Physics.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

def replace_fn(match):
    original = match.group(0)
    dir_name = match.group(2)
    # The original already has the indent, so we just add a newline, same indent, then our tag
    indent = match.group(1).split('<')[0]
    flashcard_link = f'{indent}<a href="Physics/{dir_name}/Flashcard.html" class="resource-btn"><i data-lucide="layers"></i> Flashcards</a>'
    return original + "\n" + flashcard_link

# Pattern matches the exact line containing PYQ.html
new_content = re.sub(r'([ \t]*)<a href="Physics/([^/]+)/PYQ\.html" class="resource-btn"><i\s*data-lucide="file-clock"></i>\s*Previous Year Q\'s</a>', replace_fn, content)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated Physics.html")
