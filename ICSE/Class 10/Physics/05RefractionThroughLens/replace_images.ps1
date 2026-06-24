$content = Get-Content "ChapterNotes.html" -Raw

$rep1_old = @'
            <p>The equation relating the distance of object ($u$), distance of image ($v$) and focal length ($f$) of a lens is called the lens formula. It is the same for both convex and concave lenses:</p>
            $$ \frac{1}{v} - \frac{1}{u} = \frac{1}{f} $$
        </div>
'@

$rep1_new = @'
            <p>The equation relating the distance of object ($u$), distance of image ($v$) and focal length ($f$) of a lens is called the lens formula. It is the same for both convex and concave lenses:</p>
            $$ \frac{1}{v} - \frac{1}{u} = \frac{1}{f} $$
        </div>

        <img src="Images/Fig. 5.53 Lens formula.jpg" alt="Fig. 5.53 Lens formula" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.53</strong> Lens formula
        </p>
'@

$content = $content.Replace($rep1_old, $rep1_new)


$rep2_old = @'
        <div class="formula-box">
            <div class="formula-pill">MAGNIFICATION (M)</div>
            $$ m = \frac{h_i}{h_o} = \frac{v}{u} $$
            <p>For Real image: $m$ is negative. For Virtual image: $m$ is positive.</p>
        </div>
'@

$rep2_new = @'
        <div class="formula-box">
            <div class="formula-pill">MAGNIFICATION (M)</div>
            $$ m = \frac{h_i}{h_o} = \frac{v}{u} $$
            <p>For Real image: $m$ is negative. For Virtual image: $m$ is positive.</p>
        </div>

        <img src="Images/Fig. 5.54 Magnification.jpg" alt="Fig. 5.54 Magnification" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.54</strong> Magnification
        </p>
'@

$content = $content.Replace($rep2_old, $rep2_new)


$rep3_old = @'
        <div class="img-placeholder" class="invert-dark">
            <span>[IMAGE PLACEHOLDER: MAGNIFYING GLASS]</span>
            <div class="img-prompt">
                Convex lens. Object between Optical Centre and Focus. Virtual, erect, magnified image formed at D.
            </div>
        </div>
'@

$rep3_new = @'
        <img src="Images/Fig. 5.55 Magnifying glass (or simple microscope).jpg" alt="Fig. 5.55 Magnifying glass (or simple microscope)" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.55</strong> Magnifying glass (or simple microscope)
        </p>

        <img src="Images/Fig. 5.56 Ray diagram for location of image in a magnifying glass.jpg" alt="Fig. 5.56 Ray diagram for location of image in a magnifying glass" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.56</strong> Ray diagram for location of image in a magnifying glass
        </p>
'@

$content = $content.Replace($rep3_old, $rep3_new)


$rep4_old = @'
        <h2>5.16 EXPERIMENTAL DETERMINATION OF FOCAL LENGTH OF A CONVEX LENS</h2>
        <div class="reaction-type">
            <p><strong>(1) Distant object method:</strong> Focus the image of a distant object (like a tree) on a screen (wall) using a convex lens. The distance between the lens and the screen gives the approximate focal length.</p>
        </div>
        <div class="reaction-type">
            <p><strong>(2) Auxiliary plane mirror method:</strong> Place a plane mirror behind the convex lens. Adjust an object pin in front of the lens until its inverted image coincides with the pin itself without parallax. The distance of the pin from the lens is its exact focal length.</p>
        </div>
'@

$rep4_new = @'
        <h2>5.16 EXPERIMENTAL DETERMINATION OF FOCAL LENGTH OF A CONVEX LENS</h2>
        <div class="reaction-type">
            <p><strong>(1) Distant object method:</strong> Focus the image of a distant object (like a tree) on a screen (wall) using a convex lens. The distance between the lens and the screen gives the approximate focal length.</p>
        </div>
        
        <img src="Images/Fig. 5.57 Determination of focal length of a convex lens by the distant object method.jpg" alt="Fig. 5.57 Determination of focal length of a convex lens by the distant object method" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.57</strong> Determination of focal length of a convex lens by the distant object method
        </p>

        <img src="Images/Fig. 5.58 Ray diagram showing the focal length of a convex lens.jpg" alt="Fig. 5.58 Ray diagram showing the focal length of a convex lens" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.58</strong> Ray diagram showing the focal length of a convex lens
        </p>

        <div class="reaction-type">
            <p><strong>(2) Auxiliary plane mirror method:</strong> Place a plane mirror behind the convex lens. Adjust an object pin in front of the lens until its inverted image coincides with the pin itself without parallax. The distance of the pin from the lens is its exact focal length.</p>
        </div>

        <img src="Images/Fig. 5.59 Determination of focal length of a convex lens by an auxiliary plane mirror.jpg" alt="Fig. 5.59 Determination of focal length of a convex lens by an auxiliary plane mirror" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.59</strong> Determination of focal length of a convex lens by an auxiliary plane mirror
        </p>

        <img src="Images/Fig. 5.60 Determination of focal length of a convex lens by one pin method using an optical bench.jpg" alt="Fig. 5.60 Determination of focal length of a convex lens by one pin method using an optical bench" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.60</strong> Determination of focal length of a convex lens by one pin method using an optical bench
        </p>

        <img src="Images/Fig. 5.61 Ray diagram for determination of focal length of a convex lens by using a pin and a plane mirror.jpg" alt="Fig. 5.61 Ray diagram for determination of focal length of a convex lens by using a pin and a plane mirror" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; display: block;">
        <p style="text-align: center; font-size: 0.9rem; color: #64748b; margin-top: -0.5rem; margin-bottom: 1.5rem;">
            <strong>Fig. 5.61</strong> Ray diagram for determination of focal length of a convex lens by using a pin and a plane mirror
        </p>
'@

$content = $content.Replace($rep4_old, $rep4_new)

[System.IO.File]::WriteAllText("$(Get-Location)\ChapterNotes.html", $content, [System.Text.Encoding]::UTF8)
