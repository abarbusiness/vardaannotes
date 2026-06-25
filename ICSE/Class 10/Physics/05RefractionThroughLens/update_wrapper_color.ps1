$htmlFile = "ChapterNotes.html"
$content = Get-Content $htmlFile -Raw

$oldColor = '#94a3b8'
$newColor = '#d81b60'

$content = $content.Replace($oldColor, $newColor)

[System.IO.File]::WriteAllText("$(Get-Location)\$htmlFile", $content, [System.Text.Encoding]::UTF8)
