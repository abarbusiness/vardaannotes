$content = Get-Content "ChapterNotes.html" -Raw

$insertStr = @"
        <div class="formula-box">
            <div class="formula-pill">MAGNIFICATION (M)</div>
            $$ m = \frac{h_i}{h_o} = \frac{v}{u} $$
            <p>For Real image: `$m` is negative. For Virtual image: `$m` is positive.</p>
        </div>

        <div class="practice-box">
            <span class="practice-header">PRACTICE Q7: PROJECTOR SETUP</span>
            <p><span class="q-tag">APPLICATION</span> A slide projector has to project a 100 times magnified image on a screen 5m away. What lens should be used?</p>
            <p><strong>Solution:</strong></p>
            <p>1. Image is Real (on screen), so `$m = -100`. `$v = +500 \text{ cm}`.</p>
            <p>2. `$m = v/u \implies -100 = 500/u`</p>
            <p>`$\implies u = -5 \text{ cm}`.</p>
            <p>3. `$\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{500} - \frac{1}{-5} = \frac{1}{500} + \frac{100}{500} = \frac{101}{500}`.</p>
            <p>`$f \approx 4.95 \text{ cm}` (Convex Lens).</p>
        </div>

        <div class="practice-box">
            <span class="practice-header">PRACTICE Q8: FINDING IMAGE POSITION</span>
            <p><span class="q-tag">NUMERICAL</span> An object is placed 20 cm from a convex lens of focal length 15 cm. Find image position.</p>
            <p><strong>Solution:</strong></p>
            <p>`$u = -20`, `$f = +15`.</p>
            <p>`$\frac{1}{v} - \frac{1}{u} = \frac{1}{f} \implies \frac{1}{v} = \frac{1}{15} - \frac{1}{20} = \frac{4-3}{60} = \frac{1}{60}`.</p>
            <p>`$v = +60 \text{ cm}` (Real image on other side).</p>
        </div>

        <div class="practice-box">
            <span class="practice-header">PRACTICE Q9: CONCAVE LENS</span>
            <p><span class="q-tag">NUMERICAL</span> An object is placed 30 cm from a concave lens of focal length 15 cm. Find image position.</p>
            <p><strong>Solution:</strong></p>
            <p>`$u = -30`, `$f = -15`.</p>
            <p>`$\frac{1}{v} - \frac{1}{u} = \frac{1}{f} \implies \frac{1}{v} = \frac{1}{-15} - \frac{1}{-30} = -\frac{1}{15} - \frac{1}{30} = \frac{-2-1}{30} = -\frac{3}{30} = -\frac{1}{10}`.</p>
            <p>`$v = -10 \text{ cm}` (Virtual image on same side).</p>
        </div>
"@

$content = $content -replace '(?s)        </div>\s*</div>\s*<script>', "        </div>`r`n`r`n$insertStr`r`n    </div>`r`n`r`n    <script>"

[System.IO.File]::WriteAllText("$(Get-Location)\ChapterNotes.html", $content, [System.Text.Encoding]::UTF8)
