$htmlFile = "ChapterNotes.html"
$content = Get-Content $htmlFile -Raw

# The regex matches:
# 1. <div ...> containing "<strong>Case ("
# 2. The inner content up to </div>
# 3. <img ...>
# 4. <p ...> caption </p>
$pattern = '(?s)(<div[^>]*>\s*<p><strong>Case \([ivx]+\).*?</div>\s*<img[^>]+>\s*<p[^>]*>.*?</p>)'

$replacement = '<div style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; background: #fdfdfd;">
$1
</div>'

$newContent = [regex]::Replace($content, $pattern, $replacement)

[System.IO.File]::WriteAllText("$(Get-Location)\$htmlFile", $newContent, [System.Text.Encoding]::UTF8)
