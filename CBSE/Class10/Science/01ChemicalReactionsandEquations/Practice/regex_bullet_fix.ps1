# PowerShell script with regex to clean up all bullet points in Mastersheet_Answers.html

$aPath = "c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class10\Science\01ChemicalReactionsandEquations\Practice\Mastersheet_Answers.html"
$content = [System.IO.File]::ReadAllText($aPath, [System.Text.Encoding]::UTF8)

# 1. Inject styled ul/li inside the style sheet
$oldStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details li { margin-bottom: 5px; }"
$newStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details ul { list-style-type: none; padding-left: 15px; margin-top: 5px; }`r`n  .ans-details ul li { position: relative; padding-left: 15px; margin-bottom: 5px; }`r`n  .ans-details ul li::before { content: '•'; color: var(--primary-color); font-weight: bold; position: absolute; left: 0; top: 0; }`r`n  .ans-details li { margin-bottom: 5px; }"

if ($content.Contains($oldStyle)) {
    $content = $content.Replace($oldStyle, $newStyle)
} else {
    $oldStyleLF = $oldStyle.Replace("`r`n", "`n")
    $newStyleLF = $newStyle.Replace("`r`n", "`n")
    $content = $content.Replace($oldStyleLF, $newStyleLF)
}

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

# 3. Clean up the explanation formulas for Q49 (\text{ZnO} and \text{C} outside of math blocks)
$content = $content.Replace(
    '<strong>Reduction step:</strong> \text{ZnO} is reduced to \text{Zn} by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).',
    '<strong>Reduction step:</strong> $\text{ZnO}$ is reduced to $\text{Zn}$ by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).'
)
$content = $content.Replace(
    '<strong>Oxidation step:</strong> \text{C} is oxidized to \text{CO} by gaining oxygen ($\text{C} \rightarrow \text{CO}$).',
    '<strong>Oxidation step:</strong> $\text{C}$ is oxidized to $\text{CO}$ by gaining oxygen ($\text{C} \rightarrow \text{CO}$).'
)

# 4. Use Regex replacement to convert raw asterisks in answers to semantic ul/li structure
# We match: (ans-label or ans-details or an equation) followed by two list elements starting with *
$pattern = '(?s)(<span class="ans-label">Ans:</span>\s*|<div class="ans-details">\s*|\$\text{ZnO}\(s\)\s*\+\s*\$\text{C}\(s\)\s*\\rightarrow\s*\$\text{Zn}\(s\)\s*\+\s*\$\text{CO}\(g\)\$<br>\s*|Reaction:\s*\$2\text{Mg}\(s\)\s*\+\s*\text{O}_2\(g\)\s*\\rightarrow\s*2\text{MgO}\(s\)\$<br>\s*)\s*\*\s*<strong>([^<]+)</strong>:\s*(.*?)(?:<br>)?\s*\*\s*<strong>([^<]+)</strong>:\s*(.*?)(?:\.|\s*)\s*(</div>|</li>|</ol>)'

$content = [regex]::Replace($content, $pattern, {
    param($match)
    $prefix = $match.Groups[1].Value
    $key1 = $match.Groups[2].Value
    $val1 = $match.Groups[3].Value.Trim().TrimEnd('<br>').TrimEnd('.')
    $key2 = $match.Groups[4].Value
    $val2 = $match.Groups[5].Value.Trim().TrimEnd('<br>').TrimEnd('.')
    $suffix = $match.Groups[6].Value
    
    # Format beautifully as a premium ul/li list block
    $result = "${prefix}`r`n  <ul>`r`n    <li><strong>${key1}:</strong> ${val1}.</li>`r`n    <li><strong>${key2}:</strong> ${val2}.</li>`r`n  </ul>`r`n  ${suffix}"
    
    # Adjust for LF line endings if necessary
    if ($prefix -notmatch "`r") {
        $result = $result.Replace("`r`n", "`n")
    }
    return $result
})

# Let's clean up any single raw asterisks that might remain in Q46 specifically
$content = $content.Replace(
    "Ans:</span>`r`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`r`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.",
    "Ans:</span>`r`n <div class=`"ans-details`">`r`n <ul>`r`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`r`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`r`n </ul>`r`n </div>"
)

$content = $content.Replace(
    "Ans:</span>`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.",
    "Ans:</span>`n <div class=`"ans-details`">`n <ul>`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`n </ul>`n </div>"
)

[System.IO.File]::WriteAllText($aPath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Regex repair of bullets completed!" -ForegroundColor Green
