
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Batch 1: Q1-Q20 (31/6/3 Series)
const questionsToAdd = {
    // 01 Chemical Reactions - Q1, Q4
    "01ChemicalReactionsandEquations": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q1</span>
            </div>
            <div class="question"><span class="question-number">Q1.</span> Example of thermal decomposition reaction are
                <ol type="i">
                    <li>\\( 2 \\text{AgCl} \\rightarrow 2 \\text{Ag} + \\text{Cl}_2 \\)</li>
                    <li>\\( \\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2 \\)</li>
                    <li>\\( 2 \\text{H}_2\\text{O} \\rightarrow 2 \\text{H}_2 + \\text{O}_2 \\)</li>
                    <li>\\( 2 \\text{KClO}_3 \\rightarrow 2 \\text{KCl} + 3 \\text{O}_2 \\)</li>
                </ol>
                <ul class="options">
                    <li>(A) (i) and (ii)</li>
                    <li>(B) (ii) and (iii)</li>
                    <li>(C) (iii) and (iv)</li>
                    <li>(D) (ii) and (iv)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (i) Photolytic decomposition (sunlight).<br>
                    (ii) <strong>Thermal decomposition</strong> (heat).<br>
                    (iii) Electrolytic decomposition (electricity).<br>
                    (iv) <strong>Thermal decomposition</strong> (heating Potassium Chlorate).<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q4</span>
            </div>
            <div class="question"><span class="question-number">Q4.</span> The colour of the solution observed after about 1 hour of placing iron nails in copper sulphate solution is
                <ul class="options">
                    <li>(A) Blue</li>
                    <li>(B) Pale green</li>
                    <li>(C) Yellow</li>
                    <li>(D) Reddish brown</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Iron displaces Copper from Copper Sulphate solution.<br>
                    \\(\\text{Fe}(s) + \\text{CuSO}_4(aq) \\text{ (Blue)} \\rightarrow \\text{FeSO}_4(aq) \\text{ (Pale Green)} + \\text{Cu}(s)\\)<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>`,

    // 02 Acids Bases - Q2, Q6, Q7
    "02AcidsBasesandSalts": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q2</span>
            </div>
            <div class="question"><span class="question-number">Q2.</span> You have three aqueous solutions A, B and C as given below :<br>
                A - Potassium nitrate<br>
                B - Ammonium chloride<br>
                C - Sodium carbonate<br>
                The ascending order of the pH of these solutions is :
                <ul class="options">
                    <li>(A) A < B < C</li>
                    <li>(B) B < C < A</li>
                    <li>(C) C < A < B</li>
                    <li>(D) B < A < C</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    A: Potassium nitrate (neutral salt, Strong Acid + Strong Base) -> pH = 7.<br>
                    B: Ammonium chloride (acidic salt, SA + WB) -> pH < 7.<br>
                    C: Sodium carbonate (basic salt, WA + SB) -> pH > 7.<br>
                    Order: B (Acidic) < A (Neutral) < C (Basic).<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q6</span>
            </div>
            <div class="question"><span class="question-number">Q6.</span> The water of crystallization is present in
                <ol type="i">
                    <li>Bleaching Powder</li>
                    <li>Plaster of Paris</li>
                    <li>Washing Soda</li>
                    <li>Baking Soda</li>
                </ol>
                <ul class="options">
                    <li>(A) (ii) and (iv)</li>
                    <li>(B) (ii) and (iii)</li>
                    <li>(C) (i) and (iii)</li>
                    <li>(D) (i) and (iv)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (i) Bleaching powder: \\(\\text{CaOCl}_2\\) (No water).<br>
                    (ii) PoP: \\(\\text{CaSO}_4 \\cdot \\frac{1}{2} \\text{H}_2\\text{O}\\) (Has water).<br>
                    (iii) Washing Soda: \\(\\text{Na}_2\\text{CO}_3 \\cdot 10 \\text{H}_2\\text{O}\\) (Has water).<br>
                    (iv) Baking Soda: \\(\\text{NaHCO}_3\\) (No water).<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q7</span>
            </div>
            <div class="question"><span class="question-number">Q7.</span> Juice of tamarind turns blue litmus to red. It is because of the presence of a chemical compound called
                <ul class="options">
                    <li>(A) Acetic acid</li>
                    <li>(B) Methanoic acid</li>
                    <li>(C) Oxalic acid</li>
                    <li>(D) Tartaric acid</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Tamarind contains <strong>Tartaric acid</strong>.<br>
                    (A) Acetic - Vinegar. (B) Methanoic - Ant sting. (C) Oxalic - Tomato.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>`,

    // 03 Metals - Q3
    "03MetalsAndNonMetals": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q3</span>
            </div>
            <div class="question"><span class="question-number">Q3.</span> Which one of the following metals is protected from corrosion by a layer of its own oxide ?
                <ul class="options">
                    <li>(A) Aluminium</li>
                    <li>(B) Copper</li>
                    <li>(C) Silver</li>
                    <li>(D) Gold</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Aluminium</strong> forms a thin, protective layer of aluminium oxide (\\(\\text{Al}_2\\text{O}_3\\)) on exposure to air, which prevents further corrosion (Anodising takes advantage of this).<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 04 Carbon - Q5, Q18
    "04CarbonAndItsCompounds": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q5</span>
            </div>
            <div class="question"><span class="question-number">Q5.</span> A Hydrocarbon which does <strong>not</strong> belong to the same homologous series of carbon compounds is
                <ul class="options">
                    <li>(A) \\(\\text{C}_4\\text{H}_{10}\\)</li>
                    <li>(B) \\(\\text{C}_6\\text{H}_{14}\\)</li>
                    <li>(C) \\(\\text{C}_7\\text{H}_{14}\\)</li>
                    <li>(D) \\(\\text{C}_{10}\\text{H}_{22}\\)</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Formula for Alkane: \\(\\text{C}_n\\text{H}_{2n+2}\\).<br>
                    (A) \\(4 \\times 2 + 2 = 10\\) (Alkane).<br>
                    (B) \\(6 \\times 2 + 2 = 14\\) (Alkane).<br>
                    (C) \\(7 \\times 2 = 14\\) (Alkene/Cycloalkane, \\(\\text{C}_n\\text{H}_{2n}\\)).<br>
                    (D) \\(10 \\times 2 + 2 = 22\\) (Alkane).<br>
                    (C) is the odd one out.<br>
                    <strong>Correct Option: (C)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q18</span>
            </div>
            <div class="question"><span class="question-number">Q18.</span> <strong>Assertion (A):</strong> Carbon and its compounds are our major sources of fuels.<br>
                <strong>Reason (R):</strong> Most of the carbon compounds on burning release a large amount of heat and light.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Assertion (A):</strong> True. Coal, petroleum, natural gas are carbon compounds.<br>
                    <strong>Reason (R):</strong> True. Combustion is exothermic.<br>
                    <strong>Explanation:</strong> Because they release large energy (heat/light) on burning, they are excellent fuels. R explains A.<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 05 Life Processes - Q10, Q11, Q12, Q17
    "05LifeProcesses": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q10</span>
            </div>
            <div class="question"><span class="question-number">Q10.</span> The basic filtration unit of the excretory system in human beings is :
                <ul class="options">
                    <li>(A) Nephron</li>
                    <li>(B) Urethra</li>
                    <li>(C) Neuron</li>
                    <li>(D) Urinary bladder</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Nephron</strong> is the structural and functional filtration unit of the kidney.<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q11</span>
            </div>
            <div class="question"><span class="question-number">Q11.</span> Which one of the following is <strong>not</strong> an excretory product in plants ?
                <ul class="options">
                    <li>(A) \\(\\text{CO}_2\\)</li>
                    <li>(B) Starch</li>
                    <li>(C) Resins and gums</li>
                    <li>(D) Dead cells</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (A) CO2 is excreted (respiration). (C) Resins/Gums are wastes. (D) Dead cells (leaves falling) remove waste.<br>
                    (B) <strong>Starch</strong> is a stored food material (Carbohydrate), not waste.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q12</span>
            </div>
            <div class="question"><span class="question-number">Q12.</span> In human alimentary canal, the digestive juice secreted by the gastric glands are
                <ul class="options">
                    <li>(A) Bile, Trypsin, Pepsin</li>
                    <li>(B) Hydrochloric acid, Pepsin, Mucus</li>
                    <li>(C) Lipase, Bile, Mucus</li>
                    <li>(D) Salivary amylase, Pepsin, Bile</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Gastric glands stimulate secretion of Gastric Juice containing:<br>
                    1. <strong>Hydrochloric Acid (HCl)</strong><br>
                    2. <strong>Pepsin</strong> (Enzyme)<br>
                    3. <strong>Mucus</strong><br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q17</span>
            </div>
            <div class="question"><span class="question-number">Q17.</span> <strong>Assertion (A):</strong> Xylem tissue moves water and minerals obtained from the soil by the roots.<br>
                <strong>Reason (R):</strong> Xylem tissue is found only in the roots of a plant.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Assertion (A):</strong> True. Xylem transports water/minerals.<br>
                    <strong>Reason (R):</strong> False. Xylem is present in roots, stems, and leaves to form a continuous channel.<br>
                    <strong>Correct Option: (C)</strong> (A is true, R is false).
                </div>
            </div>
        </div>`,

    // 06 Control - Q8
    "06ControlAndCoordination": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q8</span>
            </div>
            <div class="question"><span class="question-number">Q8.</span> Electrical impulse travels in a neuron from
                <ul class="options">
                    <li>(A) Nerve ending \\(\\rightarrow\\) Axon \\(\\rightarrow\\) Cell body \\(\\rightarrow\\) Dendrite</li>
                    <li>(B) Dendrite \\(\\rightarrow\\) Cell body \\(\\rightarrow\\) Axon \\(\\rightarrow\\) Nerve ending</li>
                    <li>(C) Cell body \\(\\rightarrow\\) Dendrite \\(\\rightarrow\\) Axon \\(\\rightarrow\\) Nerve ending</li>
                    <li>(D) Dendrite \\(\\rightarrow\\) Axon \\(\\rightarrow\\) Nerve ending \\(\\rightarrow\\) Cell body</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    The correct path is: <strong>Dendrite</strong> (Receives) \\(\\rightarrow\\) <strong>Cell body</strong> \\(\\rightarrow\\) <strong>Axon</strong> \\(\\rightarrow\\) <strong>Nerve ending</strong>.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>`,

    // 08 Heredity - Q9
    "08HeredityandEvolution": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q9</span>
            </div>
            <div class="question"><span class="question-number">Q9.</span> A tall pea plant with round seeds (TTRR) is crossed with a short pea plant with wrinkled seeds (ttrr). The \\(F_1\\) generation will be
                <ul class="options">
                    <li>(A) 25% tall with round seeds</li>
                    <li>(B) 50% tall with wrinkled seeds</li>
                    <li>(C) 75% tall with wrinkled seeds</li>
                    <li>(D) 100% tall with round seeds</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Parent 1: TTRR (Tall, Round). Gametes: TR.<br>
                    Parent 2: ttrr (Short, Wrinkled). Gametes: tr.<br>
                    F1 Generation: TtRr.<br>
                    Phenotype: Tall and Round (Dominant traits).<br>
                    All (100%) offspring are TtRr.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>`,

    // 09 Light - Q14
    "09LightReflectionandRefraction": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q14</span>
            </div>
            <div class="question"><span class="question-number">Q14.</span> Identify from the following ray diagram which shows the correct path of the reflected ray for the ray incident on a concave mirror as shown :<br>
                <img src="2025-31-6-QuestionNumber14.png" alt="2025-31-6-QuestionNumber14" class="question-image placeholder">
                <ul class="options">
                    <li>(A) Fig A</li>
                    <li>(B) Fig B</li>
                    <li>(C) Fig C</li>
                    <li>(D) Fig D</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    The incident ray is parallel to the principal axis.<br>
                    Rule: A ray parallel to the principal axis, after reflection from a concave mirror, passes through the <strong>Principal Focus (F)</strong>.<br>
                    Figure (D) typically shows this path correctly.<br>
                    <strong>Correct Option: (D)</strong> (Assuming D shows passing through F).
                </div>
            </div>
        </div>`,

    // 10 Human Eye - Q13
    "10TheHumanEyeandtheColourfulWorld": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q13</span>
            </div>
            <div class="question"><span class="question-number">Q13.</span> The curvature of eye lens of human eye
                <ul class="options">
                    <li>(A) is fixed.</li>
                    <li>(B) can be increased.</li>
                    <li>(C) can be decreased.</li>
                    <li>(D) increases or decreases as the case may be.</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    The curvature of the eye lens is modified by the ciliary muscles (Accommodation) to focus on near or distant objects. It can be increased (for near objects) or decreased (for distant objects).<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>`,

    // 12 Magnetic Effects - Q20
    "12MagneticEffectsofElectricCurrent": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q20</span>
            </div>
            <div class="question"><span class="question-number">Q20.</span> <strong>Assertion (A):</strong> In the common domestic circuits the earth wire is connected to a metallic plate buried deep inside the earth.<br>
                <strong>Reason (R):</strong> Earth wire ensures that any leakage of current to the metallic body of the appliance keeps its potential to that of the earth, so the user may not get a severe electric shock.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Assertion (A):</strong> True. This is standard grounding procedure.<br>
                    <strong>Reason (R):</strong> True. Low resistance path prevents shock.<br>
                    <strong>Explanation:</strong> R correctly explains why A is done (Safety).<br>
                    <strong>Correct Option: (A)</strong>
                </div>
            </div>
        </div>`,

    // 13 Our Environment - Q15, Q16, Q19
    "13OurEnvironment": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q15</span>
            </div>
            <div class="question"><span class="question-number">Q15.</span> In the following groups of wastes, which group contains only non-biodegradable wastes ?
                <ul class="options">
                    <li>(A) Leather footwear, Plastic plate, Polythene bag</li>
                    <li>(B) Empty medicine bottle, Milk packet, Aluminium can</li>
                    <li>(C) Used tea leaves, Cardboard box, Iron nail</li>
                    <li>(D) Plastic Syringes, Newspaper, Ball point pen</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (A) Leather is bio-degradable (takes time but yes).<br>
                    (B) Empty bottle (Glass?), Milk packet (Plastic), Al Can (Metal). All non-bio.<br>
                    (C) Tea leaves, Cardboard are Bio.<br>
                    (D) Newspaper is Bio.<br>
                    Let's re-evaluate (B). Milk packet (Plastic). Glass Bottle. Aluminium. Yes, all are non-biodegradable.<br>
                    <strong>Correct Option: (B)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q16</span>
            </div>
            <div class="question"><span class="question-number">Q16.</span> Consider the following food chain :<br>
                \\(\\text{Grass} \\rightarrow \\text{Grasshopper} \\rightarrow \\text{Frog} \\rightarrow \\text{Snake} \\rightarrow \\text{Eagle}\\)<br>
                If the amount of energy available at third trophic level is 50 kJ, the available energy at the producer level was :
                <ul class="options">
                    <li>(A) 0.5 kJ</li>
                    <li>(B) 5 kJ</li>
                    <li>(C) 500 kJ</li>
                    <li>(D) 5000 kJ</li>
                </ul>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Tropic Levels:<br>
                    T1 (Producer): Grass<br>
                    T2: Grasshopper<br>
                    T3: Frog (Given 50 kJ)<br>
                    Backwards calculation (10% Law):<br>
                    If T3 = 50 kJ (which is 10% of T2). Then T2 = 500 kJ.<br>
                    If T2 = 500 kJ (which is 10% of T1). Then T1 = 5000 kJ.<br>
                    <strong>Correct Option: (D)</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="1">
            <div class="card-top">
                <span class="badge badge-1">1 Mark</span>
                <span class="card-meta">31/6 &middot; Q19</span>
            </div>
            <div class="question"><span class="question-number">Q19.</span> <strong>Assertion (A):</strong> Food web is a network of several food chains operating in an ecosystem.<br>
                <strong>Reason (R):</strong> Food web decreases the stability of an ecosystem.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Assertion (A):</strong> True. Definition.<br>
                    <strong>Reason (R):</strong> False. Food webs <strong>increase</strong> stability by providing alternative pathways for energy flow.<br>
                    <strong>Correct Option: (C)</strong> (A is true, R is false).
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
            console.log(`Added 31/6 Batch 1 questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`No change for: ${path.basename(filePath)} (Could not find insertion point)`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

console.log("Adding 31/6 Questions Batch 1...");
Object.keys(questionsToAdd).forEach(folder => {
    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding 31/6 Batch 1.");
