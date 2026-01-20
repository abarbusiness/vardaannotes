
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Batch 2: Q21-Q39 (31/6/3 Series)
const questionsToAdd = {
    // 02 Acids - Q28
    "02AcidsBasesandSalts": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q28</span>
            </div>
            <div class="question"><span class="question-number">Q28.</span> (a) State the chemical property in each case on which the following uses of baking soda are based upon :
                <ol type="i">
                    <li>as an anti-acids</li>
                    <li>as a constituent in making baking powder</li>
                    <li>in soda-acid fire-extinguishers</li>
                </ol>
                <strong>OR</strong><br>
                (b) Write chemical equations to show what happens when an acid reacts with a
                <ol type="i">
                    <li>metal</li>
                    <li>base and</li>
                    <li>carbonate</li>
                </ol>
                Write the name of the main product formed in each case.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a) Uses of Baking Soda (\\(\\text{NaHCO}_3\\)):</strong><br>
                    (i) <strong>Antacid:</strong> Being alkaline, it neutralizes excess acid in the stomach.<br>
                    (ii) <strong>Baking Powder:</strong> On heating or mixing with water, it releases \\(\\text{CO}_2\\) which makes cake soft/spongy. (Reaction with mild edible acid like tartaric acid).<br>
                    (iii) <strong>Fire Extinguisher:</strong> Reacts with acid to produce carbon dioxide (\\(\\text{CO}_2\\)) which cuts off oxygen supply.<br>
                    <hr>
                    <strong>(b) Acid Reactions:</strong><br>
                    (i) <strong>Metal:</strong> Acid + Metal \\(\\rightarrow\\) Salt + Hydrogen gas.<br>
                    \\(\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2\\)<br>
                    Product: <strong>Salt</strong> (Zinc Sulphate).<br>
                    (ii) <strong>Base:</strong> Acid + Base \\(\\rightarrow\\) Salt + Water (Neutralization).<br>
                    \\(\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}\\)<br>
                    Product: <strong>Salt</strong> (Sodium Chloride).<br>
                    (iii) <strong>Carbonate:</strong> Acid + Carbonate \\(\\rightarrow\\) Salt + Water + Carbon Dioxide.<br>
                    \\(\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2\\)<br>
                    Product: <strong>Salt</strong> (Sodium Chloride).
                </div>
            </div>
        </div>`,

    // 03 Metals - Q21, Q37
    "03MetalsAndNonMetals": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q21</span>
            </div>
            <div class="question"><span class="question-number">Q21.</span> Name a metal found in the earth's crust
                <ol type="i">
                    <li>in free state and</li>
                    <li>in the form of its compound.</li>
                </ol>
                State where each of these metals are placed in the reactivity series of metals.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (i) <strong>Free State:</strong> Gold (Au) or Platinum (Pt).<br>
                    <strong>Position:</strong> Bottom of the reactivity series (Least reactive).<br>
                    (ii) <strong>Combined State:</strong> Aluminium (Al) or Iron (Fe) or Sodium (Na).<br>
                    <strong>Position:</strong> Top or Middle of the reactivity series (Highly or Moderately reactive).
                </div>
            </div>
        </div>

        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/6 &middot; Q37</span>
            </div>
            <div class="question"><span class="question-number">Q37.</span> <strong>Case Study:</strong> Many pure metals like copper, iron and gold are very soft... Instead of pure metals, alloys are used...<br>
                (I) How does electrical conductivity and melting point of a metal change when it is converted to its alloy by mixing a small amount of an element in it ?<br>
                (II) Name an alloy used for welding two wires together in an electric circuit. Write its major constituents.<br>
                (III) (a) What are alloys ? How is 'Brass' (an alloy) prepared ?<br>
                <strong>OR</strong><br>
                (III) (b) What is stainless steel ? How is it prepared ? Write one important property which makes it more useful in making cooking utensils as compared to its primary metal.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (I) <strong>Change:</strong> Electrical conductivity <strong>decreases</strong> and melting point <strong>decreases</strong> (usually) compared to pure metal.<br>
                    (II) <strong>Solder</strong>. Constituents: Lead (Pb) and Tin (Sn).<br>
                    (III) (a) <strong>Alloys:</strong> Homogeneous mixture of two or more metals, or a metal and a non-metal. <strong>Brass:</strong> Prepared by mixing Copper (Cu) and Zinc (Zn).<br>
                    (III) (b) <strong>Stainless Steel:</strong> An alloy of Iron, Nickel and Chromium. Prepared by mixing molten iron with C, Ni, Cr. <strong>Property:</strong> Rust-free (Resistant to corrosion).
                </div>
            </div>
        </div>`,

    // 04 Carbon - Q36
    "04CarbonAndItsCompounds": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/6 &middot; Q36</span>
            </div>
            <div class="question"><span class="question-number">Q36.</span> (a) Name an alcohol and a carboxylic acid having two carbon atoms in their structures. Draw their structures and state how this alcohol can be converted into a carboxylic acid. What happens when these two compounds react in the presence of an acid ? Write chemical equations for the reactions involved in the two cases mentioned above.<br>
                <strong>OR</strong><br>
                (b) What are soaps ? Write the structure of a soap molecule. Explain the cleansing action of a soap. Why are soaps not considered suitable for washing clothes in a region where water is hard ? How is this problem overcome ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a)</strong><br>
                    Alcohol: <strong>Ethanol</strong> (\\(\\text{CH}_3\\text{CH}_2\\text{OH}\\)).<br>
                    Acid: <strong>Ethanoic Acid</strong> (\\(\\text{CH}_3\\text{COOH}\\)).<br>
                    <strong>Conversion:</strong> Oxidation using alkaline \\(\\text{KMnO}_4\\) or acidified \\(\\text{K}_2\\text{Cr}_2\\text{O}_7\\).<br>
                    Reaction: \\(\\text{CH}_3\\text{CH}_2\\text{OH} + 2[\text{O}] \\rightarrow \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}\\).<br>
                    <strong>Reaction (Esterification):</strong> Ethanol + Ethanoic Acid (conc. \\(\\text{H}_2\\text{SO}_4\\)) \\(\\rightarrow\\) Ethyl Ethanoate (Ester) + Water.<br>
                    \\(\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}\\).<br>
                    <hr>
                    <strong>(b) Soaps:</strong> Sodium or potassium salts of long chain carboxylic acids.<br>
                    Structure: \\(\\text{R-COO}^- \\text{Na}^+\\) (Ionic end hydrophilic, Hydrocarbon tail hydrophobic).<br>
                    <strong>Cleansing:</strong> Micelle formation. Tail dissolves in oil/dirt, head in water. Emulsifies grease.<br>
                    <strong>Hard Water:</strong> Reacts with Ca/Mg ions to form scum (insoluble precipitate), reducing proper cleansing.<br>
                    <strong>Overcome:</strong> By using <strong>Detergents</strong> (Ammonium/Sulphonate salts) which do not form scum.
                </div>
            </div>
        </div>`,

    // 05 Life Processes - Q27, Q31
    "05LifeProcesses": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q27</span>
            </div>
            <div class="question"><span class="question-number">Q27.</span> Explain why respiration is considered as an exothermic reaction. Give the chemical equation for this reaction.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Reason:</strong> During respiration, glucose is broken down in the presence of oxygen to release energy (ATP) and heat. Since energy is released, it is an exothermic reaction.<br>
                    <strong>Equation:</strong><br>
                    \\(\\text{C}_6\\text{H}_{12}\\text{O}_6(aq) + 6\\text{O}_2(g) \\rightarrow 6\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l) + \\text{Energy}\\)
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q31</span>
            </div>
            <div class="question"><span class="question-number">Q31.</span> Name the blood vessel that brings (i) oxygenated blood (ii) deoxygenated blood, to the human heart. Also name that chamber of the heart which receives deoxygenated blood and state how deoxygenated blood from this chamber is sent to lungs for oxygenation.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (i) Brings Oxygenated blood: <strong>Pulmonary Vein</strong> (from lungs).<br>
                    (ii) Brings Deoxygenated blood: <strong>Vena Cava</strong> (Superior/Inferior) (from body).<br>
                    <strong>Chamber receiving Deoxygenated blood:</strong> Right Atrium.<br>
                    <strong>Mechanism:</strong> From Right Atrium \\(\\rightarrow\\) Right Ventricle \\(\\rightarrow\\) pumped via <strong>Pulmonary Artery</strong> to the Lungs.
                </div>
            </div>
        </div>`,

    // 06 Control - Q25, Q38
    "06ControlAndCoordination": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q25</span>
            </div>
            <div class="question"><span class="question-number">Q25.</span> (a) How is brain protected in our body ?<br>
                (b) A doctor finds in one of his patients that he is not maintaining a proper posture and balance of his body. State the region of brain and also the part of brain which is responsible for it.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) <strong>Protection:</strong> Enclosed in a hard bony box called <strong>Cranium</strong> (Search). Inside, it is cushioned by fluid-filled balloon (Cerebrospinal Fluid - CSF) which provides shock absorption.<br>
                    (b) <strong>Region:</strong> Hind Brain.<br>
                    <strong>Part:</strong> Cerebellum (Responsible for posture/balance).
                </div>
            </div>
        </div>

        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/6 &middot; Q38</span>
            </div>
            <div class="question"><span class="question-number">Q38.</span> <strong>Case Study:</strong> The growth movements of plant parts in which the direction of the stimulus determines the direction of the response is known as tropic movements...<br>
                <img src="2025-31-6-QuestionNumber38.png" alt="2025-31-6-QuestionNumber38" class="question-image placeholder"><br>
                (I) Name the movement which causes 'X' and 'Y' to grow downwards and upwards respectively.<br>
                (II) Write the name of a hormone that plays a major role in (i) falling of leaves (ii) rapid cell division.<br>
                (III) (a) Leaves of the sensitive plant move very quickly in response to 'touch'. How is this stimulus of touch communicated and explain how the movement takes place.<br>
                <strong>OR</strong><br>
                (III) (b) Name the plant hormone which is synthesized at the shoot tip. How does this hormone helps the plant to bend towards light ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (I) <strong>Geotropism</strong> (Gravisensitivity). X (Root) - Positive Geotropism. Y (Shoot) - Negative Geotropism.<br>
                    (II) (i) Falling leaves: <strong>Abscisic Acid</strong>. (ii) Cell division: <strong>Cytokinins</strong>.<br>
                    (III) (a) <strong>Communication:</strong> Electrochemical signals. <strong>Movement:</strong> By changing the amount of water (turgor pressure) in the cells (pulvinus). Cells swell or shrink, causing folding.<br>
                    (III) (b) <strong>Hormone:</strong> Auxin.<br>
                    <strong>Mechanism:</strong> Auxin diffuses to the shady side. More auxin causes cells on shady side to elongate more than the illuminated side, causing bending acting towards light (Phototropism).
                </div>
            </div>
        </div>`,

    // 07 Reproduction - Q35
    "07HowDoOrganismsReproduce": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/6 &middot; Q35</span>
            </div>
            <div class="question"><span class="question-number">Q35.</span> (a) Name the method by which Amoeba and Leishmania reproduce. Write a major difference in the way they divide to produce new individuals.<br>
                (b) What is asexual reproduction ? Explain the process of budding in Hydra.<br>
                (c) Give two methods used to grow rose and jasmine plants by vegetative propagation.<br>
                <strong>OR</strong><br>
                (a) Write one function each of the parts - (i) petals (ii) anther (iii) style and (iv) ovary of a bisexual flower.<br>
                (b) Give one example each of a unisexual flower and a bisexual flower. Mention the changes which a flower undergoes after fertilization.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a) Binary Fission.</strong><br>
                    Difference: Amoeba divides in any plane. Leishmania divides in a definite orientation (longitudinal) to its whip-like structure.<br>
                    <strong>(b) Asexual Reproduction:</strong> Reproduction involving single parent without gamete fusion.<br>
                    <strong>Budding (Hydra):</strong> A small outgrowth (bud) develops due to repeated cell division. It grows, develops mouth/tentacles, and finally detaches to live independently.<br>
                    <strong>(c)</strong> Layering, Cutting, Grafting.<br>
                    <hr>
                    <strong>(a) Functions:</strong> (i) Petals: Attract insects/protections. (ii) Anther: Produces pollen grains. (iii) Style: Path for pollen tube. (iv) Ovary: Contains ovules, becomes fruit.<br>
                    <strong>(b) Examples:</strong> Unisexual: Papaya/Watermelon. Bisexual: Hibiscus/Mustard.<br>
                    <strong>Changes:</strong> Zygote divides to form Embryo. Ovule becomes Seed. Ovary ripens to form Fruit. Petals/sepals fall off.
                </div>
            </div>
        </div>`,

    // 08 Heredity - Q24, Q30
    "08HeredityandEvolution": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q24</span>
            </div>
            <div class="question"><span class="question-number">Q24.</span> (a) "Proteins control the expression of various characters." Explain this statement by taking an example of "tallness" as a characteristic in plants.<br>
                <strong>OR</strong><br>
                (b) Explain the mechanism of inheritance used by sexually reproducing organisms to ensure the stability of DNA of the species.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) DNA contains information for making proteins. A section of DNA (gene) for tallness codes for an enzyme/protein that triggers growth hormone production. Efficient enzyme/protein = More Hormone = Tall Plant. Inefficient/Less protein = Short Plant. Thus, proteins control phenotype.<br>
                    (b) <strong>Mechanism:</strong> Meiosis (Gamete formation) reduces the chromosome number by half (n). Fertilization (Fusion of gametes) restores the original chromosome number (2n). This cycle ensures DNA stability across generations.
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q30</span>
            </div>
            <div class="question"><span class="question-number">Q30.</span> (a) "In human beings the genes inherited from the parents decide whether the newborn individual is male or female." Explain this statement with the help of a flow diagram.<br>
                (b) "Some animals rely on environmental cues for sex determination." Justify this statement giving an example.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Male (XY) produces two types of sperms (X and Y). Female (XX) produces one type of egg (X).<br>
                    - If X-sperm fertilizes egg -> XX (Female).<br>
                    - If Y-sperm fertilizes egg -> XY (Male).<br>
                    Thus, father's sperm determines sex.<br>
                    <div class="image-placeholder">Flow Diagram Expected</div><br>
                    (b) <strong>Example:</strong> In some reptiles like turtles/crocodiles, incubation temperature determines sex (High temp -> Female, Low temp -> Male, varies by species). Snails can change sex.
                </div>
            </div>
        </div>`,

    // 09 Light - Q22, Q29
    "09LightReflectionandRefraction": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q22</span>
            </div>
            <div class="question"><span class="question-number">Q22.</span> Study the figure in which the path of a ray of light going from Medium 1 to Medium 2 is shown.<br>
                <img src="2025-31-6-QuestionNumber22.png" alt="2025-31-6-QuestionNumber22" class="question-image placeholder"><br>
                (a) Out of the two Media - Medium 1 and Medium 2, in which is the speed of light more ?<br>
                (b) State reason of bending of the refracted ray away from the normal.<br>
                (c) Express refractive index of Medium 2 with respect to Medium 1 in terms of speed of light in two media.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Ray bends <strong>away</strong> from normal (Angle r > Angle i). This means light travels from Denser to Rarer. Speed is more in <strong>Medium 2</strong> (Rarer).<br>
                    (b) Change in speed of light. Speed increases in rarer medium causing it to bend away.<br>
                    (c) \\(n_{21} = \\frac{v_1}{v_2}\\) (Speed in Med 1 / Speed in Med 2).
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q29</span>
            </div>
            <div class="question"><span class="question-number">Q29.</span> A student placed a candle flame at different distances from a convex lens and focused its image on a screen. He recorded his observation in tabular form...<br>
                [Table Data: 1. u=-90 v=+18; 2. u=-60 v=+20; 3. u=-40 v=+24; 4. u=-30 v=+30; 5. u=-24 v=+40; 6. u=-20 v=+60; 7. u=-18 v=+90; 8. u=-12 v=+120]<br>
                (a) What is the focal length of the convex lens used ? Give reason.<br>
                (b) Which one of the sets of observations is <strong>not</strong> correct and why ?<br>
                (c) Draw ray diagram to show image formation for any correct set of observation.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) From Obs 4: \\(|u| = 30, |v| = 30\\). Since \\(u=v=2f\\), \\(2f = 30\\), so <strong>\\(f = 15\\text{ cm}\\)</strong>.<br>
                    (b) <strong>Observation 8</strong> (u=-12, v=+120).<br>
                    Reason: For \\(u = 12\\) cm (which is < f=15 cm), image should be Virtual (same side, negative v). But v is +120 (Real). Hence incorrect.<br>
                    (c) <div class="image-placeholder">Ray Diagram for Convex Lens</div>
                </div>
            </div>
        </div>`,

    // 10 Human Eye - Q23, Q32
    "10TheHumanEyeandtheColourfulWorld": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q23</span>
            </div>
            <div class="question"><span class="question-number">Q23.</span> (a) Give reasons :<br>
                (i) The sky appears dark to passengers flying at very high altitude.<br>
                (ii) 'Danger' signal lights are red in colour.<br>
                <strong>OR</strong><br>
                (b) What is a rainbow ? "We see a rainbow in the sky only after the rainfall." Why ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) (i) No atmosphere/scattering at high altitudes.<br>
                    (ii) Red scatters the least by fog/smoke due to longer wavelength, visible from distance.<br>
                    (b) <strong>Rainbow:</strong> Natural spectrum caused by dispersion of sunlight by raindrops.<br>
                    <strong>Why:</strong> Raindrops act as tiny prisms. Sunlight enters, refracts, disperses, reflects internally, and refracts out. Needs sun behind and rain in front.
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q32</span>
            </div>
            <div class="question"><span class="question-number">Q32.</span> A person uses lenses of power \\(-0.5\\text{ D}\\) in his spectacles for the correction of his vision.<br>
                (a) Name the defect of vision the person is suffering from.<br>
                (b) List two causes of this defect.<br>
                (c) Determine the focal length of the lenses used in the spectacles.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Negative power indicates Concave Lens. Used for <strong>Myopia</strong> (Near-sightedness).<br>
                    (b) Causes: 1. Elongation of eyeball. 2. Excessive curvature of eye lens.<br>
                    (c) Focal length \\(f = \\frac{1}{P} = \\frac{1}{-0.5} = -2\\text{ m}\\) or <strong>\\(-200\\text{ cm}\\)</strong>.
                </div>
            </div>
        </div>`,

    // 11 Electricity - Q33, Q39
    "11Electricity": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/6 &middot; Q33</span>
            </div>
            <div class="question"><span class="question-number">Q33.</span> (a) Explain the statement "Potential difference between two points is 1 volt".<br>
                (b) What do the symbols given below represent in an electric circuit ? Write one function of each.<br>
                (i) A circle with A inside.<br>
                (ii) A zig-zag line with arrow.<br>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) 1 Volt is the potential difference when 1 Joule of work is done to move a charge of 1 Coulomb from one point to another.<br>
                    (b) (i) <strong>Ammeter:</strong> Measures current. (Connected in series).<br>
                    (ii) <strong>Variable Resistance (Rheostat):</strong> To regulate current without changing voltage source.
                </div>
            </div>
        </div>

        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/6 &middot; Q39</span>
            </div>
            <div class="question"><span class="question-number">Q39.</span> <strong>Case Study:</strong> Study the circuit shown in which two resistors X and Y of resistances 3 \\(\\Omega\\) and 6 \\(\\Omega\\) respectively are joined in series with a battery of 2 V.<br>
                <img src="2025-31-6-QuestionNumber39.png" alt="2025-31-6-QuestionNumber39" class="question-image placeholder"><br>
                (I) Draw a circuit diagram showing the above two resistors X and Y joined in parallel with same battery and same ammeter and voltmeter.<br>
                (II) In which combination of resistors will the (i) potential difference across X and Y and (ii) current through X and Y, be the same ?<br>
                (III) (a) Find the current drawn from the battery by the series combination of the two resistors (X and Y).<br>
                <strong>OR</strong><br>
                (III) (b) Determine the equivalent resistance of the parallel combination of the two resistors (X and Y).
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (I) <div class="image-placeholder">Parallel Circuit Diagram</div><br>
                    (II) (i) Potential difference is same in <strong>Parallel</strong>.<br>
                    (ii) Current is same in <strong>Series</strong>.<br>
                    (III) (a) Series: \\(R_s = 3 + 6 = 9 \\Omega\\). \\(V = 2 \text{V}\\).<br>
                    \\(I = V/R = 2/9 = 0.22\\text{ A}\\).<br>
                    (III) (b) Parallel: \\(\\frac{1}{R_p} = \frac{1}{3} + \frac{1}{6} = \frac{2+1}{6} = \frac{3}{6} = \frac{1}{2}\\).<br>
                    \\(R_p = 2 \\Omega\\).
                </div>
            </div>
        </div>`,

    // 12 Magnetic Effects - Q34
    "12MagneticEffectsofElectricCurrent": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/6 &middot; Q34</span>
            </div>
            <div class="question"><span class="question-number">Q34.</span> (a) What are magnetic field lines ? How is the direction of magnetic field at a point determined ? Draw the pattern of magnetic field lines of the magnetic field produced by a current carrying circular loop. Mark on it the direction of (i) current and (ii) magnetic field lines.<br>
                Name the two factors on which the magnitude of the magnetic field due to a current carrying coil depends.<br>
                <strong>OR</strong><br>
                (b) Why can't two magnetic field lines cross each other ? Draw magnetic field lines showing the direction of the magnetic field due to a current carrying long straight solenoid. State the conclusion which can be drawn from the pattern of magnetic field lines inside the solenoid.<br>
                Name any two factors on which the magnitude of the magnetic field due to this solenoid depends.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    (a) Lines representing the magnetic field. Direction determined by compass N-pole or Right Hand Thumb Rule derivative.<br>
                    <div class="image-placeholder">Circular Loop Diagram</div><br>
                    Factors: 1. Current (I). 2. Number of turns (n). 3. Radius (inversely).<br>
                    <hr>
                    (b) <strong>Intersection:</strong> If they cross, compass would point two directions at one point, which is impossible.<br>
                    <div class="image-placeholder">Solenoid Diagram</div><br>
                    <strong>Conclusion inside:</strong> Field lines are parallel straight lines, indicating uniform field.<br>
                    <strong>Factors:</strong> 1. Current (I). 2. Turn density (n). 3. Core material (Soft iron).
                </div>
            </div>
        </div>`,

    // 13 Environment - Q26
    "13OurEnvironment": `
        <!-- 31/6 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/6 &middot; Q26</span>
            </div>
            <div class="question"><span class="question-number">Q26.</span> Write the percentage of the energy of sunlight captured by green plants, to convert it into food energy. Explain the fate of this energy when green plants are eaten by primary consumers.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>Percentage:</strong> About <strong>1%</strong> of solar energy falling on leaves is captured.<br>
                    <strong>Fate:</strong> When eaten by primary consumers (herbivores), about 10% of this food energy is turned into their own body mass and available for next level. The rest (90%) is lost as heat/digestion/work. (10% Law).
                </div>
            </div>
        </div>`
};

function insertQuestions(filePath, questionsHtml) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Try inserting before 2024
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
            console.log(`Added 31/6 Batch 2 questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`No change for: ${path.basename(filePath)} (Could not find insertion point)`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

console.log("Adding 31/6 Questions Batch 2...");
Object.keys(questionsToAdd).forEach(folder => {
    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding 31/6 Batch 2.");
