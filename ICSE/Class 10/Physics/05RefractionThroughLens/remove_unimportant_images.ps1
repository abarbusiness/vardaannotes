$content = Get-Content "ChapterNotes.html" -Raw

# Remove Fig 5.53
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.53.*?<strong>Fig\. 5\.53</strong>.*?</p>', ''

# Remove Fig 5.54
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.54.*?<strong>Fig\. 5\.54</strong>.*?</p>', ''

# Remove Fig 5.55
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.55.*?<strong>Fig\. 5\.55</strong>.*?</p>', ''

# Remove Fig 5.57
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.57.*?<strong>Fig\. 5\.57</strong>.*?</p>', ''

# Remove Fig 5.58
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.58.*?<strong>Fig\. 5\.58</strong>.*?</p>', ''

# Remove Fig 5.59
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.59.*?<strong>Fig\. 5\.59</strong>.*?</p>', ''

# Remove Fig 5.60
$content = $content -replace '(?s)<img src="Images/Fig\. 5\.60.*?<strong>Fig\. 5\.60</strong>.*?</p>', ''

# Clean up multiple blank lines
$content = $content -replace '(?:\r?\n){3,}', "`r`n`r`n"

[System.IO.File]::WriteAllText("$(Get-Location)\ChapterNotes.html", $content, [System.Text.Encoding]::UTF8)
