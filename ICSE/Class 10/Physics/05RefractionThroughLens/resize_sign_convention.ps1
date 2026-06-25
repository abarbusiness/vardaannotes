$htmlFile = "ChapterNotes.html"
$content = Get-Content $htmlFile -Raw

$oldStr = 'src="Images/Fig. 5.52 Sign convention.png" alt="Fig. 5.52 Sign convention" style="width: 70%; max-width: 500px; border-radius: 8px; margin: 1.5rem auto; display: block;"'
$newStr = 'src="Images/Fig. 5.52 Sign convention.png" alt="Fig. 5.52 Sign convention" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;"'

$content = $content.Replace($oldStr, $newStr)

[System.IO.File]::WriteAllText("$(Get-Location)\$htmlFile", $content, [System.Text.Encoding]::UTF8)
