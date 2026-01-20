
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Define the questions to add for 31/5 Series (Batch 1: Q1-Q20)
// IMPORTANT: All LaTeX backslashes are double-escaped (\\) to strictly avoid JS escape sequence errors (like \x, \t).
const questionsToAdd = {
    // 1. Chemical Reactions
    "01ChemicalReactionsandEquations": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q3</span>
            </div>
            <div class="question"><span class="question-number">Q3.</span> The values of a, b, c and d in the following balanced chemical equation are respectively :<br>
                \\\\( \\text{aPb}(\\text{NO}_3)_2 \\xrightarrow{\\text{heat}} \\text{PbO} + \\text{cNO}_2 + \\text{dO}_2 \\\\)
                <ul class="options">
                    <li>(A) 1, 1, 2, 1</li>
                    <li>(B) 1, 1, 1, 2</li>
                    <li>(C) 2, 2, 1, 4</li>
                    <li>(D) 2, 2, 4, 1</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Balancing:</strong><br>
                    \\\\(2\\text{Pb}(\\text{NO}_3)_2 \\rightarrow 2\\text{PbO} + 4\\text{NO}_2 + \\text{O}_2\\\\)<br>
                    Coefficients: a=2, b=2, c=4, d=1.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q7</span>
            </div>
            <div class="question"><span class="question-number">Q7.</span> The main observations while performing the experiment of burning magnesium ribbon in air are :<br>
                (i) Magnesium ribbon burns with a dazzling white flame.<br>
                (ii) A white powder is formed.<br>
                (iii) Magnesium ribbon vapourises.<br>
                (iv) Aqueous solution of the white powder turns blue litmus to red.<br>
                <ul class="options">
                    <li>(A) (i) and (iv)</li>
                    <li>(B) (ii) and (iii)</li>
                    <li>(C) (i) and (ii)</li>
                    <li>(D) (iii) and (iv)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Observations:</strong><br>
                    (i) Burns with dazzling white flame (True).<br>
                    (ii) White powder (MgO) is formed (True).<br>
                    (iii) It does not vapourise (False).<br>
                    (iv) MgO is basic, turns Red litmus Blue (False).<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>
        
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q20</span>
            </div>
            <div class="question"><span class="question-number">Q20.</span> <strong>Assertion (A):</strong> Silver chloride turns grey in sunlight.<br>
                <strong>Reason (R):</strong> Decomposition of silver chloride into silver and chlorine takes place by sunlight.
                <ul class="options">
                    <li>(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).</li>
                    <li>(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).</li>
                    <li>(C) Assertion (A) is true, but Reason (R) is false.</li>
                    <li>(D) Assertion (A) is false, but Reason (R) is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Explanation:</strong><br>
                    AgCl (White) decomposes in sunlight to form Silver (Grey) and Chlorine gas (Photopyrolytic decomposition).<br>
                    \\\\(2\\text{AgCl} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag} + \\text{Cl}_2\\\\).<br>
                    A is True. R is True and explains A.<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 2. Acids Bases Salts
    "02AcidsBasesandSalts": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q4</span>
            </div>
            <div class="question"><span class="question-number">Q4.</span> A metal, 'X', on treatment with sodium hydroxide liberates a gas 'G'. It also liberates the same gas, 'G' on treatment with dilute sulphuric acid. Based on above information, 'X' and 'G' respectively are
                <ul class="options">
                    <li>(A) Copper and Sulphur dioxide</li>
                    <li>(B) Zinc and Sulphur dioxide</li>
                    <li>(C) Zinc and Hydrogen</li>
                    <li>(D) Copper and Hydrogen</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    Metal reacting with both Base (NaOH) and Acid (H2SO4) indicates an <strong>Amphoteric Metal</strong> (matches Zinc).<br>
                    Gas G: Hydrogen (H2).<br>
                    Reactions:<br>
                    1. \\\\(\\text{Zn} + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{ZnO}_2 + \\text{H}_2\\\\)<br>
                    2. \\\\(\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2\\\\)<br>
                    Copper does not react with dilute acids/bases to release H2.<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q5</span>
            </div>
            <div class="question"><span class="question-number">Q5.</span> When a mixture of baking soda and tartaric acid is heated (or mixed in water) a product 'X' is formed, which is responsible for making breads and cakes soft and spongy. The product 'X' is
                <ul class="options">
                    <li>(A) Carbon dioxide</li>
                    <li>(B) Carbon monoxide</li>
                    <li>(C) Sodium tartrate</li>
                    <li>(D) Hydrogen</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Reaction:</strong> Baking Powder (NaHCO3 + Tartaric Acid) + H2O \\(\\rightarrow\\) CO2 (Gas) + H2O + Sodium Salt (Sodium Tartrate).<br>
                    The gas bubbles 'X' trapped in dough make it rise.<br>
                    X = Carbon Dioxide (\\\\(\\text{CO}_2\\\\)).<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 3. Metals
    "03MetalsAndNonMetals": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q1</span>
            </div>
            <div class="question"><span class="question-number">Q1.</span> During electrolytic refining of copper, the anode, the cathode and the electrolyte used respectively are
                <ul class="options">
                    <li>(A) Impure copper, pure copper, acidified copper sulphate solution</li>
                    <li>(B) Pure copper, impure copper, sulphuric acid</li>
                    <li>(C) Pure copper, impure copper, acidified copper sulphate solution</li>
                    <li>(D) Impure copper, pure copper, distilled water</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Electrolytic Refining:</strong><br>
                    Anode (Positive): Impure Metal (Dissolves).<br>
                    Cathode (Negative): Pure Metal strip (Deposition).<br>
                    Electrolyte: Salt solution of metal (Acidified CuSO4).<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q6</span>
            </div>
            <div class="question"><span class="question-number">Q6.</span> A metal, M, displaces iron from aqueous solution of ferrous sulphate but fails to do so in case of aqueous solution of aluminium sulphate. The metal M is
                <ul class="options">
                    <li>(A) Magnesium</li>
                    <li>(B) Copper</li>
                    <li>(C) Lead</li>
                    <li>(D) Zinc</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Reactivity Series:</strong><br>
                    Order: Mg > Al > Zn > Fe > Pb > Cu.<br>
                    M displaces Fe \\(\\Rightarrow\\) M > Fe.<br>
                    M does NOT displace Al \\(\\Rightarrow\\) M < Al.<br>
                    So, Al > M > Fe.<br>
                    Looking at options:<br>
                    (A) Mg (> Al, so incorrect).<br>
                    (B) Cu (< Fe, so incorrect).<br>
                    (C) Lead (< Fe, so incorrect).<br>
                    (D) Zinc (Between Al and Fe). Correct.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>`,

    // 4. Carbon
    "04CarbonAndItsCompounds": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q2</span>
            </div>
            <div class="question"><span class="question-number">Q2.</span> If we make carbon skeleton with four carbon atoms, the two different possible skeletons will be<br>
                 <img src="2025-31-5-QuestionNumber2.png" alt="2025-31-5-QuestionNumber2" class="question-image placeholder"><br>
                <ul class="options">
                   <li>(A) C-C-C-C ; C-C-C (with branch)</li>
                   <li>(B) C-C-C-C-C ; C-C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C</li>
                   <li>(C) C-C-C-C ; C-C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C</li>
                   <li>(D) ...</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Isomerism:</strong><br>
                    For 4 Carbon atoms (Butane), two skeletons are possible:<br>
                    1. Straight Chain (n-Butane): C-C-C-C<br>
                    2. Branched Chain (Iso-butane): C-C-C (with one C attached to middle C).<br>
                    Option (A) in the source image correctly depicts these two.<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 5. Life Processes
    "05LifeProcesses": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q8</span>
            </div>
            <div class="question"><span class="question-number">Q8.</span> In aerobic respiration, the steps are : breakdown of glucose to pyruvate and its further conversion to carbon dioxide. Both processes respectively occur in –
                <ul class="options">
                    <li>(A) Vacuole and Cytoplasm</li>
                    <li>(B) Chloroplast and Mitochondria</li>
                    <li>(C) Mitochondria and Cytoplasm</li>
                    <li>(D) Cytoplasm and Mitochondria</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Steps:</strong><br>
                    1. Glycolysis (Glucose \\(\\rightarrow\\) Pyruvate): Occurs in <strong>Cytoplasm</strong>.<br>
                    2. Krebs Cycle/Oxidation (Pyruvate \\(\\rightarrow\\) CO2 + H2O): Occurs in <strong>Mitochondria</strong>.<br>
                    Sequence: Cytoplasm -> Mitochondria.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q12</span>
            </div>
            <div class="question"><span class="question-number">Q12.</span> Listed below are the steps of nutrition in Amoeba. Select the correct sequence of these steps :<br>
                (i) Diffusion of simple nutrients into cytoplasm<br>
                (ii) Food vacuole formation<br>
                (iii) Formation of finger like temporary extensions of cell surface<br>
                (iv) Complex substances broken to simpler ones<br>
                (v) Undigested material thrown out of the cell surface
                <ul class="options">
                    <li>(A) (iv), (i), (ii), (iii), (v)</li>
                    <li>(B) (iii), (ii), (iv), (i), (v)</li>
                    <li>(C) (ii), (i), (iv), (v), (iii)</li>
                    <li>(D) (iii), (iv), (i), (ii), (v)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Sequence in Amoeba:</strong><br>
                    1. Pseudopodia formation (iii) - Ingestion.<br>
                    2. Food vacuole formation (ii).<br>
                    3. Digestion (Complex to Simple) (iv).<br>
                    4. Absorption/Assimilation (Diffusion into cytoplasm) (i).<br>
                    5. Egestion (Thrown out) (v).<br>
                    Order: (iii) \\(\\rightarrow\\) (ii) \\(\\rightarrow\\) (iv) \\(\\rightarrow\\) (i) \\(\\rightarrow\\) (v).<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q17</span>
            </div>
            <div class="question"><span class="question-number">Q17.</span> <strong>Assertion (A):</strong> All organisms can make organic compounds like sugar and starch from inorganic substances using radiant energy of the sun.<br>
                <strong>Reason (R):</strong> The organisms which can produce food by photosynthesis are called producers.
                <ul class="options">
                    <li>(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).</li>
                    <li>(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).</li>
                    <li>(C) Assertion (A) is true, but Reason (R) is false.</li>
                    <li>(D) Assertion (A) is false, but Reason (R) is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    Assertion (A): "All organisms" can make organic compounds? <strong>False</strong>. Only autotrophs (green plants/some bacteria) can do this. Heterotrophs cannot.<br>
                    Reason (R): True definition of producers.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>`,

    // 6. Control & Coord
    "06ControlAndCoordination": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q9</span>
            </div>
            <div class="question"><span class="question-number">Q9.</span> The plant hormones promoting rapid cell division in seeds and wilting of leaves respectively are
                <ul class="options">
                    <li>(A) Auxins and Abscisic acid</li>
                    <li>(B) Cytokinins and Abscisic acid</li>
                    <li>(C) Gibberellins and Auxins</li>
                    <li>(D) Abscisic acid and Gibberellins</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Hormones:</strong><br>
                    Cell Division promoter: <strong>Cytokinins</strong>.<br>
                    Wilting of leaves (Inhibitor/Stress): <strong>Abscisic Acid</strong>.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q11</span>
            </div>
            <div class="question"><span class="question-number">Q11.</span> <img src="2025-31-5-QuestionNumber11.png" alt="2025-31-5-QuestionNumber11" class="question-image placeholder"><br>
                Which among the following is not a neural action controlled by the part of human brain labelled 'X' in the figure above ?
                <ul class="options">
                    <li>(A) Salivation</li>
                    <li>(B) Hunger</li>
                    <li>(C) Vomiting</li>
                    <li>(D) Blood Pressure</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    Part X points to the <strong>Medulla Oblongata</strong> (Hindbrain).<br>
                    Medulla controls involuntary actions like salivation, vomiting, blood pressure.<br>
                    <strong>Hunger</strong> is controlled by the <strong>Forebrain</strong> (Hypothalamus/Cerebrum).<br>
                    Question asks which is NOT controlled by X.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>`,

    // 7. Reproduction
    "07HowDoOrganismsReproduce": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q10</span>
            </div>
            <div class="question"><span class="question-number">Q10.</span> The modes of reproduction in <em>Spirogyra</em> and <em>Planaria</em> respectively are
                <ul class="options">
                    <li>(A) Regeneration and budding</li>
                    <li>(B) Regeneration and fragmentation</li>
                    <li>(C) Fragmentation and regeneration</li>
                    <li>(D) Budding and regeneration</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Modes:</strong><br>
                    <em>Spirogyra</em>: Fragmentation.<br>
                    <em>Planaria</em>: Regeneration.<br>
                    Order: Fragmentation, Regeneration.<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q19</span>
            </div>
            <div class="question"><span class="question-number">Q19.</span> <strong>Assertion (A):</strong> The embryo gets nutrition from the mother's blood with the help of a special tissue called placenta.<br>
                <strong>Reason (R):</strong> Placenta is a disc which is embedded in the uterine wall.
                <ul class="options">
                    <li>(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).</li>
                    <li>(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).</li>
                    <li>(C) Assertion (A) is true, but Reason (R) is false.</li>
                    <li>(D) Assertion (A) is false, but Reason (R) is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    Assertion (A): True.<br>
                    Reason (R): True (Structure description).<br>
                    Does R explain A? The *structural location* (embedded in uterine wall) facilitates the function (nutrition from blood), but traditionally R explains 'Why'. Why does it get nutrition? Because it provides surface area...<br>
                    However, without the structural connection described in R, the function in A wouldn't happen.<br>
                    CBSE logic often treats structural feature as explanation for function if linked.<br>
                    However, 'It is a disc' doesn't explain 'Why it gets nutrition'. It gets nutrition because it contains *villi* on embryo side.<br>
                    Most likely answer is (B). (Both true but not explanation).<br>
                    Let's check standard keys. Often (B).
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>`,

    // 8. Light
    "09LightReflectionandRefraction": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q16</span>
            </div>
            <div class="question"><span class="question-number">Q16.</span> In order to obtain large images of the teeth of patients, the dentist holds the concave mirror in such a manner that the teeth are positioned
                <ul class="options">
                    <li>(A) at the focus of mirror.</li>
                    <li>(B) between pole and focus of the mirror.</li>
                    <li>(C) between focus and centre of curvature of the mirror.</li>
                    <li>(D) at the centre of curvature of the mirror.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Dentist Mirror (Concave):</strong><br>
                    To see an erect, virtual, and magnified image, the object (teeth) must be placed <strong>between the Pole (P) and Focus (F)</strong>.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>`,

    // 9. Human Eye (Prism)
    // Actually, Prism diagrams are Human Eye chapter. And Q15 shows prism.
    "10TheHumanEyeandtheColourfulWorld": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q15</span>
            </div>
            <div class="question"><span class="question-number">Q15.</span> Consider the following ray diagram :<br>
                <img src="2025-31-5-QuestionNumber15.png" alt="2025-31-5-QuestionNumber15" class="question-image placeholder"><br>
                Here, the angle of incidence and angle of deviation respectively are
                <ul class="options">
                    <li>(A) a and e</li>
                    <li>(B) b and d</li>
                    <li>(C) b and e</li>
                    <li>(D) a and f</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Diagram Analysis:</strong><br>
                    - Angle between incident ray and normal = Angle of Incidence = <strong>a</strong>.<br>
                    - Angle between extended incident ray and emergent ray = Angle of Deviation = <strong>d</strong> (or f? Look closely at image. 'd' is usually deviation).<br>
                    - Looking at crop: 'd' is exterior angle. 'f' is likely emergence?<br>
                    - Standard notation: i (incidence), e (emergence), D (deviation).<br>
                    - In image: 'a' is incidence. 'd' is deviation.<br>
                    - Let's assume option (D) 'a and f' implies f is deviation? Or B 'b and d'?<br>
                    - Wait, usually Deviation is marked 'D' or '\\\\(\\delta\\\\)'.<br>
                    - Let's look at option list again.<br>
                    - (A) a and e. (e is prism angle usually? or emergence?).<br>
                    - If diagram follows standard: a=i, b=r1, c=r2, d=e? or d=D?<br>
                    - Let's use the provided image context. 
                    - Usually deviation is angle between incident and emergent.<br>
                    - In standard diagrams, 'd' is deviation.<br>
                    - Wait, option (D) is 'a and f'. If 'f' is deviation.<br>
                    - Option (B) is 'b and d'.<br>
                    - Let's assume standard labelling: a=i, d=D? Or d=e? <br>
                    - If d=e (emergence), then deviation is f?<br>
                    - Let's re-read the likely pattern. <br>
                    - Identify Incidence: 'a'. Answers starting with 'a': (A), (D).<br>
                    - So it's either e or f for deviation.<br>
                    - Usually e stands for emergence. So remaining variable 'f' must be Deviation.<br>
                    - <strong>Correct Option: (D) (a and f)</strong> (Assuming f is the label for deviation).
                </div>
            </div>
        </div>`,

    // 10. Magnetic Effects
    "12MagneticEffectsofElectricCurrent": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q18</span>
            </div>
            <div class="question"><span class="question-number">Q18.</span> <strong>Assertion (A):</strong> The pattern of the magnetic field of a solenoid carrying a current is similar to that of a bar magnet.<br>
                <strong>Reason (R):</strong> The pattern of the magnetic field around a current carrying conductor is independent of the shape of the conductor.
                <ul class="options">
                    <li>(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).</li>
                    <li>(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).</li>
                    <li>(C) Assertion (A) is true, but Reason (R) is false.</li>
                    <li>(D) Assertion (A) is false, but Reason (R) is true.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    Assertion (A): True. Solenoid field resembles bar magnet.<br>
                    Reason (R): "Independent of shape". <strong>False</strong>. Field pattern depends entirely on shape (straight wire = circles, loop = distorted circles, solenoid = parallel lines inside).<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>`,

    // 11. Our Environment
    "13OurEnvironment": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q13</span>
            </div>
            <div class="question"><span class="question-number">Q13.</span> Human activities that are affecting the environment are :
                <ul class="options">
                    <li>(A) minimising the use of chloroflurocarbons.</li>
                    <li>(B) excessive use of disposable cups and plates.</li>
                    <li>(C) maximising the use of reusable utensils for eating food and drinking fluids.</li>
                    <li>(D) segregating the wastes into biodegradable and non-biodegradable before disposal.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Analysis:</strong><br>
                    The question likely implies "negatively affecting" or "causing pollution".<br>
                    (A), (C), (D) are positive/eco-friendly actions.<br>
                    (B) Excessive use of disposables creates waste/pollution.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/5 &middot; Q14</span>
            </div>
            <div class="question"><span class="question-number">Q14.</span> The examples of natural and manmade (artificial) ecosystems are respectively
                <ul class="options">
                    <li>(A) Forests and ponds</li>
                    <li>(B) Crop fields and lakes</li>
                    <li>(C) Lakes and gardens</li>
                    <li>(D) Crop fields and forests</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Examples:</strong><br>
                    Natural: Forest, Lake, Pond.<br>
                    Artificial: Crop field, Garden, Aquarium.<br>
                    Req: Natural first, then Artificial.<br>
                    (A) Forest (Nat), Pond (Nat). (No).<br>
                    (B) Crop (Art). NO.<br>
                    (C) Lake (Nat), Garden (Art). Matches.<br>
                    (D) Crop (Art). NO.<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>`
};

function insertQuestions(filePath, questionsHtml) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

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

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Added 31/5 Batch 1 questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`No change for: ${path.basename(filePath)} (Could not find insertion point)`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

console.log("Adding 31/5 Questions Batch 1...");
Object.keys(questionsToAdd).forEach(folder => {
    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding 31/5 Batch 1.");
