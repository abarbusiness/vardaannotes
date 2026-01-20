
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Batch 2: Q21-Q39 (31/5 Series)
// Proper double-escaping for LaTeX: \\rightarrow, \\text, etc.
const questionsToAdd = {
    // 09 Light - Q21, Q29, Q36
    "09LightReflectionandRefraction": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/5 &middot; Q21</span>
            </div>
            <div class="question"><span class="question-number">Q21.</span> During an experiment, a student observes that the given mirror is forming an erect and diminished image for all positions of the object placed in front of it.<br>
                Based on this information, answer the following questions :<br>
                (a) Identify the mirror.<br>
                (b) Using new Cartesian sign convention, write the magnitude of the magnification in this case.<br>
                (c) What will be the radius of curvature of the mirror if its focal length is 20 cm ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) <strong>Convex Mirror</strong> (Always forms erect and diminished image).<br>
                    (b) Magnification (m) is positive (erect) and less than 1 (diminished). So, <strong>0 < m < 1</strong>.<br>
                    (c) Radius of curvature \\(R = 2f\\).<br>
                    Given \\(f = +20\\text{ cm}\\) (Convex mirror focal length is positive).<br>
                    \\(R = 2 \\times 20 = 40\\text{ cm}\\).
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q29</span>
            </div>
            <div class="question"><span class="question-number">Q29.</span> The power of a lens is \\(-0.25\\text{ D}\\). Based on this information, find out<br>
                (a) The type of lens and its focal length.<br>
                (b) The eye defect for which it may be used as a corrective lens.<br>
                (c) The nature and size of the image formed by this lens when an object is placed between F and 2F from the optical centre of this lens.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Power \\(P = -0.25\\text{ D}\\). Negative sign indicates <strong>Concave Lens</strong>.<br>
                    Focal length \\(f = \\frac{1}{P} = \\frac{1}{-0.25} = -4\\text{ m}\\) or \\(-400\\text{ cm}\\).<br>
                    (b) Concave lens is used to correct <strong>Myopia</strong> (Near-sightedness).<br>
                    (c) For a Concave lens, regardless of object position (between F and 2F or anywhere), the image is always <strong>Virtual, Erect and Diminished</strong>.
                </div>
            </div>
        </div>

        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/5 &middot; Q36</span>
            </div>
            <div class="question"><span class="question-number">Q36.</span> (A) (a) Observe the following diagram and compare (i) speed of light and (ii) optical densities of the three media A, B and C. Also give justification for your answer of any one of the two cases in terms of refractive indices of A, B and C.<br>
                <img src="2025-31-5-QuestionNumber36.png" alt="2025-31-5-QuestionNumber36" class="question-image placeholder"><br>
                (b) Redraw the path of a ray of light through the three media, if the ray of light starting from medium A falls on the medium B<br>
                (i) Obliquely and the optical density of medium B is made more than that of A and C.<br>
                (ii) The ray falls normally from medium A to medium B.<br>
                <strong>OR</strong><br>
                (B) Analyse the following observation table showing variation of image distance (v) with object distance (u) in case of a convex lens and answer the questions that follow without doing any calculations :<br>
                [Table logic: u=-15, v=-60; u=-25, v=+100; u=-30, v=+60; u=-40, v=+40; u=-60, v=+30; u=-100, v=+25]<br>
                (a) Determine the focal length of the lens. Give reason for your answer.<br>
                (b) Find magnification of the image formed in Observation No. 3.<br>
                (c) The numerical value of magnifications in cases of observation 1 and 2 is same. List two differences in the images formed in these two cases.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    (a) From diagram: Ray bends toward normal from A to B (B is denser than A). Ray bends away from normal from B to C (B is denser than C). Ray direction C implies it is parallel to A?<br>
                    Comparing Densities: \\(n_B > n_A\\) and \\(n_B > n_C\\).<br>
                    Speed: \\(v \\propto 1/n\\). So Speed in A > Speed in B. Speed in C > Speed in B.<br>
                    (b) Placeholders for Ray Diagrams:<br>
                    <img src="2025-31-5-QuestionNumber36A_Sol.png" alt="Ray Diagram Solution" class="question-image placeholder"><br>
                    <strong>OR</strong><br>
                    <strong>(B)</strong><br>
                    (a) At Observation 4: \\(u = -40, v = +40\\). Since \\(|u| = |v| = 2f\\), this is the center of curvature.<br>
                    \\(2f = 40 \\Rightarrow f = +20\\text{ cm}\\).<br>
                    (b) Obs 3: \\(u = -30, v = +60\\).<br>
                    \\(m = v/u = 60 / -30 = -2\\).<br>
                    (c) Obs 1 (u=-15, v=-60): Virtual image (u < f). m is Positive (+4).<br>
                    Obs 2 (u=-25, v=+100): Real image. m is Negative (-4).<br>
                    Note: Question says "numerical value... is same". |+4| = |-4| = 4. True.<br>
                    Differences:<br>
                    1. Obs 1 image is Virtual & Erect. Obs 2 image is Real & Inverted.<br>
                    2. Obs 1 formed on same side. Obs 2 formed on other side.
                </div>
            </div>
        </div>`,

    // 11 Electricity - Q22, Q28
    "11Electricity": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/5 &middot; Q22</span>
            </div>
            <div class="question"><span class="question-number">Q22.</span> (A) Determine the maximum and minimum resistance which can be obtained by joining five resistors of \\(\\frac{1}{5} \\Omega\\) each.<br>
                <strong>OR</strong><br>
                (B) Calculate potential difference across a \\(4 \\Omega\\) resistor that produces 100 J of heat every second.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    Maximum Resistance (Series): \\(R_{max} = n R = 5 \\times \\frac{1}{5} = 1 \\Omega\\).<br>
                    Minimum Resistance (Parallel): \\(R_{min} = \\frac{R}{n} = \\frac{1/5}{5} = \\frac{1}{25} \\Omega = 0.04 \\Omega\\).<br><br>
                    <strong>(B)</strong><br>
                    Heat \\(H = 100\\text{ J}\\), Time \\(t = 1\\text{ s}\\). Power \\(P = 100\\text{ W}\\).<br>
                    \\(P = \\frac{V^2}{R} \\Rightarrow 100 = \\frac{V^2}{4}\\).<br>
                    \\(V^2 = 400 \\Rightarrow V = 20\\text{ V}\\).
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q28</span>
            </div>
            <div class="question"><span class="question-number">Q28.</span> The resistance of a wire of 0.01 cm radius is 7 ohms. If the resistivity of the material of the wire is \\(44 \\times 10^{-6}\\) ohm meter, calculate the length of the wire.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    Radius \\(r = 0.01\\text{ cm} = 10^{-4}\\text{ m}\\).<br>
                    Resistance \\(R = 7 \\Omega\\).<br>
                    Resistivity \\(\\rho = 44 \\times 10^{-6} \\Omega\\text{m}\\).<br>
                    Area \\(A = \\pi r^2 = \\frac{22}{7} \\times (10^{-4})^2 = \\frac{22}{7} \\times 10^{-8}\\text{ m}^2\\).<br>
                    Formula: \\(R = \\rho \\frac{l}{A} \\Rightarrow l = \\frac{RA}{\\rho}\\).<br>
                    \\(l = \\frac{7 \\times (\\frac{22}{7} \\times 10^{-8})}{44 \\times 10^{-6}}\\)<br>
                    \\(l = \\frac{22 \\times 10^{-8}}{44 \\times 10^{-6}} = 0.5 \\times 10^{-2}\\text{ m} = 0.005\\text{ m} = 0.5\\text{ cm}\\).<br>
                    (Calculation check: \\(22/44 = 0.5\\). \\(10^{-8}/10^{-6} = 10^{-2}\\)).
                </div>
            </div>
        </div>`,

    // 07 Reproduction - Q23, Q30
    "07HowDoOrganismsReproduce": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/5 &middot; Q23</span>
            </div>
            <div class="question"><span class="question-number">Q23.</span> Give reasons :<br>
                (a) The male reproductive organ responsible for formation of germ cells is located outside the abdominal cavity.<br>
                (b) The roles of the glands, present along the path of the vas-deferens, are very significant.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Testes are located in the scrotum outside the abdominal cavity to maintain a <strong>temperature 2-3°C lower</strong> than body temperature, which is necessary for effective sperm production (spermatogenesis).<br>
                    (b) Glands (Seminal vesicles, Prostate) secrete fluids that:<br>
                    1. Provide <strong>nutrition</strong> to sperms.<br>
                    2. Provide a fluid medium for easier <strong>transport</strong>.<br>
                    3. Activate the sperms.
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q30</span>
            </div>
            <div class="question"><span class="question-number">Q30.</span> Differentiate between self-pollination and cross pollination. Which one of the two is better for the survival of species ? Give reason to justify your answer.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Differences:</strong><br>
                    - Self-pollination: Transfer of pollen from anther to stigma of same flower or same plant. No variations.<br>
                    - Cross-pollination: Transfer to stigma of another flower on different plant. Introduces variations.<br><br>
                    <strong>Better for Survival:</strong> <strong>Cross-pollination</strong> is better.<br>
                    <strong>Reason:</strong> It introduces genetic variations, which enables the species to adapt to changing environmental conditions (Survival of the Fittest). It also prevents inbreeding depression.
                </div>
            </div>
        </div>`,

    // 05 Life Processes - Q24, Q31
    "05LifeProcesses": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q24</span>
            </div>
            <div class="question"><span class="question-number">Q24.</span> (A) How is lymph formed ? State its important function.<br>
                <strong>OR</strong><br>
                (B) (a) Identify 'X' in the figure of human nephron shown below. What role does it play in the process of urine formation ?<br>
                <img src="2025-31-5-QuestionNumber24.png" alt="2025-31-5-QuestionNumber24" class="question-image placeholder"><br>
                (b) Why some substances are selectively reabsorbed from the initial filtrate of urine, as it flows along the tabular part of nephron ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    <strong>Formation:</strong> Lymph (Tissue Fluid) is formed when some plasma, proteins, and blood cells escape from the pores in the walls of capillaries into the intercellular spaces.<br>
                    <strong>Function:</strong><br>
                    1. Carries digested and absorbed fat from intestine.<br>
                    2. Drains excess fluid from extra cellular space back into the blood.<br><br>
                    <strong>(B)</strong><br>
                    (a) <strong>X = Glomerulus</strong> (or Bowman's Capsule? X usually points to the cup or the tuft. If tuft -> Glomerulus. If Cup -> Bowman's capsule. Glomerulus filters blood. Bowman's collects filtrate). Assuming Glomerulus/Bowman's Unit (Malpighian Body).<br>
                    Role: <strong>Ultrafiltration</strong>. Filters blood under pressure to remove nitrogenous waste, glucose, water, etc.<br>
                    (b) Selective reabsorption (Glucose, amino acids, salts, water) occurs to prevent loss of essential nutrients and to maintain water balance (osmoregulation) in the body.
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q31</span>
            </div>
            <div class="question"><span class="question-number">Q31.</span> List three raw materials required by terrestrial plants for photosynthesis. Explain how nature provides these raw material to the plants.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    1. <strong>Carbon Dioxide (CO2):</strong> Provided by the atmosphere. Absorbed through stomata on leaves.<br>
                    2. <strong>Water (H2O):</strong> Provided by the soil. Absorbed by roots via osmosis and transported via Xylem.<br>
                    3. <strong>Sunlight:</strong> Provided by the Sun. Absorbed by Chlorophyll in chloroplasts.<br>
                    (Also Minerals like N, P, Mg from soil).
                </div>
            </div>
        </div>`,

    // 13 Our Environment - Q25
    "13OurEnvironment": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/5 &middot; Q25</span>
            </div>
            <div class="question"><span class="question-number">Q25.</span> Study the food web given below :<br>
                <img src="2025-31-5-QuestionNumber25.png" alt="2025-31-5-QuestionNumber25" class="question-image placeholder"><br>
                (a) Identify the food chain(s) in which the eagle receives the highest energy from the producers.<br>
                (b) Identify the organism in which a non-biodegradable pesticide will be found in maximum concentration. Name the term used for this phenomenon.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) For highest energy transfer, the food chain length must be <strong>shortest</strong> (10% Law).<br>
                    Possible chains ending in Eagle:<br>
                    1. Grass \\(\\rightarrow\\) Mouse \\(\\rightarrow\\) Eagle (3 trophic levels).<br>
                    2. Grass \\(\\rightarrow\\) Grasshopper \\(\\rightarrow\\) Frog \\(\\rightarrow\\) Snake \\(\\rightarrow\\) Eagle (5 levels).<br>
                    Shortest chain is <strong>Grass \\(\\rightarrow\\) Mouse \\(\\rightarrow\\) Eagle</strong>. Eagle gets most energy here.<br>
                    (b) <strong>Eagle</strong> (Top Carnivore).<br>
                    Term: <strong>Biological Magnification</strong>.
                </div>
            </div>
        </div>`,

    // 01 Chemical Reactions (or Metals Q26 is pure chem)
    "01ChemicalReactionsandEquations": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/5 &middot; Q26</span>
            </div>
            <div class="question"><span class="question-number">Q26.</span> A copper wire on burning in flame, gets coated with a black substance. Write the chemical equation of the reaction that takes place. How can this chemical change be reversed ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Reaction:</strong> Oxidation of Copper.<br>
                    \\(2\\text{Cu} + \\text{O}_2 \\xrightarrow{\\text{Heat}} 2\\text{CuO}\\) (Black Copper Oxide).<br>
                    <strong>Reversal:</strong> By passing Hydrogen gas over hot copper oxide.<br>
                    \\(\\text{CuO} + \\text{H}_2 \\xrightarrow{\\text{Heat}} \\text{Cu} + \\text{H}_2\\text{O}\\).
                </div>
            </div>
        </div>`,

    // 12 Magnetic Effects - Q27, Q37
    "12MagneticEffectsofElectricCurrent": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q27</span>
            </div>
            <div class="question"><span class="question-number">Q27.</span> Answer the following questions for a case in which a current carrying conductor is placed in a uniform magnetic field :<br>
                (a) List three factors on which the magnitude of the force acting on the conductor depends.<br>
                (b) When is the magnitude of force on the conductor maximum ?<br>
                (c) Name the rule which helps in determining the direction of force on the conductor and give its one application.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Factors (from \\(F = BIL \\sin\\theta\\)):<br>
                    1. Strength of Magnetic Field (B).<br>
                    2. Strength of Current (I).<br>
                    3. Length of conductor (L).<br>
                    (b) Maximum when conductor is perpendicular (\\(90^\\circ\\)) to magnetic field.<br>
                    (c) <strong>Fleming's Left Hand Rule</strong>.<br>
                    Application: <strong>Electric Motor</strong>.
                </div>
            </div>
        </div>

        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/5 &middot; Q37</span>
            </div>
            <div class="question"><span class="question-number">Q37.</span> In order to obtain magnetic field lines around a bar magnet, a student performed an experiment using a magnetic compass and a bar magnet. The magnet was placed on a sheet of white paper fixed on a drawing board. Using magnetic needle he obtained on the paper a pattern of magnetic field lines (as shown below) around the bar magnet.<br>
                <img src="2025-31-5-QuestionNumber37.png" alt="2025-31-5-QuestionNumber37" class="question-image placeholder"><br>
                (a) By convention, the field lines emerge from north pole and merge at south pole. Why ? Give reason.<br>
                (b) State the relationship between strength of the magnetic field and the degree of closeness of the field lines.<br>
                (c) (A) (i) No two field lines can ever intersect each other. Give reason.<br>
                (ii) The magnetic field in a given region is uniform. Draw a diagram to represent it.<br>
                <strong>OR</strong><br>
                (c) (B) Draw the pattern of the magnetic field lines through and around a current carrying solenoid. What does the pattern of field lines inside the solenoid represent ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Convention is based on the direction a North pole of a compass needle points. Outside magnet, N-pole is repelled by N and attracted by S, moving N \\(\\rightarrow\\) S.<br>
                    (b) Closeness (Density) of lines \\(\\propto\\) Strength of field. Closer lines = Stronger field.<br>
                    (c) (A) (i) If they intersect, there would be two directions of magnetic field at the point of intersection, which is impossible.<br>
                    (ii) Uniform Field Diagram:<br>
                    <img src="2025-31-5-QuestionNumber37A_Sol.png" alt="Uniform Magnetic Field" class="question-image placeholder"><br>
                    <strong>OR</strong><br>
                    (B) Solenoid Diagram:<br>
                    <img src="2025-31-5-QuestionNumber37B_Sol.png" alt="Solenoid Magnetic Field" class="question-image placeholder"><br>
                    Inside pattern: Parallel straight lines indicate a <strong>Uniform Magnetic Field</strong>.
                </div>
            </div>
        </div>`,

    // 03 Metals - Q32
    "03MetalsAndNonMetals": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/5 &middot; Q32</span>
            </div>
            <div class="question"><span class="question-number">Q32.</span> (A) Observe the following diagram showing an experiment to determine the conditions under which a metal 'M' corrodes.<br>
                <img src="2025-31-5-QuestionNumber32.png" alt="2025-31-5-QuestionNumber32" class="question-image placeholder"><br>
                List your observations in each of the cases A, B and C with reason, if the metal 'M' is generally protected against corrosion by the method of galvanisation.<br>
                <strong>OR</strong><br>
                (B) (a) Show the formation of Aluminium Nitride (AlN) by the transfer of electrons. [At. no. of Al = 13; At. no. of N = 7]<br>
                (b) "Ionic compounds are solids and are generally brittle and break into pieces when pressure is applied." Give reason to justify the statement.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    Metal M is likely Iron (Fe) as galvanisation (Zinc coating) is used for it.<br>
                    Case A (Moist Air): <strong>Corrosion (Rusting) occurs</strong>. Both Air (O2) and Moisture (H2O) are present.<br>
                    Case B (Boiled water + Oil): <strong>No Corrosion</strong>. Boiled water has no dissolved air, oil prevents air contact.<br>
                    Case C (Dry Air + Desiccant): <strong>No Corrosion</strong>. No moisture.<br><br>
                    <strong>(B)</strong><br>
                    (a) Electron Transfer Diagram:<br>
                    <img src="2025-31-5-QuestionNumber32B_Sol.png" alt="Formation of AlN" class="question-image placeholder"><br>
                    Al (2,8,3) loses 3e-. N (2,5) gains 3e-.<br>
                    (b) <strong>Brittle Nature:</strong> In ionic solids, ions are arranged in layers. When pressure is applied, like charged ions come in front of each other and strong electrostatic repulsion breaks the crystal lattice.
                </div>
            </div>
        </div>`,

    // 02 Acids - Q33
    "02AcidsBasesandSalts": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/5 &middot; Q33</span>
            </div>
            <div class="question"><span class="question-number">Q33.</span> Write chemical formula of washing soda. How is it obtained from baking soda ? List two uses of washing soda.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Formula:</strong> \\(\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}\\) (Sodium Carbonate Decahydrate).<br>
                    <strong>Preparation:</strong> Heating Baking Soda gives Sodium Carbonate (anhydrous), which is then recrystallised with water.<br>
                    1. \\(2\\text{NaHCO}_3 \\xrightarrow{\\text{Heat}} \\text{Na}_2\\text{CO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O}\\)<br>
                    2. \\(\\text{Na}_2\\text{CO}_3 + 10\\text{H}_2\\text{O} \\rightarrow \\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}\\)<br>
                    <strong>Uses:</strong><br>
                    1. Softening of hard water.<br>
                    2. Manufacture of glass, soap, paper.
                </div>
            </div>
        </div>`,

    // 04 Carbon - Q34, Q38
    "04CarbonAndItsCompounds": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/5 &middot; Q34</span>
            </div>
            <div class="question"><span class="question-number">Q34.</span> (A) (a) Define the term "Functional group of a carbon compound". Write the formula of functional group present in (i) propanol and (ii) propanone.<br>
                (b) Name the process of conversion of (i) ethanol to ethene and (ii) ethanol to ethanoic acid. Write the reaction equation stating the conditions required for each of the reactions to occur.<br>
                <strong>OR</strong><br>
                (B) (a) Name two cyclic hydrocarbons and draw the structure of any one.<br>
                (b) Explain the process of micelle formation on adding soap in water.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    (a) <strong>Functional Group:</strong> An atom or group of atoms present in a carbon compound which largely determines its chemical properties.<br>
                    (i) Propanol: Alcohol group (-OH).<br>
                    (ii) Propanone: Ketone group (>C=O).<br>
                    (b) (i) <strong>Dehydration</strong>. \\(\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Hot Conc. H}_2\\text{SO}_4, 443K} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}\\).<br>
                    (ii) <strong>Oxidation</strong>. \\(\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Alk. KMnO}_4 + \\text{Heat}} \\text{CH}_3\\text{COOH}\\).<br>
                    <strong>OR</strong><br>
                    <strong>(B)</strong><br>
                    (a) Cyclohexane, Benzene.<br>
                    Structure:<br>
                    <img src="2025-31-5-QuestionNumber34B_Sol.png" alt="Structure of Cyclic Hydrocarbon" class="question-image placeholder"><br>
                    (b) <strong>Micelle Formation:</strong> Soap molecules have a hydrophobic tail (hydrocarbon) and hydrophilic head (ionic). In water, tails clump together away from water (towards dirt/oil) and heads face outward, forming a spherical cluster called Micelle. This emulsion helps remove dirt.
                </div>
            </div>
        </div>

        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/5 &middot; Q38</span>
            </div>
            <div class="question"><span class="question-number">Q38.</span> Case Study based on Carbon/Bonding.<br>
                (a) An element A has atomic number 16, how will it attain its nearest noble gas configuration ?<br>
                (b) Write the number of (i) single and (ii) double covalent bonds in a molecule of butene (\\(\\text{C}_4\\text{H}_8\\)).<br>
                (c) (A) Explain the formation of a molecule of ammonia (\\(\\text{NH}_3\\)), using electron dot structure. (Atomic number of nitrogen is 7)<br>
                <strong>OR</strong><br>
                (c) (B) Why does carbon share its valence electrons with other atoms of carbon or with atoms of other elements ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Element A (Z=16) is Sulphur (2,8,6). To attain configuration of Argon (2,8,8), it needs to <strong>gain 2 electrons</strong> or share 2 electrons.<br>
                    (b) Butene Structure (\\(\\text{CH}_2=\\text{CH}-\\text{CH}_2-\\text{CH}_3\\) or similar):<br>
                    (i) Single bonds: 8 (C-H) + 2 (C-C) = 10 single bonds.<br>
                    (ii) Double bonds: 1 (C=C).<br>
                    (c) (A) Ammonia Formation:<br>
                    <img src="2025-31-5-QuestionNumber38C_Sol.png" alt="Electron Dot Structure of Ammonia" class="question-image placeholder"><br>
                    Nitrogen shares 3 electrons with 3 Hydrogen atoms to execute octet/duplet.<br>
                    <strong>OR</strong><br>
                    (c) (B) Carbon (2,4) cannot gain 4 electrons (energetically difficult to hold) nor lose 4 electrons (energy requirement high). Hence it forms bonds by <strong>sharing</strong> electrons (Covalent bonding) to complete its octet.
                </div>
            </div>
        </div>`,

    // 06 Control - Q35
    "06ControlAndCoordination": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/5 &middot; Q35</span>
            </div>
            <div class="question"><span class="question-number">Q35.</span> (A) (a) Analyse the given situations and interpret the possible reason for each :<br>
                (i) Iodine deficiency in diet increases the possibility of a disease of swollen neck in a person.<br>
                (ii) Some people in population may have very short heights (dwarfs).<br>
                (iii) Thick facial hairs develop in boys at the age of 10-12 years.<br>
                (b) Explain two reasons which necessitate the need of chemical communication in multicellular organisms.<br>
                <strong>OR</strong><br>
                (B) (a) Differentiate between voluntary and involuntary action.<br>
                (b) Define reflex action. With the help of a flow diagram, show the correct sequence of path of Nerve impulse from place of its origin.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(A)</strong><br>
                    (a) (i) Iodine is essential for Thyroxin synthesis by Thyroid gland. Deficiency causes Goitre (swollen neck).<br>
                    (ii) Deficiency of Growth Hormone (GH) from Pituitary gland in childhood causes Dwarfism.<br>
                    (iii) Secretion of <strong>Testosterone</strong> by Testes triggers secondary sexual characters (Puberty).<br>
                    (b) Need for Chemical Comm:<br>
                    1. Nerve impulses cannot reach every single cell; chemicals (hormones) can diffuse to all cells.<br>
                    2. Nerve impulses are transient; chemical effects can be sustained/steady.<br>
                    <strong>OR</strong><br>
                    <strong>(B)</strong><br>
                    (a) Voluntary: Controlled by will (Forebrain). Involuntary: Not controlled by will (Mid/Hindbrain).<br>
                    (b) Reflex Action: Sudden, involuntary response to a stimulus.<br>
                    Flow chart (Relex Arc):<br>
                    <img src="2025-31-5-QuestionNumber35B_Sol.png" alt="Reflex Arc Flow Chart" class="question-image placeholder"><br>
                    Receptor \\(\\rightarrow\\) Sensory Neuron \\(\\rightarrow\\) Spinal Cord (Relay) \\(\\rightarrow\\) Motor Neuron \\(\\rightarrow\\) Effector (Muscle).
                </div>
            </div>
        </div>`,

    // 08 Heredity - Q39
    "08HeredityandEvolution": `
        <!-- 31/5 Series -->
        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/5 &middot; Q39</span>
            </div>
            <div class="question"><span class="question-number">Q39.</span> Case Study on Chromosomes.<br>
                (a) What are chromosomes ?<br>
                (b) Why is the pair of sex chromosomes in human males called mismatched pair ?<br>
                (c) (A) Show with the help of a flow chart that the statistical probability of getting a boy or a girl is 50 : 50.<br>
                <strong>OR</strong><br>
                (c) (B) Mention two examples of animals where sex is not determined genetically like human beings. Describe in brief the method of sex determination in these animals.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Thread-like structures found in the nucleus carrying genetic information in the form of DNA.<br>
                    (b) Human males have XY chromosomes. X is normal size, Y is shorter. They are not perfect homologues, hence mismatched.<br>
                    (c) (A) Sex Determination Flow Chart:<br>
                    <img src="2025-31-5-QuestionNumber39C_Sol.png" alt="Sex Determination Flow Chart" class="question-image placeholder"><br>
                    50% sperms carry X, 50% carry Y. Egg always X. <br>
                    XX (Girl) : XY (Boy) = 1:1.<br>
                    <strong>OR</strong><br>
                    (c) (B) Examples: Turtles, Lizards (Reptiles), Snails.<br>
                    Method: <strong>Environmental Sex Determination</strong>. The temperature at which fertilised eggs are kept determines the sex (e.g., high temp -> female in some turtles).
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
            console.log(`Added 31/5 Batch 2 questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`No change for: ${path.basename(filePath)} (Could not find insertion point)`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

console.log("Adding 31/5 Questions Batch 2...");
Object.keys(questionsToAdd).forEach(folder => {
    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding 31/5 Batch 2.");
