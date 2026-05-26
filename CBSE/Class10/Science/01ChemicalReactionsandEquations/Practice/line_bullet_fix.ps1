# PowerShell script for line-by-line bullet list parser

$aPath = "c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class10\Science\01ChemicalReactionsandEquations\Practice\Mastersheet_Answers.html"
$content = [System.IO.File]::ReadAllText($aPath, [System.Text.Encoding]::UTF8)

# 1. Clean up explanation formulas for Q49
$content = $content.Replace(
    '<strong>Reduction step:</strong> \text{ZnO} is reduced to \text{Zn} by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).',
    '<strong>Reduction step:</strong> $\text{ZnO}$ is reduced to $\text{Zn}$ by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).'
)
$content = $content.Replace(
    '<strong>Oxidation step:</strong> \text{C} is oxidized to \text{CO} by gaining oxygen ($\text{C} \rightarrow \text{CO}$).',
    '<strong>Oxidation step:</strong> $\text{C}$ is oxidized to $\text{CO}$ by gaining oxygen ($\text{C} \rightarrow \text{CO}$).'
)

# 2. Fix the specific un-compiled + \text{Heat} and + \text{Energy} outside dollars
$content = $content.Replace(
    'Balanced equation: $\text{CaO}(s) + \text{H}_2\text{O}(l) \rightarrow \text{Ca(OH)}_2(aq)$ + \text{Heat} <br>',
    'Balanced equation: $\text{CaO}(s) + \text{H}_2\text{O}(l) \rightarrow \text{Ca(OH)}_2(aq) + \text{Heat}$<br>'
)

$content = $content.Replace(
    'Balanced equation: $\text{CaO}(s) + \text{H}_2\text{O}(l) \rightarrow \text{Ca(OH)}_2(aq)$ + \text{Heat}<br>',
    'Balanced equation: $\text{CaO}(s) + \text{H}_2\text{O}(l) \rightarrow \text{Ca(OH)}_2(aq) + \text{Heat}$<br>'
)

$content = $content.Replace(
    'Balanced equation: $\text{C}_6\text{H}_{12}\text{O}_6(aq) + 6\text{O}_2(g) \rightarrow 6\text{CO}_2(g) + 6\text{H}_2\text{O}(l)$ + \text{Energy} .',
    'Balanced equation: $\text{C}_6\text{H}_{12}\text{O}_6(aq) + 6\text{O}_2(g) \rightarrow 6\text{CO}_2(g) + 6\text{H}_2\text{O}(l) + \text{Energy}$.'
)

$content = $content.Replace(
    'Equation: $\text{C}_6\text{H}_{12}\text{O}_6(aq) + 6\text{O}_2(g) \rightarrow 6\text{CO}_2(g) + 6\text{H}_2\text{O}(l)$ + \text{Energy (Heat)} .',
    'Equation: $\text{C}_6\text{H}_{12}\text{O}_6(aq) + 6\text{O}_2(g) \rightarrow 6\text{CO}_2(g) + 6\text{H}_2\text{O}(l) + \text{Energy (Heat)}$.'
)

$content = $content.Replace(
    '<strong>Exothermic:</strong> $\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(g)$ + \text{Heat} <br>',
    '<strong>Exothermic:</strong> $\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(g) + \text{Heat}$<br>'
)

$lines = $content -split "`r?`n"
$newLines = @()
$inList = $false

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    # Match bullet lines starting with *
    if ($line -match '^\s*\*\s*<strong>(.*?)</strong>\s*(.*?)(?:<br>)?\s*$') {
        $key = $Matches[1].Trim()
        $val = $Matches[2].Trim().TrimEnd('.')
        
        if (-not $inList) {
            $newLines += "  <ul>"
            $inList = $true
        }
        $newLines += "    <li><strong>$key</strong> $val.</li>"
    }
    else {
        if ($inList) {
            $newLines += "  </ul>"
            $inList = $false
        }
        $newLines += $line
    }
}

# Join back with standard CRLF
$finalContent = $newLines -join "`r`n"

# Verify style sheet contains the custom list rules
$oldStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details li { margin-bottom: 5px; }"
$newStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details ul { list-style-type: none; padding-left: 15px; margin-top: 5px; }`r`n  .ans-details ul li { position: relative; padding-left: 15px; margin-bottom: 5px; }`r`n  .ans-details ul li::before { content: '•'; color: var(--primary-color); font-weight: bold; position: absolute; left: 0; top: 0; }`r`n  .ans-details li { margin-bottom: 5px; }"

if ($finalContent.Contains($oldStyle)) {
    $finalContent = $finalContent.Replace($oldStyle, $newStyle)
} else {
    $oldStyleLF = $oldStyle.Replace("`r`n", "`n")
    $newStyleLF = $newStyle.Replace("`r`n", "`n")
    $finalContent = $finalContent.Replace($oldStyleLF, $newStyleLF)
}

[System.IO.File]::WriteAllText($aPath, $finalContent, [System.Text.Encoding]::UTF8)
Write-Host "Line bullet fix completed!" -ForegroundColor Green
