$content = Get-Content -Path "ChapterNotes.html" -Raw

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Oersted.*?</div>', '<div class="visual-container">
            <img src="Images/Oersted''s Experiment diagram.png" alt="Oersted Experiment">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?trajectory is a 3D coiled.*?</div>', '<div class="visual-container">
            <img src="Images/Two panels showing charged particle trajectories in a uniform magnetic field.png" alt="Particle Trajectories">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?straight conducting rod.*?</div>', '<div class="visual-container">
            <img src="Images/Diagram of a straight conducting rod of length l carryig curret i placed i uniform magnetic field B.png" alt="Force on Conductor">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Biot-Savart Law diagram.*?</div>', '<div class="visual-container">
            <img src="Images/Biot-Savart Law diagram. An arbitrarily curved wire carrying current ''I''. Highlight a tiny, straight section of the wire label.png" alt="Biot Savart Law">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Derivation diagram for magnetic field on the axis.*?</div>', '<div class="visual-container">
            <img src="Images/Derivation diagram for magnetic field on the axis of a circular loop.png" alt="Field on Axis">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Ampere''s Circuital Law diagram.*?</div>', '<div class="visual-container">
            <img src="Images/Ampere''s Circuital Law diagram.png" alt="Ampere Law">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Derivation of Magnetic field in a Solenoid.*?</div>', '<div class="visual-container">
            <img src="Images/Derivation of Magnetic field in a Solenoid. A cross-section of a long solenoid.png" alt="Solenoid Field">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Two long, straight parallel wires.*?</div>', '<div class="visual-container">
            <img src="Images/Two long, straight parallel wires separated by distance ''d''.png" alt="Parallel Wires Force">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Derivation of Torque on a rectangular loop.*?</div>', '<div class="visual-container">
            <img src="Images/Derivation of Torque on a rectangular loop..png" alt="Torque on Loop">
        </div>'

$content = $content -replace '(?s)<div class="ai-prompt-box">.*?Cross-section of a Moving Coil Galvanometer.*?</div>', '<div class="visual-container">
            <img src="Images/Cross-section of a Moving Coil Galvanometer.png" alt="Galvanometer">
        </div>'

Set-Content -Path "ChapterNotes.html" -Value $content
