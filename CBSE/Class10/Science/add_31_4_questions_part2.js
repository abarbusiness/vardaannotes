
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Define the questions to add, grouped by chapter folder name
const questionsToAdd = {
    // 1. Chemical Reactions
    "01ChemicalReactionsandEquations": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q21</span>
            </div>
            <div class="question"><span class="question-number">Q21.</span> Name the compound used in black and white photography. State whether the reaction that occurs is exothermic or endothermic. Give justification for your answer.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Compound:</strong> Silver Bromide (\(\text{AgBr}\)) or Silver Chloride (\(\text{AgCl}\)).<br>
                    <strong>Type:</strong> Endothermic.<br>
                    <strong>Justification:</strong> The decomposition of AgBr/AgCl requires absorption of energy (light) to break down into silver and halogen gas (\(2\text{AgBr} \xrightarrow{\text{Sunlight}} 2\text{Ag} + \text{Br}_2\)).
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q30</span>
            </div>
            <div class="question"><span class="question-number">Q30.</span> (A) Why do we balance a chemical equation? Name and state the law that suggests the balancing of a chemical equation? Balance the following chemical equation :<br>
                \(\text{Zn} + \text{H}_3\text{PO}_4 \rightarrow \text{Zn}_3(\text{PO}_4)_2 + \text{H}_2\)
                <div class="or-divider">OR</div>
                (B) Define a precipitation reaction. Give its example and also express the reaction that occurs in the form of a balanced chemical equation.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    <strong>Why:</strong> To satisfy the Law of Conservation of Mass.<br>
                    <strong>Law:</strong> Mass can neither be created nor destroyed in a chemical reaction. Total mass of reactants = Total mass of products.<br>
                    <strong>Balanced Equation:</strong><br>
                    \(3\text{Zn} + 2\text{H}_3\text{PO}_4 \rightarrow \text{Zn}_3(\text{PO}_4)_2 + 3\text{H}_2\)<br><br>
                    <strong>(B):</strong><br>
                    <strong>Definition:</strong> A reaction in which an insoluble substance (precipitate) is formed is called a precipitation reaction.<br>
                    <strong>Example:</strong> Reaction between Sodium Sulphate and Barium Chloride.<br>
                    <strong>Equation:</strong><br>
                    \(\text{Na}_2\text{SO}_4(aq) + \text{BaCl}_2(aq) \rightarrow \text{BaSO}_4(s) (\text{White ppt}) + 2\text{NaCl}(aq)\)
                </div>
            </div>
        </div>
        
        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/4 &middot; Q38</span>
            </div>
            <div class="question"><span class="question-number">Q38.</span> Common salt is a very important chemical compound for our daily life. It's chemical name is sodium chloride and it is used as a raw material in the manufacture of caustic soda, washing soda, baking soda etc. It is also used in the preservation of pickles, butter, meat etc.<br><br>
                (i) Name the acid and the base from which common salt can be obtained.<br>
                (ii) State the nature (acidic/basic/neutral) of sodium chloride. Give reason for the justification for your answer.<br>
                (iii) (A) What happens when electric current is passed through an aqueous solution of sodium chloride (called brine)? Name the products obtained along with the corresponding places in the electrolytic cell where each of these products is obtained.<br>
                <strong>OR</strong><br>
                (iii) (B) How is washing soda obtained from sodium chloride? Give chemical equation of the reactions involved in the process.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i):</strong> Acid: Hydrochloric Acid (\(\text{HCl}\)). Base: Sodium Hydroxide (\(\text{NaOH}\)).<br>
                    <strong>(ii):</strong> Neutral. Because it is a salt of a strong acid and a strong base.<br>
                    <strong>(iii) (A):</strong> <strong>Chlor-Alkali Process:</strong><br>
                    When electricity is passed through brine, it decomposes to form Sodium Hydroxide.<br>
                    \(2\text{NaCl}(aq) + 2\text{H}_2\text{O}(l) \rightarrow 2\text{NaOH}(aq) + \text{Cl}_2(g) + \text{H}_2(g)\)<br>
                    <strong>Products:</strong><br>
                    1. Chlorine gas (\(\text{Cl}_2\)) at Anode.<br>
                    2. Hydrogen gas (\(\text{H}_2\)) at Cathode.<br>
                    3. Sodium Hydroxide (\(\text{NaOH}\)) near Cathode.<br><br>
                    <strong>(iii) (B):</strong> <strong>Solvay Process / Preparation:</strong><br>
                    1. \(\text{NaCl} + \text{H}_2\text{O} + \text{CO}_2 + \text{NH}_3 \rightarrow \text{NH}_4\text{Cl} + \text{NaHCO}_3\) (Sodium Hydrogen Carbonate).<br>
                    2. Heat \(\text{NaHCO}_3\): \(2\text{NaHCO}_3 \xrightarrow{\Delta} \text{Na}_2\text{CO}_3 + \text{H}_2\text{O} + \text{CO}_2\).<br>
                    3. Recrystallization: \(\text{Na}_2\text{CO}_3 + 10\text{H}_2\text{O} \rightarrow \text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}\) (Washing Soda).
                </div>
            </div>
        </div>`,

    // 2. Metals and Non-Metals
    "03MetalsAndNonMetals": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q22</span>
            </div>
            <div class="question"><span class="question-number">Q22.</span> (A) Show the formation of calcium chloride by the transfer of electrons from one element to the other. Atomic Number of calcium and chlorine is 20 and 17 respectively.
                <div class="or-divider">OR</div>
                (B) "Aluminium oxide is an amphoteric oxide." Justify this statement giving chemical equation for the reactions involved.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    Ca (20): 2, 8, 8, 2. Loses 2e<sup>-</sup> \(\rightarrow \text{Ca}^{2+}\).<br>
                    Cl (17): 2, 8, 7. Gains 1e<sup>-</sup> \(\rightarrow \text{Cl}^{-}\).<br>
                    Electron Dot Structure: [Ca] loses 2 electrons, one to each [Cl].<br>
                    \(\text{Ca} \xrightarrow{-2e^-} \text{Ca}^{2+}\) ; \(2\text{Cl} \xrightarrow{+2e^-} 2\text{Cl}^-\)<br>
                    Formula: \(\text{CaCl}_2\).<br><br>
                    <strong>(B):</strong><br>
                    Amphoteric oxides react with both acids and bases to form salt and water.<br>
                    1. With Acid: \(\text{Al}_2\text{O}_3 + 6\text{HCl} \rightarrow 2\text{AlCl}_3 + 3\text{H}_2\text{O}\)<br>
                    2. With Base: \(\text{Al}_2\text{O}_3 + 2\text{NaOH} \rightarrow 2\text{NaAlO}_2 \text{ (Sodium Aluminate)} + \text{H}_2\text{O}\)
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q28</span>
            </div>
            <div class="question"><span class="question-number">Q28.</span> Name and describe the most widely used method for refining impure metals ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Electrolytic Refining:</strong><br>
                    This is the most widely used method (e.g., for Copper, Zinc, Tin, Silver, Gold).<br>
                    <strong>Process:</strong><br>
                    1. <strong>Anode:</strong> A block of impure metal is made the anode.<br>
                    2. <strong>Cathode:</strong> A thin strip of pure metal is made the cathode.<br>
                    3. <strong>Electrolyte:</strong> A solution of the metal salt (e.g., acidified \(\text{CuSO}_4\) for Cu).<br>
                    On passing current, pure metal from anode dissolves into electrolyte and deposits on cathode. Soluble impurities go into solution; insoluble impurities settle as 'anode mud'.
                </div>
            </div>
        </div>`,

    // 3. Life Processes
    "05LifeProcesses": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q23</span>
            </div>
            <div class="question"><span class="question-number">Q23.</span> Name the tissues which form the vascular bundle. State their function in plants.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Tissues:</strong> Xylem and Phloem.<br>
                    <strong>Functions:</strong><br>
                    1. <strong>Xylem:</strong> Transports water and minerals from roots to other parts of the plant.<br>
                    2. <strong>Phloem:</strong> Transports food (photosynthates) from leaves to other parts (translocation).
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q29</span>
            </div>
            <div class="question"><span class="question-number">Q29.</span> What is the first step of cellular respiration? In which part of the cell does it occur ? Write the equation for the process of breakdown of glucose in a human cell :<br>
                (i) in the presence of oxygen<br>
                (ii) due to lack of oxygen
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>First Step:</strong> Glycolysis (Breakdown of Glucose into Pyruvate).<br>
                    <strong>Location:</strong> Cytoplasm.<br>
                    <strong>Equations:</strong><br>
                    (i) <strong>Presence of Oxygen (Aerobic):</strong><br>
                    \(\text{Glucose} \xrightarrow{\text{Cytoplasm}} \text{Pyruvate} \xrightarrow{\text{Mitochondria}} \text{CO}_2 + \text{H}_2\text{O} + \text{Energy}\)<br>
                    (ii) <strong>Lack of Oxygen (in Muscles):</strong><br>
                    \(\text{Glucose} \xrightarrow{\text{Cytoplasm}} \text{Pyruvate} \xrightarrow{\text{Muscle Cells}} \text{Lactic Acid} + \text{Energy}\)
                </div>
            </div>
        </div>`,

    // 4. Human Eye
    "10TheHumanEyeandtheColourfulWorld": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q24</span>
            </div>
            <div class="question"><span class="question-number">Q24.</span> (A) Draw a ray diagram to show the refraction of a ray of light passing through an equilateral glass prism. Mark the angle through which the emergent ray bends from the direction of the incident ray and also name it.
                <div class="or-divider">OR</div>
                (B) Name the type of lenses required by the persons for the correction of their defect of vision called presbyopia. Write the structure of the lenses commonly used for the correction of this defect giving reason for such designs.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    [Diagram Required: Refraction through Prism showing \(\angle i, \angle e, \angle D\) (Angle of Deviation)].<br>
                    <strong>Angle to mark:</strong> Angle of Deviation (\(\delta\) or \(D\)). It is the angle between the direction of the incident ray and the emergent ray.<br><br>
                    <strong>(B):</strong><br>
                    <strong>Lens:</strong> Bifocal Lens (containing both concave and convex).<br>
                    <strong>Structure:</strong> Upper part is concave (for distance vision), lower part is convex (for reading/near vision).<br>
                    <strong>Reason:</strong> Presbyopic persons suffer from both myopia (or lack of accommodation for distance) and hypermetropia (lack of accommodation for near objects) due to aging/weakening ciliary muscles.
                </div>
            </div>
        </div>
        
        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/4 &middot; Q37</span>
            </div>
            <div class="question"><span class="question-number">Q37.</span> The students in a class took a thick sheet of cardboard and made a small hole in its centre. Sunlight was allowed to fall on this small hole and they obtained a narrow beam of white light. A glass prism was taken and this white light was allowed to fall on one of its faces. The prism was turned slowly until the light that comes out of the opposite face of the prism appeared on the nearby screen. They studied this beautiful band of light and concluded that it is a spectrum of white light.<br><br>
                (i) Give any one more instance in which this type of spectrum is observed.<br>
                (ii) What happens to white light in the above case?<br>
                (iii) (A) List two conditions necessary to observe a rainbow.<br>
                <strong>OR</strong><br>
                (iii) (B) Draw a ray diagram to show the formation of a rainbow. Mark on it, points (a), (b) and (c) as given below :<br>
                (a) Where dispersion of light occurs.<br>
                (b) Where light gets reflected internally.<br>
                (c) Where final refraction occurs.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i):</strong> Rainbow formation in the sky.<br>
                    <strong>(ii):</strong> White light splits into its constituent seven colours (Dispersion).<br>
                    <strong>(iii) (A):</strong><br>
                    1. Presence of water droplets (rain) in the atmosphere.<br>
                    2. Sun must be behind the observer.<br>
                    <strong>(iii) (B):</strong><br>
                    [Diagram Required: Rainbow formation in water droplet].<br>
                    (a) Refraction and Dispersion at the first surface (entry).<br>
                    (b) Total Internal Reflection at the back surface.<br>
                    (c) Refraction at the exit surface.
                </div>
            </div>
        </div>`,

    // 5. Heredity
    "08HeredityandEvolution": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q25</span>
            </div>
            <div class="question"><span class="question-number">Q25.</span> Explain with the help of a flow chart that in human beings father is responsible for the sex (male or female) of the child.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Sex Determination Flow Chart:</strong><br>
                    Father (XY) \(\times\) Mother (XX)<br>
                    Gametes: X, Y (from Father) ; X, X (from Mother)<br>
                    Offspring possibilities:<br>
                    1. X (Sperm) + X (Egg) \(\rightarrow\) XX (Girl)<br>
                    2. Y (Sperm) + X (Egg) \(\rightarrow\) XY (Boy)<br>
                    <strong>Explanation:</strong> Sex depends on whether the egg is fertilized by an X-bearing sperm or a Y-bearing sperm. Since father produces two types of gametes (heterogametic), he determines the sex.
                </div>
            </div>
        </div>`,

    // 6. Magnetic Effects
    "12MagneticEffectsofElectricCurrent": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/4 &middot; Q26</span>
            </div>
            <div class="question"><span class="question-number">Q26.</span> Draw the pattern of magnetic field lines due to a current carrying straight conductor. Mark on it the direction of current in the conductor and the direction of the magnetic field developed. Name the rule that helps us to determine the direction of magnetic field lines in this case.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Pattern:</strong> Concentric circles centered around the wire.<br>
                    <strong>Rule:</strong> Right-Hand Thumb Rule.<br>
                    (If thumb points in direction of current, curled fingers show direction of magnetic field).
                </div>
            </div>
        </div>
        
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/4 &middot; Q34</span>
            </div>
            <div class="question"><span class="question-number">Q34.</span> (A) (i) Draw the pattern of the magnetic field lines for the two parallel straight conductors carrying current of same magnitude 'I' in opposite directions as shown. Show the direction of magnetic field at a point O which is equidistant from the two conductors. (Consider that the conductors are inserted normal to the plane of a rectangular cardboard.)<br>
                <img src="2025-31-4-QuestionNumber34A.png" alt="2025-31-4-QuestionNumber34A" class="question-image placeholder"><br>
                (ii) In our houses we receive A.C. electric power of 220 V. In electric iron or electric heater cables having three wires with insulation of three different colours - red, black and green are used to draw current from the mains.<br>
                (a) What are these three different wires called? Name them colourwise.<br>
                (b) What is the potential difference between the red wire and the black wire?<br>
                (c) What is the role of the wire with green insulation in case of accidental leakage of electric current to the metallic body of an electrical appliance?
                <div class="or-divider">OR</div>
                (B) (i) By using the given experimental set-up. How can it be shown that :<br>
                <img src="2025-31-4-QuestionNumber34B.png" alt="2025-31-4-QuestionNumber34B" class="question-image placeholder"><br>
                (a) a force is exerted on the current-carrying conductor AB when it is placed in a magnetic field.<br>
                (b) the direction of force can be reversed in two ways.<br>
                (ii) When will the magnitude of the force be highest?<br>
                (iii) State Fleming\\u2019s left hand rule.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    (i) [Diagram: Magnetic field lines repel each other between conductors carrying opposite currents]. At O, fields add up/constructive interference (depends on direction relative to observer).<br>
                    (ii) (a) Red: Live Wire. Black: Neutral Wire. Green: Earth Wire.<br>
                    (b) 220 Volts.<br>
                    (c) The green (earth) wire provides a low resistance path to the ground, preventing electric shock by ensuring the metallic body stays at zero potential.<br><br>
                    <strong>(B):</strong><br>
                    (i) (a) When current is passed (key K closed), the rod AB gets displaced/moves.<br>
                    (b) Reverse direction of current OR Reverse direction of magnetic field (swap poles).<br>
                    (ii) When current is perpendicular to the magnetic field (\(90^\circ\)).<br>
                    (iii) <strong>Fleming's Left Hand Rule:</strong> Stretch thumb, forefinger, and middle finger of left hand mutually perpendicular. If Forefinger points to Magnetic Field, Middle finger to Current, then Thumb points to Force/Motion.
                </div>
            </div>
        </div>`,

    // 7. Light (Refraction/Reflection)
    "09LightReflectionandRefraction": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q27</span>
            </div>
            <div class="question"><span class="question-number">Q27.</span> If we want to obtain a virtual and magnified image of an object by using a concave mirror of focal length 18 cm, where should the object be placed? Use mirror formula to determine the object distance for an image of magnification +2 produced by this mirror to justify your answer.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Placement:</strong> Between Pole (P) and Focus (F). i.e., distance < 18 cm.<br>
                    <strong>Calculation:</strong><br>
                    \(m = -\frac{v}{u} = +2 \Rightarrow v = -2u\).<br>
                    Mirror Formula: \(\frac{1}{v} + \frac{1}{u} = \frac{1}{f}\)<br>
                    Substitute \(v = -2u\): \(\frac{1}{-2u} + \frac{1}{u} = \frac{-1 + 2}{2u} = \frac{1}{2u}\).<br>
                    So, \(\frac{1}{2u} = \frac{1}{-18}\) (Concave f is negative).<br>
                    \(2u = -18 \Rightarrow u = -9 \text{ cm}\).<br>
                    Object is placed at 9 cm from the mirror (which is < 18 cm).
                </div>
            </div>
        </div>`,

    // 8. Our Environment
    "13OurEnvironment": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q31</span>
            </div>
            <div class="question"><span class="question-number">Q31.</span> What are decomposers? Give two examples. State how they maintain a balance in an ecosystem.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Decomposers:</strong> Organisms that break down complex organic matter (dead plants/animals) into simple inorganic substances.<br>
                    <strong>Examples:</strong> Bacteria, Fungi.<br>
                    <strong>Role in Balance:</strong><br>
                    1. They recycle nutrients (N, P, K) back into the soil for plants to reuse.<br>
                    2. They clean the environment by removing dead decaying matter.
                </div>
            </div>
        </div>`,

    // 9. Electricity
    "11Electricity": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q32</span>
            </div>
            <div class="question"><span class="question-number">Q32.</span> Define the term "potential difference" between two points in an electric circuit carrying current. Name and define its S.I. unit. Also express it in terms of S.I. unit of work and charge.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Potential Difference (V):</strong> Work done to move a unit charge from one point to another in current carrying circuit.<br>
                    <strong>SI Unit:</strong> Volt (V).<br>
                    <strong>Definition of 1 Volt:</strong> When 1 Joule of work is done to move a charge of 1 Coulomb from one point to another, the PD is 1 Volt.<br>
                    <strong>Expression:</strong> \( V (\text{volt}) = \frac{W (\text{Joule})}{Q (\text{Coulomb})} \) or \( 1 \text{ V} = 1 \text{ J C}^{-1} \).
                </div>
            </div>
        </div>`,

    // 10. Control and Coordination
    "06ControlAndCoordination": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/4 &middot; Q33</span>
            </div>
            <div class="question"><span class="question-number">Q33.</span> State two limitations of electrical impulses in multicellular organisms. Why is chemical communication better than electrical impulses as a means of communication between cells in multicellular organisms?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Limitations:</strong><br>
                    1. They reach only those cells connected by nervous tissue (not all cells).<br>
                    2. Once generated, a cell needs time to reset before generating another impulse (cannot be continuous).<br>
                    <strong>Chemical Communication Advantage:</strong><br>
                    Hormones (chemical messengers) can diffuse to all cells of the body and allow for steady, persistent changes rather than short pulses.
                </div>
            </div>
        </div>
        
        <div class="card" data-marks="4">
            <div class="card-top">
                <span class="badge badge-4">4 Marks</span>
                <span class="card-meta">31/4 &middot; Q39</span>
            </div>
            <div class="question"><span class="question-number">Q39.</span> In life there are certain changes in the environment called 'stimuli' to which we respond appropriately. Touching a flame suddenly is a dangerous situation for us. One way is to think consciously about the possibility of burning and then moving the hand. But our body has been designed in such a way that we save ourself from such situations immediately.<br><br>
                (i) Name the action by which we protect ourself in the situation mentioned above and define it.<br>
                (ii) Write the role of (a) motor and (b) relay neuron.<br>
                (iii) (A) What are the two types of nervous system in human body? Name the components of each of them.<br>
                <strong>OR</strong><br>
                (iii) (B) Which part of the human brain is responsible for :<br>
                (a) thinking<br>
                (b) picking up a pencil<br>
                (c) controlling blood pressure<br>
                (d) controlling hunger
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i):</strong> <strong>Reflex Action.</strong> It is a sudden, involuntary, and automatic response to a stimulus.<br>
                    <strong>(ii):</strong> (a) <strong>Motor Neuron:</strong> Carries impulse from spinal cord to effector (muscle). (b) <strong>Relay Neuron:</strong> Connects sensory and motor neurons within the spinal cord.<br>
                    <strong>(iii) (A):</strong><br>
                    1. <strong>Central Nervous System (CNS):</strong> Brain and Spinal Cord.<br>
                    2. <strong>Peripheral Nervous System (PNS):</strong> Cranial nerves and Spinal nerves.<br>
                    <strong>(iii) (B):</strong><br>
                    (a) Thinking: Forebrain (Cerebrum).<br>
                    (b) Picking pencil: Cerebellum (Hindbrain).<br>
                    (c) Blood pressure: Medulla (Hindbrain).<br>
                    (d) Hunger: Forebrain (Hypothalamus/Cerebrum).
                </div>
            </div>
        </div>`,

    // 11. Reproduction
    "07HowDoOrganismsReproduce": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/4 &middot; Q35</span>
            </div>
            <div class="question"><span class="question-number">Q35.</span> (A) Name the parts marked as 'A' and 'B' in the given diagram. Write in detail the changes that take place in a flower when the product of 'B' reaches 'A' till a fruit is formed.<br>
                <img src="2025-31-4-QuestionNumber35A.png" alt="2025-31-4-QuestionNumber35A" class="question-image placeholder"><br>
                <div class="or-divider">OR</div>
                (B) In human female reproductive system state the changes that take place once fertilisation has taken place. Write the role of placenta in this process. What happens when the egg is not fertilised ?
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    <strong>Labels:</strong> A = Stigma, B = Anther (or Pollen Grain if pointing to grain). Moves from Anther to Stigma.<br>
                    <strong>Changes:</strong><br>
                    1. <strong>Pollination:</strong> Pollen lands on Stigma.<br>
                    2. <strong>Germination:</strong> Pollen tube grows through style.<br>
                    3. <strong>Fertilization:</strong> Male gamete fuses with egg in ovule.<br>
                    4. <strong>Post-Fertilization:</strong> Zygote \(\rightarrow\) Embryo. Ovule \(\rightarrow\) Seed. Ovary \(\rightarrow\) Fruit. Petals fall off.<br><br>
                    <strong>(B):</strong><br>
                    <strong>Role of Placenta:</strong> Disc-like tissue for exchange of nutrients (glucose, oxygen) and waste between mother and embryo.<br>
                    <strong>If Not Fertilized:</strong> Uterine lining (endometrium) breaks down and is released as blood and mucus (Menstruation).
                </div>
            </div>
        </div>`,

    // 12. Carbon
    "04CarbonAndItsCompounds": `
        <!-- 31/4 Series -->
        <div class="card" data-marks="5">
            <div class="card-top">
                <span class="badge badge-5">5 Marks</span>
                <span class="card-meta">31/4 &middot; Q36</span>
            </div>
            <div class="question"><span class="question-number">Q36.</span> (A) A carbon compound 'A' on heating with excess conc. \(\text{H}_2\text{SO}_4\) forms a compound 'B', which on addition of one mole of hydrogen gas in the presence of nickel catalyst forms a compound 'C'. 'C' on combustion in air forms 2 moles of carbon dioxide and 3 moles of water. Identify 'A', 'B' and 'C' and write their structures. Give chemical equations of the reactions involved. Also state the role of concentrated sulphuric acid in the formation of 'B' from 'A'.
                <div class="or-divider">OR</div>
                (B) A carbon compound 'A' is widely used as a preservative in pickles and has a molecular formula \(\text{C}_2\text{H}_4\text{O}_2\). This compound reacts with ethanol to form a sweet smelling compound 'B'.<br>
                (i) Identify the compound 'A' and write its structure.<br>
                (ii) Write the chemical equation for the reaction of 'A' with ethanol to form compound 'B'. State the role of presence of an acid in the reaction.<br>
                (iii) How can we get compound 'A' back from 'B' ?<br>
                (iv) How can 'A' be obtained from ethanol ?<br>
                (v) Name the gas produced when compound 'A' reacts with washing soda.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong><br>
                    A = Ethanol (\(\text{C}_2\text{H}_5\text{OH}\)).<br>
                    B = Ethene (\(\text{CH}_2=\text{CH}_2\)) (Dehydration).<br>
                    C = Ethane (\(\text{C}_2\text{H}_6\)) (Hydrogenation).<br>
                    <strong>Combustion of C:</strong> \(\text{C}_2\text{H}_6 + 3.5\text{O}_2 \rightarrow 2\text{CO}_2 + 3\text{H}_2\text{O}\). Matches.<br>
                    <strong>Structure A:</strong> \(\text{CH}_3-\text{CH}_2-\text{OH}\).<br>
                    <strong>Role of Conc. \(\text{H}_2\text{SO}_4\):</strong> Dehydrating agent.<br><br>
                    <strong>(B):</strong><br>
                    (i) A = Ethanoic Acid (Acetic Acid). Structure: \(\text{CH}_3\text{COOH}\).<br>
                    (ii) Esterification: \(\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{Acid}} \text{CH}_3\text{COOC}_2\text{H}_5\) (Ethyl Ethanoate) + \(\text{H}_2\text{O}\). Role of acid: Catalyst/Dehydrating.<br>
                    (iii) Saponification (with NaOH) or Acid Hydrolysis.<br>
                    (iv) Oxidation of Ethanol (Alkaline KMnO4).<br>
                    (v) Carbon Dioxide (\(\text{CO}_2\)).
                </div>
            </div>
        </div>`
};

function insertQuestions(filePath, questionsHtml) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Insertion Logic: Try to find Last inserted 31/4 question to append?
        // OR find 31/3 end?
        // Note: Part 1 script inserted questions Q1-20.
        // If we run this, it should append AFTER Q1-20 if they exist.
        // We look for '31/4 &middot; Q' to find if any 31/4 exists.

        const last31_4 = content.lastIndexOf('31/4');
        let insertIndex = -1;

        if (last31_4 !== -1) {
            // Already has 31/4 questions. Find the end of the last one.
            // Find the </div> enclosing that card?
            // Actually, simply scanning for `</div>` after the last match is tricky if we don't know structure.

            // Safer: Find `<div id="y2024"` and insert before it.
            // BUT, we need to make sure we don't put it inside another card.
            // If we have previous 31/4 questions, we should insert after them.

            // Let's assume the previous script worked and inserted them at the end of y2025 content.
            // So we can again use the "Insert before y2024" strategy.
            // Because "Insert before y2024" basically means "Append to y2025".

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
        } else {
            // Treat as fresh 31/4 insertion (if Part 1 didn't have Qs for this chapter)
            // Same logic: Insert before y2024.
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
            console.log(`Added Part 2 questions to: ${path.basename(filePath)}`);
        } else {
            console.log(`No change (could not find insertion point) for: ${path.basename(filePath)}`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}: ${err}`);
    }
}

console.log("Adding 31/4 Questions Part 2...");
Object.keys(questionsToAdd).forEach(folder => {
    const possiblePath = path.join(baseDir, folder, 'PYQ.html');
    if (fs.existsSync(possiblePath)) {
        insertQuestions(possiblePath, questionsToAdd[folder]);
    } else {
        console.error(`Folder not found: ${folder}`);
    }
});
console.log("Finished adding part 2.");
