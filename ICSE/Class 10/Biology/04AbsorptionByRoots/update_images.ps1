$file = "c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 10\Biology\04AbsorptionByRoots\ChapterNotes.html"
$content = Get-Content $file -Raw

function Remove-Fig ($figNum) {
    $pattern = '(?s)<div class="img-wrapper"[^>]*>\s*<img src="Images/Fig\. ' + $figNum + '\.jpg"[^>]*/>\s*<div class="img-prompt"[^>]*>.*?</div>\s*</div>\s*'
    $script:content = $script:content -replace $pattern, ''
}

function Replace-Fig ($figNum, $replacement) {
    $pattern = '(?s)<div class="img-wrapper"[^>]*>\s*<img src="Images/Fig\. ' + $figNum + '\.jpg"[^>]*/>\s*<div class="img-prompt"[^>]*>.*?</div>\s*</div>'
    $script:content = $script:content -replace $pattern, $replacement
}

Remove-Fig '4\.1'
Remove-Fig '4\.3'
Remove-Fig '4\.6'
Remove-Fig '4\.10'
Remove-Fig '4\.12'

$combined_1 = '<div class="img-wrapper" style="text-align: center; margin: 2rem 0;">
            <img src="Images/[IMAGE PLACEHOLDER Fig. 4.2, 4.13 & 4.14].jpg" style="max-width: 100%; height: auto; border-radius: 8px;"
                alt="Fig 4.2, 4.13 & 4.14: Root Hair Structure & Cell-to-Cell Conduction"
                onerror="this.style.display=''none''; this.nextElementSibling.style.display=''block'';" />
            <div class="img-prompt" style="display: block;">
                Fig 4.2, 4.13 & 4.14: A full-grown root hair, and a diagrammatic cross-section of a root showing cell-to-cell conduction of water into the xylem.
            </div>
        </div>'
Replace-Fig '4\.2' $combined_1
Remove-Fig '4\.13'
Remove-Fig '4\.14'

$combined_2 = '<div class="img-wrapper" style="text-align: center; margin: 2rem 0;">
            <img src="Images/[IMAGE PLACEHOLDER Fig. 4.4, 4.5 & 4.7].jpg" style="max-width: 100%; height: auto; border-radius: 8px;"
                alt="Fig 4.4, 4.5 & 4.7: Osmosis & Osmotic Pressure Experiments"
                onerror="this.style.display=''none''; this.nextElementSibling.style.display=''block'';" />
            <div class="img-prompt" style="display: block;">
                Fig 4.4, 4.5 & 4.7: Experiments demonstrating osmosis and osmotic pressure (Thistle funnel setup and Visking bag).
            </div>
        </div>'
Replace-Fig '4\.4' $combined_2
Remove-Fig '4\.5'
Remove-Fig '4\.7'

$combined_3 = '<div class="img-wrapper" style="text-align: center; margin: 2rem 0;">
            <img src="Images/[IMAGE PLACEHOLDER Fig. 4.8 & 4.9].jpg" style="max-width: 100%; height: auto; border-radius: 8px;"
                alt="Fig 4.8 & 4.9: Tonicity & Plasmolysis (Plant Cell States)"
                onerror="this.style.display=''none''; this.nextElementSibling.style.display=''block'';" />
            <div class="img-prompt" style="display: block;">
                Fig 4.8 & 4.9: Plant cell behavior in Isotonic, Hypotonic, and Hypertonic solutions (showing Plasmolysis and Turgidity).
            </div>
        </div>'
Replace-Fig '4\.8' $combined_3
Remove-Fig '4\.9'

$combined_4 = '<div class="img-wrapper" style="text-align: center; margin: 2rem 0;">
            <img src="Images/[IMAGE PLACEHOLDER Fig. 4.11].jpg" style="max-width: 100%; height: auto; border-radius: 8px;"
                alt="Fig 4.11: Root Pressure Experiment"
                onerror="this.style.display=''none''; this.nextElementSibling.style.display=''block'';" />
            <div class="img-prompt" style="display: block;">
                Fig 4.11: Experiment to demonstrate root pressure using a manometer.
            </div>
        </div>'
Replace-Fig '4\.11' $combined_4

$combined_5 = '<div class="img-wrapper" style="text-align: center; margin: 2rem 0;">
            <img src="Images/[IMAGE PLACEHOLDER Fig. 4.15 to 4.18].jpg" style="max-width: 100%; height: auto; border-radius: 8px;"
                alt="Fig 4.15 to 4.18: Conduction Experiments"
                onerror="this.style.display=''none''; this.nextElementSibling.style.display=''block'';" />
            <div class="img-prompt" style="display: block;">
                Fig 4.15 to 4.18: Key experiments proving water absorption by roots, upward conduction through xylem (Eosin test), and downward conduction of food through phloem (Ringing/Girdling experiment).
            </div>
        </div>'
Replace-Fig '4\.15' $combined_5
Remove-Fig '4\.16'
Remove-Fig '4\.17'
Remove-Fig '4\.18'

Set-Content $file $content
