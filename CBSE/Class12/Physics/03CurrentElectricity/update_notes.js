const fs = require('fs');
let html = fs.readFileSync('ChapterNotes.html', 'utf8');

const carbonResistorsHTML = 
        <h2>6. Carbon Resistors and Color Coding (Important for NEET)</h2>
        <div class="ai-prompt-box">
            <strong>[AI Image Placeholder: Landscape (16:9) - Background: #FFFFFF]</strong><br>
            <em>AI Prompt:</em> "A diagram of a cylindrical carbon resistor with four colored bands. Band 1 (Leftmost): Yellow, Band 2: Violet, Band 3: Brown, Band 4 (Rightmost, slightly separated): Gold. Below the resistor, show the calculation: 47 x 10^1 Ohms +- 5%. Clean educational style, white background #FFFFFF."
        </div>
        <p>Commercial resistors are mostly made of carbon because they are compact and inexpensive. Their values are indicated by a color code.</p>
        <div class="blue-box">
            <span class="box-label">Color Code Mnemonic</span>
            <strong>B B R O Y</strong> of <strong>G</strong>reat <strong>B</strong>ritain has a <strong>V</strong>ery <strong>G</strong>ood <strong>W</strong>ife.<br>
            (Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Gray=8, White=9).<br>
            <br>
            <strong>How to read:</strong><br>
            1st and 2nd bands: First two significant figures.<br>
            3rd band: Decimal multiplier (^x$).<br>
            4th band: Tolerance (Gold = $\pm 5\%$, Silver = $\pm 10\%$, No color = $\pm 20\%$).
        </div>
        <div class="practice-box">
            <span class="box-label">Practice Problem (NEET)</span>
            <strong>Question:</strong> A carbon resistor has color bands of Red, Red, Orange, and Silver. What is its resistance and tolerance?
            <div class="solution">
                <strong>Solution:</strong><br>
                1st Band (Red) = 2<br>
                2nd Band (Red) = 2<br>
                3rd Band (Orange) = Multiplier of ^3$<br>
                4th Band (Silver) = Tolerance of $\pm 10\%$<br>
                Resistance = $\mathbf{22 \times 10^3 \, \Omega \pm 10\%}$ or $\mathbf{22 \, k\Omega \pm 10\%}$.
            </div>
        </div>
;

const combinationResistorsHTML = 
        <h2>8. Combination of Resistors</h2>
        <div class="ai-prompt-box">
            <strong>[AI Image Placeholder: Landscape (16:9) - Background: #FFFFFF]</strong><br>
            <em>AI Prompt:</em> "Two circuit diagrams showing resistor combinations. Top (Series): Three resistors R1, R2, R3 connected end-to-end in a single line with a battery. Bottom (Parallel): Three resistors R1, R2, R3 connected in parallel branches across common nodes A and B, powered by a battery. Clean schematic style, white background #FFFFFF."
        </div>
        <h3>A. Series Combination</h3>
        <p>Current is the <strong>same</strong> through all resistors. Voltage is divided ( = V_1 + V_2 + V_3$).</p>
        <strong>R_{eq} = R_1 + R_2 + R_3 + \dots + R_n</strong>
        <p><em>(Equivalent resistance is always greater than the largest individual resistance in the series combination.)</em></p>
        
        <h3>B. Parallel Combination</h3>
        <p>Voltage is the <strong>same</strong> across all resistors. Current is divided ( = I_1 + I_2 + I_3$).</p>
        <strong>\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots + \frac{1}{R_n}</strong>
        <div class="green-box">
            <span class="box-label">Shortcut Formulas</span>
            - For two resistors in parallel: {eq} = \frac{R_1 R_2}{R_1 + R_2}$<br>
            - For $ identical resistors in parallel: {eq} = \frac{R}{n}$<br>
            <em>(Equivalent resistance is always less than the smallest individual resistance in the parallel combination.)</em>
        </div>
        <div class="practice-box">
            <span class="box-label">Practice Problem (Boards/JEE)</span>
            <strong>Question:</strong> Three resistors of  \, \Omega$,  \, \Omega$, and  \, \Omega$ are connected in parallel. What is the equivalent resistance? If a  \text{ V}$ battery is connected across this combination, find the total current drawn.
            <div class="solution">
                <strong>Solution:</strong><br>
                1. Equivalent Resistance in parallel:<br>
                $\frac{1}{R_{eq}} = \frac{1}{2} + \frac{1}{3} + \frac{1}{6} = \frac{3 + 2 + 1}{6} = \frac{6}{6} = 1 \, \Omega^{-1}$.<br>
                So, $\mathbf{R_{eq} = 1 \, \Omega}$.<br>
                2. Total Current drawn:<br>
                 = \frac{V}{R_{eq}} = \frac{10}{1} = \mathbf{10 \text{ A}}$.
            </div>
        </div>
;

const nodalAnalysisHTML = 
        <div class="yellow-box">
            <span class="box-label">JEE Pro-Tip: Nodal Analysis</span>
            <p>Nodal Analysis is a powerful shortcut to solve complex circuits much faster than Kirchhoff's rules by applying KCL at a junction in terms of node voltages.</p>
            <strong>Steps:</strong>
            <ol>
                <li>Identify the principal nodes (junctions where 3 or more branches meet).</li>
                <li>Assign one node as the "reference node" (Ground) and set its potential to \text{V}$.</li>
                <li>Assign unknown potentials (e.g., , y$) to the other principal nodes.</li>
                <li>Assume current flows <em>out</em> of the unknown node into all branches. Apply KCL: $\sum I_{out} = 0$.</li>
                <li>Write currents as  = \frac{\Delta V}{R}$ (e.g., $\frac{x - V_{adjacent}}{R}$). Solve for $.</li>
            </ol>
            <em>Once you know the node voltages, you can find the current through any branch instantly!</em>
        </div>

        <div class="yellow-box">
            <span class="box-label">JEE Pro-Tip: Circuit Symmetry</span>
            <p>For complex infinite or 3D grids (like a cube of resistors), use symmetry to eliminate branches.</p>
            <ul>
                <li><strong>Mirror Symmetry:</strong> If a circuit is symmetric about an axis perpendicular to the current flow, nodes on this axis are at the same potential. Resistors crossing this axis carry zero current and can be removed.</li>
                <li><strong>Folding Symmetry:</strong> If a circuit is symmetric about an axis parallel to the current flow, nodes opposite each other on the axis are at the same potential and can be folded (merged).</li>
            </ul>
        </div>
;

const meterBridgeHTML = 
        <h3>D. Meter Bridge (Slide Wire Bridge)</h3>
        <div class="ai-prompt-box">
            <strong>[AI Image Placeholder: Landscape (16:9) - Background: #FFFFFF]</strong><br>
            <em>AI Prompt:</em> "Diagram of a Meter Bridge experiment. A 1-meter long resistance wire stretched on a wooden board above a meter scale. Thick copper strips at the ends with two gaps. Left gap contains a Resistance Box 'R'. Right gap contains an unknown wire resistor 'S'. A galvanometer 'G' connects the central copper strip to a sliding jockey touching the wire at length 'l'. A battery is connected across the ends of the 1m wire. White background #FFFFFF."
        </div>
        <p>A meter bridge is the practical application of the Wheatstone bridge principle, used to find an unknown resistance.</p>
        <p>When the jockey is slid over the 1-meter long wire (made of manganin or constantan) to a point where the galvanometer shows zero deflection (null point), the bridge is balanced.</p>
        <div class="blue-box">
            <span class="box-label">Meter Bridge Formula</span>
            Let the balancing length from the left end be $ cm. The resistance of the wire is proportional to its length.<br>
            Using Wheatstone condition: $\frac{R}{S} = \frac{l}{100-l}$<br>
            <strong>S = R \left( \frac{100-l}{l} \right)</strong>
        </div>
        <div class="yellow-box">
            <span class="box-label">JEE Focus: End Corrections</span>
            In a real meter bridge, the copper strips at the ends and the solder joints offer some small resistance. These are called <strong>End Resistances</strong> (let them be equivalent to lengths $\alpha$ and $\beta$ of the wire). The modified formula becomes:
            <strong>\frac{R}{S} = \frac{l + \alpha}{100 - l + \beta}</strong>
        </div>
        <div class="practice-box">
            <span class="box-label">Practice Problem (JEE Main)</span>
            <strong>Question:</strong> In a meter bridge, the null point is found at a distance of .7 \text{ cm}$ from A. If now a resistance of  \, \Omega$ is connected in parallel with $, the null point occurs at .9 \text{ cm}$. Determine the values of $ and $.
            <div class="solution">
                <strong>Solution:</strong><br>
                <em>Case 1:</em> $\frac{R}{S} = \frac{33.7}{100 - 33.7} = \frac{33.7}{66.3} \implies R = \frac{33.7}{66.3} S$<br>
                <em>Case 2:</em> When \Omega$ is in parallel with $, new resistance ' = \frac{12S}{12+S}$.<br>
                New balance point: $\frac{R}{S'} = \frac{51.9}{100 - 51.9} = \frac{51.9}{48.1}$<br>
                Substitute $ and '$ into Case 2 and solve the simultaneous equations.<br>
                (Solving gives  \approx 6.86 \, \Omega$ and  \approx 13.5 \, \Omega$).
            </div>
        </div>
;

// Replacements
html = html.replace('<h2>6. Electrical Energy and Power</h2>', carbonResistorsHTML + '\n\n        <h2>7. Electrical Energy and Power</h2>');
html = html.replace('<h2>7. Cells, EMF, and Internal Resistance</h2>', combinationResistorsHTML + '\n\n        <h2>9. Cells, EMF, and Internal Resistance</h2>');
html = html.replace('<h2>8. Combination of Cells</h2>', '<h2>10. Combination of Cells</h2>');
html = html.replace('<h2>9. Kirchhoff\\'s Rules', '<h2>11. Kirchhoff\\'s Rules');
html = html.replace('<h2>10. Wheatstone Bridge</h2>', nodalAnalysisHTML + '\n\n        <h2>12. Wheatstone Bridge</h2>');
html = html.replace('<h2>11. Measuring Instruments', '<h2>13. Measuring Instruments');
html = html.replace('<!-- BRANDING FOOTER (MANDATORY) -->', meterBridgeHTML + '\n\n        <!-- BRANDING FOOTER (MANDATORY) -->');

fs.writeFileSync('ChapterNotes.html', html);
console.log('Update completed');
