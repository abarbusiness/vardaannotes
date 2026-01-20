
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Define the questions to add, grouped by chapter folder name
const questionsToAdd = {
    // 1. Our Environment
    "13OurEnvironment": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q1</span>
            </div>
            <div class="question"><span class="question-number">Q1.</span> Which one of the following gets biomagnified at different levels in a food chain ?
                <ul class="options">
                    <li>(a) Carbon monoxide</li>
                    <li>(b) CFC's</li>
                    <li>(c) DDT</li>
                    <li>(d) Manure</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Biomagnification:</strong> Accumulation of toxic substances at higher trophic levels.<br>
                    <strong>DDT</strong> is non-biodegradable and accumulates.<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q2</span>
            </div>
            <div class="question"><span class="question-number">Q2.</span> In the food chains given below. Select the most efficient food chain in terms of energy :
                <ul class="options">
                    <li>(a) Grass \(\rightarrow\) Grasshopper \(\rightarrow\) Frog \(\rightarrow\) Snake</li>
                    <li>(b) Plants \(\rightarrow\) Deer \(\rightarrow\) Lion</li>
                    <li>(c) Plants \(\rightarrow\) Man</li>
                    <li>(d) Phytoplankton \(\rightarrow\) Zooplankton \(\rightarrow\) Small Fish \(\rightarrow\) Big Fish</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Efficiency:</strong> Shortest food chain has highest energy transfer (10% law).<br>
                    (c) Plants \(\rightarrow\) Man (2 steps) is the shortest.<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>`,

    // 2. Metals and Non-Metals
    "03MetalsAndNonMetals": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q3</span>
            </div>
            <div class="question"><span class="question-number">Q3.</span> An element 'M' has 25% of the electrons filled in the third shell as in the second shell. The element 'M' is :
                <ul class="options">
                    <li>(a) Sodium</li>
                    <li>(b) Magnesium</li>
                    <li>(c) Aluminium</li>
                    <li>(d) Calcium</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Electronic Configuration:</strong><br>
                    2nd Shell (L) capacity: 8 electrons.<br>
                    3rd Shell (M): 25% of 8 = 2 electrons.<br>
                    Config: 2, 8, 2.<br>
                    Total Z = 12. Element is Magnesium (Mg).<br>
                    <strong>Correct Option: (b)</strong>
                </div>
            </div>
        </div>`,

    // 3. Light
    "09LightReflectionandRefraction": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q4</span>
            </div>
            <div class="question"><span class="question-number">Q4.</span> An optical device 'X' is placed obliquely in the path of a narrow parallel beam of light. If the emergent beam gets displaced laterally, the device 'X' is :
                <ul class="options">
                    <li>(a) plane mirror</li>
                    <li>(b) convex lens</li>
                    <li>(c) glass slab</li>
                    <li>(d) glass prism</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Lateral Displacement:</strong> Occurs when light passes through a parallel-sided transparent medium.<br>
                    A <strong>glass slab</strong> causes lateral displacement.<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q16</span>
            </div>
            <div class="question"><span class="question-number">Q16.</span> To get an image of magnification \(-1\) on a screen using a lens of focal length 20 cm, the object distance must be :
                <ul class="options">
                    <li>(a) Less than 20 cm</li>
                    <li>(b) 30 cm</li>
                    <li>(c) 40 cm</li>
                    <li>(d) 80 cm</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Magnification m = -1:</strong> Real, Inverted, Same size.<br>
                    This happens at \(2F\).<br>
                    Given \(f = 20 \text{ cm}\).<br>
                    Object distance \(u = 2f = 2 \times 20 = 40 \text{ cm}\).<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>`,

    // 4. Electricity
    "11Electricity": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q5</span>
            </div>
            <div class="question"><span class="question-number">Q5.</span> A piece of wire of resistance 'R' is cut lengthwise into three identical parts. These parts are then connected in parallel. If the equivalent resistance of this combination is R', then the value of R/R' is :
                <ul class="options">
                    <li>(a) 1/9</li>
                    <li>(b) 1/3</li>
                    <li>(c) 3</li>
                    <li>(d) 9</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Calculation:</strong><br>
                    Original Resistance \(R\).<br>
                    Cut into 3 parts: Each has resistance \(r = R/3\).<br>
                    Connected in Parallel: \(\frac{1}{R'} = \frac{1}{r} + \frac{1}{r} + \frac{1}{r} = \frac{3}{r}\).<br>
                    \(R' = \frac{r}{3} = \frac{R/3}{3} = \frac{R}{9}\).<br>
                    Ratio \(R/R' = R / (R/9) = 9\).<br>
                    <strong>Correct Option: (d)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q10</span>
            </div>
            <div class="question"><span class="question-number">Q10.</span> The minimum number of identical bulbs of rating 4V; 6W, that can work safely with desired brightness, when connected in series with a 240 V mains supply is :
                <ul class="options">
                    <li>(a) 20</li>
                    <li>(b) 40</li>
                    <li>(c) 60</li>
                    <li>(d) 80</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Series Connection:</strong><br>
                    Voltage across each bulb = 4 V.<br>
                    Total Supply \(V = 240\) V.<br>
                    Let number of bulbs be \(n\).<br>
                    \(n \times 4 = 240 \Rightarrow n = 60\).<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q11</span>
            </div>
            <div class="question"><span class="question-number">Q11.</span> An electric bulb is rated 220 V; 11W. The resistance of its filament when it glows with a power supply of 220 V is :
                <ul class="options">
                    <li>(a) 4400 \(\Omega\)</li>
                    <li>(b) 440 \(\Omega\)</li>
                    <li>(c) 400 \(\Omega\)</li>
                    <li>(d) 20 \(\Omega\)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Formula:</strong> \(P = \frac{V^2}{R} \Rightarrow R = \frac{V^2}{P}\).<br>
                    \(R = \frac{220 \times 220}{11} = 20 \times 220 = 4400 \ \Omega\).<br>
                    <strong>Correct Option: (a)</strong>
                </div>
            </div>
        </div>`,

    // 5. Chemical Reactions
    "01ChemicalReactionsandEquations": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q6</span>
            </div>
            <div class="question"><span class="question-number">Q6.</span> In which one of the following situations a chemical reaction does <strong>not</strong> occur?
                <ul class="options">
                    <li>(a) Milk is left open at room temperature during summer</li>
                    <li>(b) Grapes get fermented</li>
                    <li>(c) An iron nail is left exposed to humid atmosphere</li>
                    <li>(d) Melting of glaciers</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    (a), (b), (c) are Chemical Changes (souring, fermentation, rusting).<br>
                    (d) Melting is a <strong>Physical Change</strong> (State change).<br>
                    <strong>Correct Option: (d)</strong>
                </div>
            </div>
        </div>`,

    // 6. Acids Bases
    "02AcidsBasesandSalts": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q7</span>
            </div>
            <div class="question"><span class="question-number">Q7.</span> In order to prepare dry hydrogen chloride gas in humid atmosphere the gas produced is passed through a guard tube (drying tube) which contains :
                <ul class="options">
                    <li>(a) Calcium chloride</li>
                    <li>(b) Calcium oxide</li>
                    <li>(c) Calcium hydroxide</li>
                    <li>(d) Calcium carbonate</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Drying Agent:</strong> Anhydrous Calcium Chloride (\(\text{CaCl}_2\)) is used to absorb moisture from HCl gas.<br>
                    (CaO reacts with HCl, so not used).<br>
                    <strong>Correct Option: (a)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q19</span>
            </div>
            <div class="question"><span class="question-number">Q19.</span> <strong>Assertion (A):</strong> Concentrated nitric acid is diluted by adding water slowly to acid with constant stirring.<br>
                <strong>Reason (R):</strong> Concentrated nitric acid is easily soluble in water.
                <ul class="options">
                    <li>(a) Both A and R are true and R is the correct explanation of A.</li>
                    <li>(b) Both A and R are true but R is not the correct explanation of A.</li>
                    <li>(c) A is true but R is false.</li>
                    <li>(d) A is false but R is true.</li>
                    <!-- Standard options assumed unless specified differently -->
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    <strong>Assertion is False:</strong> Water should NEVER be added to concentrated acid. Acid should be added to water slowly.<br>
                    <strong>Reason is True:</strong> Acid is soluble in water (highly exothermic).<br>
                    <strong>Correct Option: (d)</strong> A is false, R is true.
                </div>
            </div>
        </div>`,

    // 7. Carbon
    "04CarbonAndItsCompounds": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q8</span>
            </div>
            <div class="question"><span class="question-number">Q8.</span> Select from the following a hydrocarbon having one C–C bond and one C=C bond :
                <ul class="options">
                    <li>(a) Benzene</li>
                    <li>(b) Cyclohexane</li>
                    <li>(c) Butyne</li>
                    <li>(d) Propyne</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Structure Analysis:</strong><br>
                    Question asks for 1 C-C and 1 C=C (Double).<br>
                    Note: "Propyne" (Option d) has 1 C-C and 1 Triple Bond. But "Propene" has 1 C-C and 1 Double Bond.<br>
                    Given the options, and assuming Propyne refers generally to unsaturated C3:<br>
                    Propene (\(\text{CH}_3-\text{CH}=\text{CH}_2\)) fits the description exactly.<br>
                    If strictly "Propyne" (\(\text{CH}_3-\text{C}\equiv\text{CH}\)), it has Triple bond.<br>
                    Assuming (d) corresponds to the C3 unsaturated hydrocarbon intended.<br>
                    <strong>Correct Option: (d) (Likely Propene)</strong>
                </div>
            </div>
        </div>`,

    // 8. Life Processes
    "05LifeProcesses": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q9</span>
            </div>
            <div class="question"><span class="question-number">Q9.</span> The essential element taken up from the soil by the plants to synthesize proteins is :
                <ul class="options">
                    <li>(a) Phosphorus</li>
                    <li>(b) Nitrogen</li>
                    <li>(c) Iron</li>
                    <li>(d) Magnesium</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Nitrogen:</strong> Essential for synthesis of amino acids and proteins.<br>
                    <strong>Correct Option: (b)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q12</span>
            </div>
            <div class="question"><span class="question-number">Q12.</span> Select <strong>TRUE</strong> statements about lymph from the following :<br>
                A. Lymph vessels carry lymph through the body and finally open into larger arteries.<br>
                B. Lymph contains some amount of plasma, proteins and blood cells.<br>
                C. Lymph contains some amount of plasma, proteins and red blood cells.<br>
                D. Lymph vessels carry lymph through the body and finally open into larger veins.
                <ul class="options">
                    <li>(a) A and B</li>
                    <li>(b) B and D</li>
                    <li>(c) A and C</li>
                    <li>(d) C and D</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    A. False (open into veins).<br>
                    B. True (WBCs/Lymphocytes present, similar to plasma).<br>
                    C. False (No RBCs).<br>
                    D. True.<br>
                    <strong>Correct Option: (b)</strong> B and D.
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q18</span>
            </div>
            <div class="question"><span class="question-number">Q18.</span> <strong>Assertion (A):</strong> In large animals, oxygen can reach different parts of the animal's body easily.<br>
                <strong>Reason (R):</strong> Respiratory pigments take up oxygen from the air and carry it to body tissues.
                <ul class="options">
                    <li>(a) Both A and R are true and R is the correct explanation of A.</li>
                    <li>(b) Both A and R are true but R is not the correct explanation of A.</li>
                    <li>(c) A is true but R is false.</li>
                    <li>(d) A is false but R is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    <strong>Assertion (A):</strong> False. Diffusion is insufficient for large bodies; O2 cannot reach easily without a system.<br>
                    <strong>Reason (R):</strong> True. Hemoglobin does this.<br>
                    Wait. Is A "Cannot reach easily" or "Can reach easily"?<br>
                    Text says: "In large animals, oxygen can reach different parts... easily." -> This assumes "WITHOUT help"?<br>
                    No, as a statement of fact. Oxygen DOES reach tissues easily (thanks to the system).<br>
                    So A is True.<br>
                    R explains HOW. "Because pigments carry it".<br>
                    If the statement meant "by diffusion alone", it would be false.<br>
                    However, context usually implies limitations of diffusion.<br>
                    Let's assume standard logic: "Diffusion is insufficient" is the standard assertion. The statement "Oxygen can reach... easily" might be interpreted as "We have an efficient system".<br>
                    However, usually this pair highlights the *difficulty* overcome.<br>
                    If A is "Can reach... easily", and R is "Pigments help", then A is True, R is True, R explains A.<br>
                    BUT, if A is False (interpreting "easily" as "naturally/diffusively"), then (d).<br>
                    <strong>Alternative:</strong> Text might be "cannot". "In large animals, oxygen can reach different parts... easily." -> Sounds like "Yes it happens".<br>
                    Let's assume (a) or (b). R explains A.<br>
                    <strong>Correct Option: (a)</strong> (Assuming A implies the effective transport system makes it easy).
                </div>
            </div>
        </div>`,

    // 9. Reproduction
    "07HowDoOrganismsReproduce": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q13</span>
            </div>
            <div class="question"><span class="question-number">Q13.</span> Plants like rose and banana have lost the capacity to produce :
                <ul class="options">
                    <li>(a) flowers</li>
                    <li>(b) buds</li>
                    <li>(c) seeds</li>
                    <li>(d) fruits</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Vegetative Propagation:</strong> Used for plants that have lost capacity to produce <strong>seeds</strong>.<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q15</span>
            </div>
            <div class="question"><span class="question-number">Q15.</span> In a bisexual flower the male gametes are present in the :
                <ul class="options">
                    <li>(a) anther</li>
                    <li>(b) ovary</li>
                    <li>(c) stigma</li>
                    <li>(d) filament</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Male Reproductive Part:</strong> Stamen (Anther + Filament).<br>
                    Pollen grains containing male gametes are produced in the <strong>Anther</strong>.<br>
                    <strong>Correct Option: (a)</strong>
                </div>
            </div>
        </div>`,

    // 10. Heredity
    "08HeredityandEvolution": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q14</span>
            </div>
            <div class="question"><span class="question-number">Q14.</span> When a pure-tall pea plant is crossed with a pure-dwarf pea plant, the percentage of tall pea plants in F\(_1\) and F\(_2\) generation pea plants will be respectively :
                <ul class="options">
                    <li>(a) 100% ; 25%</li>
                    <li>(b) 100% ; 50%</li>
                    <li>(c) 100% ; 75%</li>
                    <li>(d) 100% ; 100%</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Monohybrid Cross:</strong><br>
                    F1: All Tt (Tall). Percentage = 100%.<br>
                    F2: TT : Tt : tt (1 : 2 : 1). Tall (TT+Tt) = 3/4 = 75%.<br>
                    <strong>Correct Option: (c)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q17</span>
            </div>
            <div class="question"><span class="question-number">Q17.</span> <strong>Assertion (A):</strong> In reptiles, the temperature at which the fertilized eggs are kept decides the sex of the offsprings.<br>
                <strong>Reason (R):</strong> Sex is not genetically determined in some animals.
                <ul class="options">
                    <li>(a) Both A and R are true and R is the correct explanation of A.</li>
                    <li>(b) Both A and R are true but R is not the correct explanation of A.</li>
                    <li>(c) A is true but R is false.</li>
                    <li>(d) A is false but R is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Environmental Sex Determination:</strong><br>
                    A is True (e.g., Turtles).<br>
                    R is True (Not genetic).<br>
                    R explains A (Temperature acts because it's not genetic).<br>
                    <strong>Correct Option: (a)</strong>
                </div>
            </div>
        </div>`,

    // 11. Human Eye
    "10TheHumanEyeandtheColourfulWorld": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/4 &middot; Q20</span>
            </div>
            <div class="question"><span class="question-number">Q20.</span> <strong>Assertion (A):</strong> White light is dispersed by a glass prism into seven colours.<br>
                <strong>Reason (R):</strong> The red light bends the least while the violet the most when a beam of white light passes through a glass prism.
                <ul class="options">
                    <li>(a) Both A and R are true and R is the correct explanation of A.</li>
                    <li>(b) Both A and R are true but R is not the correct explanation of A.</li>
                    <li>(c) A is true but R is false.</li>
                    <li>(d) A is false but R is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Dispersion:</strong> Splitting of light due to different speeds/bending of colours.<br>
                    A is True. R is True and explains the cause of dispersion (differential bending).<br>
                    <strong>Correct Option: (a)</strong>
                </div>
            </div>
        </div>`
};

function insertQuestions(filePath, questionsHtml) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Locate insertion point: After 31/3 series questions in 2025 section.
        // We look for the last card of 31/3.
        // Pattern: <span class="card-meta">31/3 &middot; ...</span>
        // And then finding the closing div of that card.

        // Find last occurrence of "31/3"
        const last31_3 = content.lastIndexOf('31/3');

        if (last31_3 !== -1) {
            // Find the end of this card.
            // Search for next <div class="card"> or <div id="y2024"> or <div id="y2025"> closing...
            // Or just append before the closing of y2025?
            // User: "first ... 31/S ... 31/1 ... 31/3 ... 31/4".
            // So appending AT THE END of the y2025 content block is safest if we assume they are ordered.
            // Find `</div>` before `<div id="y2024"`?
            // But we have checks for that now (y2024 start).

            const nextYearIdx = content.indexOf('<div id="y2024"');
            if (nextYearIdx !== -1) {
                // Insert before the closing div(s) of 2025 that precede y2024.
                // We typically have `</div></div>` (nested) or `</div>` (sibling) before y2024.
                // We should insert just before the *last* closing div of the y2025 block.
                // Or simply: Insert before `<div id="y2024"`.
                // And ensure we are inside y2025.

                // Let's look for `<div id="y2024"`.
                // Insert BEFORE </div> that closes y2025?
                // The structure is:
                // <div id="y2025">
                //    ... 31/3 cards ...
                // </div> <!-- Close y2025 -->
                // <div id="y2024">

                // So we want to insert Before the `</div>` that precedes y2024.
                // Find index of y2024.
                // Backtrack to find `</div>`.
                // Insert before that `</div>`.

                // But wait, our "Fix Structure" script might have added multiple divs.
                // e.g. `</div></div><div id="y2024">`.
                // One closes card, one closes year.
                // We want to insert AFTER the last card, but INSIDE the year.
                // So before the Year Closing Div.

                // Strategy: Find `<div id="y2024"`.
                // Find the last `</div>` before it. This is usually the Year Close.
                // Insert before strictly that LAST `</div>`.

                const beforeContext = content.substring(0, nextYearIdx);
                const lastDiv = beforeContext.lastIndexOf('</div>');

                if (lastDiv !== -1) {
                    // Check if there are other divs between lastDiv and y2024 (whitespace).
                    // If good, insert at lastDiv.
                    // But indentation?

                    const newContent = content.substring(0, lastDiv) +
                        "\n" + questionsHtml + "\n        " +
                        content.substring(lastDiv);

                    content = newContent;
                }
            } else {
                // No y2024? (Maybe footer next if single year?)
                // Look for footer.
            }
        } else {
            // If 31/3 doesn't exist, check 31/S, etc.
            // Fallback: Append to 2025 container end.
            const y2024Idx = content.indexOf('<div id="y2024"');
            if (y2024Idx !== -1) {
                const beforeContext = content.substring(0, y2024Idx);
                const lastDiv = beforeContext.lastIndexOf('</div>');
                if (lastDiv !== -1) {
                    const newContent = content.substring(0, lastDiv) +
                        "\n" + questionsHtml + "\n        " +
                        content.substring(lastDiv);
                    content = newContent;
                }
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Added questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`Could not insert questions into: ${path.basename(filePath)}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

// Execute
console.log("Adding 31/4 Questions...");
Object.keys(questionsToAdd).forEach(folder => {
    // Find the file by scanning subdirs or just constructing path
    // We can iterate the files if key matches folder name.

    // We know the structure
    // c:\Users\...\Science\Folder\PYQ.html

    // However, folder name might be exact.
    // Let's verify paths.

    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding questions.");
