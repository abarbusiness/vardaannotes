# PowerShell Script to perform the exact HTML structural updates in Mastersheet_Answers.html

$aPath = "c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class10\Science\01ChemicalReactionsandEquations\Practice\Mastersheet_Answers.html"
$content = [System.IO.File]::ReadAllText($aPath, [System.Text.Encoding]::UTF8)

# 1. Add styled ul/li inside style block
$oldStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details li { margin-bottom: 5px; }"
$newStyle = ".ans-details ol { margin-top: 5px; margin-left: 20px; list-style-type: lower-alpha; }`r`n  .ans-details ul { list-style-type: none; padding-left: 15px; margin-top: 5px; }`r`n  .ans-details ul li { position: relative; padding-left: 15px; margin-bottom: 5px; }`r`n  .ans-details ul li::before { content: '•'; color: var(--primary-color); font-weight: bold; position: absolute; left: 0; top: 0; }`r`n  .ans-details li { margin-bottom: 5px; }"

# Support both CRLF and LF style endings for safety
if ($content -contains "`r") {
    $content = $content.Replace($oldStyle, $newStyle)
} else {
    $oldStyleLF = $oldStyle.Replace("`r`n", "`n")
    $newStyleLF = $newStyle.Replace("`r`n", "`n")
    $content = $content.Replace($oldStyleLF, $newStyleLF)
}

# 2. Fix un-compiled + \text{Heat} and + \text{Energy} outside dollars
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

# 3. Replace all raw asterisks with clean <ul>/<li> lists

# Q46
$content = $content.Replace(
    '<span class="ans-label">Ans:</span>`r`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`r`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.',
    '<span class="ans-label">Ans:</span>`r`n <div class="ans-details">`r`n <ul>`r`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`r`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`r`n </ul>`r`n </div>'
)
$content = $content.Replace(
    '<span class="ans-label">Ans:</span>`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.',
    '<span class="ans-label">Ans:</span>`n <div class="ans-details">`n <ul>`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`n </ul>`n </div>'
)
$content = $content.Replace(
    '<span class="ans-label">Ans:</span> <br>`r`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`r`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.',
    '<span class="ans-label">Ans:</span>`r`n <div class="ans-details">`r`n <ul>`r`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`r`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`r`n </ul>`r`n </div>'
)
$content = $content.Replace(
    '<span class="ans-label">Ans:</span> <br>`n * <strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.<br>`n * <strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.',
    '<span class="ans-label">Ans:</span>`n <div class="ans-details">`n <ul>`n <li><strong>Oxidation:</strong> The addition of oxygen to a substance or the removal of hydrogen from a substance.</li>`n <li><strong>Reduction:</strong> The removal of oxygen from a substance or the addition of hydrogen to a substance.</li>`n </ul>`n </div>'
)

# Q47
$content = $content.Replace(
    '* <strong>Oxidation:</strong> The process involving loss of electrons by an atom or ion (e.g., $\text{Na} \rightarrow \text{Na}^+ + e^-$).<br>`r`n * <strong>Reduction:</strong> The process involving gain of electrons by an atom or ion (e.g., $\text{Cl} + e^- \rightarrow \text{Cl}^-$).',
    '<div class="ans-details">`r`n <ul>`r`n <li><strong>Oxidation:</strong> The process involving loss of electrons by an atom or ion (e.g., $\text{Na} \rightarrow \text{Na}^+ + e^-$).</li>`r`n <li><strong>Reduction:</strong> The process involving gain of electrons by an atom or ion (e.g., $\text{Cl} + e^- \rightarrow \text{Cl}^-$).</li>`r`n </ul>`r`n </div>'
)
$content = $content.Replace(
    '* <strong>Oxidation:</strong> The process involving loss of electrons by an atom or ion (e.g., $\text{Na} \rightarrow \text{Na}^+ + e^-$).<br>`n * <strong>Reduction:</strong> The process involving gain of electrons by an atom or ion (e.g., $\text{Cl} + e^- \rightarrow \text{Cl}^-$).',
    '<div class="ans-details">`n <ul>`n <li><strong>Oxidation:</strong> The process involving loss of electrons by an atom or ion (e.g., $\text{Na} \rightarrow \text{Na}^+ + e^-$).</li>`n <li><strong>Reduction:</strong> The process involving gain of electrons by an atom or ion (e.g., $\text{Cl} + e^- \rightarrow \text{Cl}^-$).</li>`n </ul>`n </div>'
)

# Q49
$content = $content.Replace(
    '* <strong>Reduction step:</strong> \text{ZnO} is reduced to \text{Zn} by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).<br>`r`n * <strong>Oxidation step:</strong> \text{C} is oxidized to \text{CO} by gaining oxygen ($\text{C} \rightarrow \text{CO}$).<br>',
    '<ul>`r`n <li><strong>Reduction step:</strong> $\text{ZnO}$ is reduced to $\text{Zn}$ by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).</li>`r`n <li><strong>Oxidation step:</strong> $\text{C}$ is oxidized to $\text{CO}$ by gaining oxygen ($\text{C} \rightarrow \text{CO}$).</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Reduction step:</strong> \text{ZnO} is reduced to \text{Zn} by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).<br>`n * <strong>Oxidation step:</strong> \text{C} is oxidized to \text{CO} by gaining oxygen ($\text{C} \rightarrow \text{CO}$).<br>',
    '<ul>`n <li><strong>Reduction step:</strong> $\text{ZnO}$ is reduced to $\text{Zn}$ by losing oxygen ($\text{ZnO} \rightarrow \text{Zn}$).</li>`n <li><strong>Oxidation step:</strong> $\text{C}$ is oxidized to $\text{CO}$ by gaining oxygen ($\text{C} \rightarrow \text{CO}$).</li>`n </ul>'
)

# Q52
$content = $content.Replace(
    '* <strong>Precipitate formed:</strong> <strong>Barium Sulphate ($\text{BaSO}_4$)</strong> (insoluble in water).<br>`r`n * <strong>Balanced Equation:</strong> $\text{BaCl}_2(aq) + \text{Na}_2\text{SO}_4(aq) \rightarrow \text{BaSO}_4(s) + 2\text{NaCl}(aq)$.',
    '<ul>`r`n <li><strong>Precipitate formed:</strong> <strong>Barium Sulphate ($\text{BaSO}_4$)</strong> (insoluble in water).</li>`r`n <li><strong>Balanced Equation:</strong> $\text{BaCl}_2(aq) + \text{Na}_2\text{SO}_4(aq) \rightarrow \text{BaSO}_4(s) + 2\text{NaCl}(aq)$.</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Precipitate formed:</strong> <strong>Barium Sulphate ($\text{BaSO}_4$)</strong> (insoluble in water).<br>`n * <strong>Balanced Equation:</strong> $\text{BaCl}_2(aq) + \text{Na}_2\text{SO}_4(aq) \rightarrow \text{BaSO}_4(s) + 2\text{NaCl}(aq)$.',
    '<ul>`n <li><strong>Precipitate formed:</strong> <strong>Barium Sulphate ($\text{BaSO}_4$)</strong> (insoluble in water).</li>`n <li><strong>Balanced Equation:</strong> $\text{BaCl}_2(aq) + \text{Na}_2\text{SO}_4(aq) \rightarrow \text{BaSO}_4(s) + 2\text{NaCl}(aq)$.</li>`n </ul>'
)

# Q54
$content = $content.Replace(
    '* <strong>Oxidizing Agent:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it gains electrons and oxidizes magnesium.<br>`r`n * <strong>Reducing Agent:</strong> <strong>Magnesium ($\text{Mg}$)</strong> because it loses electrons and reduces oxygen.',
    '<ul>`r`n <li><strong>Oxidizing Agent:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it gains electrons and oxidizes magnesium.</li>`r`n <li><strong>Reducing Agent:</strong> <strong>Magnesium ($\text{Mg}$)</strong> because it loses electrons and reduces oxygen.</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Oxidizing Agent:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it gains electrons and oxidizes magnesium.<br>`n * <strong>Reducing Agent:</strong> <strong>Magnesium ($\text{Mg}$)</strong> because it loses electrons and reduces oxygen.',
    '<ul>`n <li><strong>Oxidizing Agent:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it gains electrons and oxidizes magnesium.</li>`n <li><strong>Reducing Agent:</strong> <strong>Magnesium ($\text{Mg}$)</strong> because it loses electrons and reduces oxygen.</li>`n </ul>'
)

# Q55
$content = $content.Replace(
    '* <strong>Substance Oxidized:</strong> <strong>Hydrochloric acid ($\text{HCl}$)</strong> (loses hydrogen to form $\text{Cl}_2$ gas).<br>`r`n * <strong>Oxidizing Agent:</strong> <strong>Manganese dioxide ($\text{MnO}_2$)</strong> (loses oxygen to form $\text{MnCl}_2$, getting reduced in the process).',
    '<ul>`r`n <li><strong>Substance Oxidized:</strong> <strong>Hydrochloric acid ($\text{HCl}$)</strong> (loses hydrogen to form $\text{Cl}_2$ gas).</li>`r`n <li><strong>Oxidizing Agent:</strong> <strong>Manganese dioxide ($\text{MnO}_2$)</strong> (loses oxygen to form $\text{MnCl}_2$, getting reduced in the process).</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Substance Oxidized:</strong> <strong>Hydrochloric acid ($\text{HCl}$)</strong> (loses hydrogen to form $\text{Cl}_2$ gas).<br>`n * <strong>Oxidizing Agent:</strong> <strong>Manganese dioxide ($\text{MnO}_2$)</strong> (loses oxygen to form $\text{MnCl}_2$, getting reduced in the process).',
    '<ul>`n <li><strong>Substance Oxidized:</strong> <strong>Hydrochloric acid ($\text{HCl}$)</strong> (loses hydrogen to form $\text{Cl}_2$ gas).</li>`n <li><strong>Oxidizing Agent:</strong> <strong>Manganese dioxide ($\text{MnO}_2$)</strong> (loses oxygen to form $\text{MnCl}_2$, getting reduced in the process).</li>`n </ul>'
)

# Q59
$content = $content.Replace(
    '* <strong>Substance Oxidized:</strong> <strong>Sodium ($\text{Na}$)</strong> because it gains oxygen to form $\text{Na}_2\text{O}$ (electronically, it loses electrons: $\text{Na} \rightarrow \text{Na}^+ + e^-$).<br>`r`n * <strong>Substance Reduced:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it is gained by sodium (electronically, it gains electrons: $\text{O}_2 + 4e^- \rightarrow 2\text{O}^{2-}$).',
    '<ul>`r`n <li><strong>Substance Oxidized:</strong> <strong>Sodium ($\text{Na}$)</strong> because it gains oxygen to form $\text{Na}_2\text{O}$ (electronically, it loses electrons: $\text{Na} \rightarrow \text{Na}^+ + e^-$).</li>`r`n <li><strong>Substance Reduced:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it is gained by sodium (electronically, it gains electrons: $\text{O}_2 + 4e^- \rightarrow 2\text{O}^{2-}$).</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Substance Oxidized:</strong> <strong>Sodium ($\text{Na}$)</strong> because it gains oxygen to form $\text{Na}_2\text{O}$ (electronically, it loses electrons: $\text{Na} \rightarrow \text{Na}^+ + e^-$).<br>`n * <strong>Substance Reduced:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it is gained by sodium (electronically, it gains electrons: $\text{O}_2 + 4e^- \rightarrow 2\text{O}^{2-}$).',
    '<ul>`n <li><strong>Substance Oxidized:</strong> <strong>Sodium ($\text{Na}$)</strong> because it gains oxygen to form $\text{Na}_2\text{O}$ (electronically, it loses electrons: $\text{Na} \rightarrow \text{Na}^+ + e^-$).</li>`n <li><strong>Substance Reduced:</strong> <strong>Oxygen ($\text{O}_2$)</strong> because it is gained by sodium (electronically, it gains electrons: $\text{O}_2 + 4e^- \rightarrow 2\text{O}^{2-}$).</li>`n </ul>'
)

# Q60
$content = $content.Replace(
    '* <strong>Oxidizing Agent:</strong> <strong>Sulphur dioxide ($\text{SO}_2$)</strong> (it is reduced by losing oxygen to form sulphur).<br>`r`n * <strong>Reducing Agent:</strong> <strong>Hydrogen sulphide ($\text{H}_2\text{S}$)</strong> (it is oxidized by losing hydrogen to form sulphur).',
    '<ul>`r`n <li><strong>Oxidizing Agent:</strong> <strong>Sulphur dioxide ($\text{SO}_2$)</strong> (it is reduced by losing oxygen to form sulphur).</li>`r`n <li><strong>Reducing Agent:</strong> <strong>Hydrogen sulphide ($\text{H}_2\text{S}$)</strong> (it is oxidized by losing hydrogen to form sulphur).</li>`r`n </ul>'
)
$content = $content.Replace(
    '* <strong>Oxidizing Agent:</strong> <strong>Sulphur dioxide ($\text{SO}_2$)</strong> (it is reduced by losing oxygen to form sulphur).<br>`n * <strong>Reducing Agent:</strong> <strong>Hydrogen sulphide ($\text{H}_2\text{S}$)</strong> (it is oxidized by losing hydrogen to form sulphur).',
    '<ul>`n <li><strong>Oxidizing Agent:</strong> <strong>Sulphur dioxide ($\text{SO}_2$)</strong> (it is reduced by losing oxygen to form sulphur).</li>`n <li><strong>Reducing Agent:</strong> <strong>Hydrogen sulphide ($\text{H}_2\text{S}$)</strong> (it is oxidized by losing hydrogen to form sulphur).</li>`n </ul>'
)

[System.IO.File]::WriteAllText($aPath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Bulleted lists and heat/energy formulas fixed successfully!" -ForegroundColor Green
