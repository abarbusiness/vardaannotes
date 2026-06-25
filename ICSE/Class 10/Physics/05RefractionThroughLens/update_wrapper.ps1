$htmlFile = "ChapterNotes.html"
$content = Get-Content $htmlFile -Raw

$oldStyle = 'style="border: 2px dashed #94a3b8; border-radius: 12px; padding: 1.5rem; margin-bottom: 2.5rem; background: #fdfdfd;"'
$newStyle = 'style="border: 2px dashed #94a3b8; border-radius: 8px; padding: 0.25rem; margin-bottom: 1rem; background: #fdfdfd;"'

$content = $content.Replace($oldStyle, $newStyle)

[System.IO.File]::WriteAllText("$(Get-Location)\$htmlFile", $content, [System.Text.Encoding]::UTF8)
