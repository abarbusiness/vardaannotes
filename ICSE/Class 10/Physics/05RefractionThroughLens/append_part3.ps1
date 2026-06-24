$content = Get-Content "ChapterNotes.html" -Raw

$insertStr = @'
        <h2>5.13 POWER OF A LENS</h2>
        <div class="concept-blue">
            <p><strong>Definition:</strong> The deviation of the incident light rays produced by a lens on refraction through it, is a measure of its power. A thick lens (short focal length) deviates rays more and has more power.</p>
            $$ \text{Power of lens (in D)} = \frac{1}{\text{focal length (in metre)}} $$
        </div>
        <p>The unit of power is <strong>dioptre (symbol D)</strong>. A lens is of power 1 D if its focal length is 1 m (or 100 cm).</p>
        <p>Depending on the direction in which a lens deviates the light ray, its power is either positive or negative:</p>
        <ul>
            <li><strong>Convex Lens:</strong> Deviates towards centre $\implies$ <strong>Positive Power (+ve)</strong>.</li>
            <li><strong>Concave Lens:</strong> Deviates away from centre $\implies$ <strong>Negative Power (-ve)</strong>.</li>
        </ul>
        <p><em>Note:</em> If two thin lenses are placed in contact, the combination has a power equal to the algebraic sum of the powers of the individual lenses ($P = P_1 + P_2$).</p>

        <h2 style="text-align: center; color: #1e293b; background: #e0f2fe; padding: 0.6rem; border-radius: 8px; margin-bottom: 2rem; margin-top: 3rem; font-size: 1.25rem;">
            (D) MAGNIFYING GLASS AND APPLICATION OF LENSES
        </h2>

        <h2>5.14 MAGNIFYING GLASS OR SIMPLE MICROSCOPE</h2>
        <p><strong>Principle:</strong> To observe a tiny object distinctly, it is necessary to place it at the least distance of distinct vision ($D = 25 \text{ cm}$) from the normal eye. A magnifying glass is a convex lens of short focal length. When an object is placed within its focal length, it forms an erect, virtual, and magnified image on the same side, at a distance D.</p>

        <div class="img-placeholder" class="invert-dark">
            <span>[IMAGE PLACEHOLDER: MAGNIFYING GLASS]</span>
            <div class="img-prompt">
                Convex lens. Object between Optical Centre and Focus. Virtual, erect, magnified image formed at D.
            </div>
        </div>

        <div class="formula-box">
            <div class="formula-pill">MAGNIFYING POWER</div>
            $$ m = 1 + \frac{D}{f} $$
            <p>Where $f$ = focal length of the lens, $D$ = least distance of distinct vision (25 cm).</p>
        </div>
        <p>The magnifying power can be increased by using a lens of short focal length.</p>

        <h2>5.15 APPLICATION OF LENSES</h2>
        <ul>
            <li><strong>Convex Lenses:</strong> Objective lens of a telescope, camera, slide projector. Eye lens (forms inverted image on retina). Spectacles for long-sightedness (hypermetropia). Magnifying glass. Collimator of a spectroscope.</li>
            <li><strong>Concave Lenses:</strong> Spectacles for short-sightedness (myopia). Objective lens in a Galilean telescope.</li>
        </ul>

        <h2>5.16 EXPERIMENTAL DETERMINATION OF FOCAL LENGTH OF A CONVEX LENS</h2>
        <div class="reaction-type">
            <p><strong>(1) Distant object method:</strong> Focus the image of a distant object (like a tree) on a screen (wall) using a convex lens. The distance between the lens and the screen gives the approximate focal length.</p>
        </div>
        <div class="reaction-type">
            <p><strong>(2) Auxiliary plane mirror method:</strong> Place a plane mirror behind the convex lens. Adjust an object pin in front of the lens until its inverted image coincides with the pin itself without parallax. The distance of the pin from the lens is its exact focal length.</p>
        </div>

        <h2>5.17 TO DIFFERENTIATE BETWEEN A CONVEX AND A CONCAVE LENS</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
            <tr>
                <th style="border: 1px solid #ccc; padding: 10px; background-color: var(--blue-bg); text-align: left;">Method</th>
                <th style="border: 1px solid #ccc; padding: 10px; background-color: var(--blue-bg); text-align: left;">Convex Lens</th>
                <th style="border: 1px solid #ccc; padding: 10px; background-color: var(--blue-bg); text-align: left;">Concave Lens</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ccc; padding: 10px;"><strong>By touching</strong></td>
                <td style="border: 1px solid #ccc; padding: 10px;">Thick in the middle, thin at edges.</td>
                <td style="border: 1px solid #ccc; padding: 10px;">Thin in the middle, thick at edges.</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ccc; padding: 10px;"><strong>By seeing the image</strong> (Near a printed page)</td>
                <td style="border: 1px solid #ccc; padding: 10px;">Letters appear magnified.</td>
                <td style="border: 1px solid #ccc; padding: 10px;">Letters appear diminished.</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ccc; padding: 10px;"><strong>By seeing the image</strong> (Distant object)</td>
                <td style="border: 1px solid #ccc; padding: 10px;">Inverted image is seen.</td>
                <td style="border: 1px solid #ccc; padding: 10px;">Upright (erect) image is seen.</td>
            </tr>
        </table>
'@

$content = $content -replace '(?s)        </div>\s*</div>\s*<!-- Theme Toggle Script -->', "        </div>`r`n`r`n$insertStr`r`n    </div>`r`n`r`n    <!-- Theme Toggle Script -->"

[System.IO.File]::WriteAllText("$(Get-Location)\ChapterNotes.html", $content, [System.Text.Encoding]::UTF8)
