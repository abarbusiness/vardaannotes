$content = Get-Content -Path "ChapterNotes.html" -Raw

# Replace all .jpg with .png for the images
$content = $content -replace '\.jpg"', '.png"'

# Fix the specific name for the i-delta curve
$content = $content -replace 'Images/Fig\. 4\.24 i-\$\\delta\$ curve\.png', 'Images/Fig. 4.24 curve.png'

# Replace the flex box for 4.1, 4.2, 4.3
$pattern = '<div style="display: flex; gap: 1\.5rem; margin: 1\.5rem 0; align-items: flex-start;">.*?Fig\. 4\.3.*?</div>\s*</div>'
$replacement = @"
<img src="Images/Figure 4.1 and 4.2 and 4.3 combined .png" alt="Fig. 4.1, 4.2 and 4.3 combined" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 4.1, 4.2 & 4.3</strong> Refraction Cases
        </p>
"@

$content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::Singleline)

Set-Content -Path "ChapterNotes.html" -Value $content -Encoding UTF8
