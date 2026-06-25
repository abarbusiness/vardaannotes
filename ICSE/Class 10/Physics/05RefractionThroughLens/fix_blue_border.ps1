$htmlFile = "ChapterNotes.html"
$content = Get-Content $htmlFile -Raw

$pattern = '(?s)(<div style="border: 2px dashed )#d81b60([^>]*>\r?\n<div class="reaction-type" style="background-color: var\(--blue-bg\); border-left-color: var\(--blue-border\);">)'
$replacement = '${1}#1e88e5$2'

$content = [regex]::Replace($content, $pattern, $replacement)

[System.IO.File]::WriteAllText("$(Get-Location)\$htmlFile", $content, [System.Text.Encoding]::UTF8)
