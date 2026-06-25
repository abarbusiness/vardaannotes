$sourceFile = "ChapterNotes.html"
$content = Get-Content $sourceFile -Raw -Encoding UTF8
$cssBlock = [regex]::Match($content, '(?s)<style>.*?</style>').Value

$newContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 12: Organic Chemistry - Vardaan Master Notes</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>MathJax = { tex: { inlineMath: [['$', '$']] }, chtml: { scale: 1.05 } };</script>
    <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    $cssBlock
</head>
<body>
    <div class="watermark-overlay"><img
            src="https://res.cloudinary.com/dxwszplz7/image/upload/v1765105606/VARDAAN_watermark_jxdqqb.jpg"
            class="watermark-image"></div>
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle Theme">
        <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    </button>

    <div class="paper-sheet">
        <h1>Organic Chemistry</h1>
        <p style="text-align:center;color:#555;margin-bottom:2rem">ICSE Class 10 Chemistry • Chapter 12</p>

        <h2>1. Introduction to Organic Compounds</h2>
        <p>The word <strong>'organic'</strong> means pertaining to life. Initially, it was believed that organic compounds were products of a <em>"vital force"</em> of nature. This <strong>Vital Force Theory</strong> was discarded in 1828 when Friedrich Wohler synthesized an organic compound, <strong>Urea</strong> (CO(NH₂)₂), from an inorganic compound, Ammonium cyanate (NH₄CNO), in the laboratory.</p>
        <p>Today, Organic Chemistry is defined as the <strong>study of carbon compounds</strong> (excluding oxides of carbon, metallic carbonates, and related compounds like metal cyanides and carbides).</p>
        
        <h3>Comparison between Organic and Inorganic Compounds</h3>
        <table>
            <tr>
                <th>Characteristics</th>
                <th>Organic Compounds</th>
                <th>Inorganic Compounds</th>
            </tr>
            <tr>
                <td><strong>Presence of Carbon</strong></td>
                <td>Carbon is a necessary element.</td>
                <td>Carbon is not essential.</td>
            </tr>
            <tr>
                <td><strong>Solubility in Water</strong></td>
                <td>Generally insoluble in water.</td>
                <td>Generally dissolve in water.</td>
            </tr>
            <tr>
                <td><strong>Solubility in Organic Solvents</strong></td>
                <td>Dissolve in organic solvents (alcohol, benzene).</td>
                <td>Do not dissolve in organic solvents.</td>
            </tr>
            <tr>
                <td><strong>Melting & Boiling Point</strong></td>
                <td>Have low m.p. and b.p.; easily decompose.</td>
                <td>Have high m.p. and b.p.; do not easily decompose.</td>
            </tr>
            <tr>
                <td><strong>Combustibility</strong></td>
                <td>Inflammable (catch fire easily).</td>
                <td>Do not burn easily.</td>
            </tr>
            <tr>
                <td><strong>Bonding & Conductivity</strong></td>
                <td>Form <strong>covalent bonds</strong>. Non-electrolytes.</td>
                <td>Mostly form <strong>ionic bonds</strong>. Good electrolytes.</td>
            </tr>
            <tr>
                <td><strong>Isomerism</strong></td>
                <td>Show the phenomenon of isomerism.</td>
                <td>No such phenomenon.</td>
            </tr>
        </table>

        <h2>2. Unique Nature of Carbon Atoms</h2>
        <div class="definition-box">
            <p><strong>Tetravalency:</strong> Carbon has four valence electrons (At. No. 6, Config 2, 4). It forms four covalent bonds by sharing its electrons. This is called tetravalency.</p>
            <p><strong>Catenation:</strong> The unique property of self-linking of carbon atoms through covalent bonds to form straight chains, branched chains, and cyclic chains of different sizes.</p>
        </div>
        <p>Because of tetravalency and catenation, more than 5 million organic compounds are known today.</p>

        <h3>Types of Chains</h3>
        <ul>
            <li><strong>Straight Chain:</strong> Carbon atoms are connected in a continuous single line (e.g., n-butane).</li>
            <li><strong>Branched Chain:</strong> Carbon atoms have side branches (e.g., iso-butane).</li>
            <li><strong>Cyclic (Closed) Chain:</strong> Carbon atoms form a closed ring (e.g., Cyclopropane, Benzene).</li>
        </ul>

        <h2>3. Types of Organic Compounds</h2>
        <div class="rule-box">
            <p><strong>Hydrocarbons:</strong> Compounds made up entirely of carbon and hydrogen atoms only.</p>
        </div>
        <table>
            <tr>
                <th>Saturated Hydrocarbons</th>
                <th>Unsaturated Hydrocarbons</th>
            </tr>
            <tr>
                <td>All four valencies of carbon are satisfied by <strong>single covalent bonds</strong>.</td>
                <td>Valencies of at least two carbon atoms are satisfied by a <strong>double or triple covalent bond</strong>.</td>
            </tr>
            <tr>
                <td>Less reactive (due to non-availability of electrons). Undergo <strong>substitution reactions</strong>.</td>
                <td>More reactive (due to presence of electrons in double/triple bond). Undergo <strong>addition reactions</strong>.</td>
            </tr>
            <tr>
                <td>Example: Alkanes (\(C_nH_{2n+2}\))</td>
                <td>Examples: Alkenes (\(C_nH_{2n}\)), Alkynes (\(C_nH_{2n-2}\))</td>
            </tr>
        </table>

        <h2>4. Functional Groups & Alkyl Groups</h2>
        <p><strong>Alkyl Group:</strong> Obtained by removing one atom of hydrogen from an alkane molecule. General formula: \(C_n H_{2n+1}\). Example: Methyl (\(-CH_3\)), Ethyl (\(-C_2H_5\)).</p>
        
        <div class="definition-box">
            <p><strong>Functional Group:</strong> An atom or a group of atoms that defines the structure (and chemical properties) of a particular family of organic compounds.</p>
        </div>
        <table>
            <tr>
                <th>Functional Group</th>
                <th>General Formula</th>
                <th>Type of Compound</th>
                <th>Suffix</th>
            </tr>
            <tr><td>Hydroxyl (\(-OH\))</td><td>\(R-OH\)</td><td>Alcohols</td><td>-ol</td></tr>
            <tr><td>Aldehyde (\(-CHO\))</td><td>\(R-CHO\)</td><td>Aldehydes</td><td>-al</td></tr>
            <tr><td>Carboxyl (\(-COOH\))</td><td>\(R-COOH\)</td><td>Carboxylic acids</td><td>-oic acid</td></tr>
            <tr><td>Halide (\(-X\))</td><td>\(R-X\)</td><td>Haloalkanes</td><td>-ane (Prefix: chloro/bromo)</td></tr>
        </table>

        <h2>5. Isomerism</h2>
        <div class="analysis-box">
            <p><strong>Isomers:</strong> Compounds having the same molecular formula but different structural formulas. This phenomenon is known as Isomerism.</p>
            <p>Isomers differ in physical properties or chemical properties or both. It is caused by difference in the mode of linking of atoms.</p>
        </div>
        
        <h3>Types of Structural Isomerism</h3>
        <ul>
            <li><strong>Chain Isomerism:</strong> Differ in the arrangement of carbon atoms in straight or branched chains.
                <br><em>Example (Isomers of Butane \(C_4H_{10}\)):</em> n-butane (straight chain) and isobutane (2-methylpropane, branched chain).
                <br><em>Example (Isomers of Pentane \(C_5H_{12}\)):</em> n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane).
            </li>
            <li><strong>Position Isomerism:</strong> Differ in the position of the substituent atom or functional group (or double/triple bond).
                <br><em>Example:</em> But-1-ene and But-2-ene.
            </li>
            <li><strong>Functional Isomerism:</strong> Differ in the functional group. Example: Ethanol (\(CH_3CH_2OH\)) and Dimethyl ether (\(CH_3OCH_3\)).</li>
        </ul>

        <h2>6. Homologous Series</h2>
        <p>A homologous series is a group of organic compounds having a similar structure and similar chemical properties in which the successive compounds differ by a \(CH_2\) group (and a molecular mass of 14 a.m.u).</p>
        <div class="master-tip">
            <p><strong>Characteristics:</strong> All members share a general formula. They show similar chemical properties. Their physical properties (like melting and boiling point) show a gradual gradation (increase) as the molecular mass increases.</p>
        </div>

        <h2>7. IUPAC Nomenclature</h2>
        <p>Naming organic compounds relies on three parts: <strong>Prefix + Root Word + Suffix</strong>.</p>
        <ul>
            <li><strong>Root Word:</strong> Indicates the number of carbon atoms in the longest chain (Meth = 1, Eth = 2, Prop = 3, But = 4, Pent = 5, Hex = 6).</li>
            <li><strong>Suffix:</strong> Indicates the type of bond (-ane for single, -ene for double, -yne for triple) or the functional group (-ol, -al, -oic acid).</li>
            <li><strong>Prefix:</strong> Indicates substituents (methyl, chloro, bromo) attached to the main chain.</li>
        </ul>
        <div class="rule-box">
            <p><strong>Key Rules:</strong></p>
            <ol>
                <li>Select the longest continuous carbon chain.</li>
                <li>Number the carbon atoms starting from the end closest to the functional group, double/triple bond, or substituent (to give them the lowest possible number).</li>
                <li>Write prefixes alphabetically (e.g., bromo comes before chloro). Use di, tri, tetra for multiple identical groups.</li>
            </ol>
        </div>

        <h2>8. Alkanes (\(C_nH_{2n+2}\))</h2>
        <p>Alkanes are saturated hydrocarbons containing only single covalent bonds. Also known as <strong>paraffins</strong> (little affinity) because they are relatively unreactive.</p>
        
        <h3>Methane (\(CH_4\)) and Ethane (\(C_2H_6\))</h3>
        <p><strong>Occurrence:</strong> Methane is marsh gas. It is also a primary constituent of natural gas. It is a potent <strong>Green House Gas</strong>.</p>
        
        <div class="derivation-box">
            <p><strong>Laboratory Preparation of Methane:</strong></p>
            <p><em>Reactants:</em> Sodium ethanoate (sodium acetate) and soda lime (mixture of NaOH and CaO).</p>
            <p><em>Reaction:</em> \(CH_3COONa + NaOH \xrightarrow{CaO, \ 300^\circ C} Na_2CO_3 + CH_4\uparrow\)</p>
            <p><em>Collection:</em> Downward displacement of water (slightly soluble in water, lighter than air).</p>
        </div>

        <div class="derivation-box">
            <p><strong>Laboratory Preparation of Ethane:</strong></p>
            <p><em>Reaction:</em> \(C_2H_5COONa + NaOH \xrightarrow{CaO, \ 300^\circ C} Na_2CO_3 + C_2H_6\uparrow\)</p>
        </div>

        <p><strong>Other Preparation Methods:</strong></p>
        <ul>
            <li><strong>Reduction of Alkyl Halides:</strong> \(CH_3I + 2[H] \rightarrow CH_4 + HI\)</li>
            <li><strong>Wurtz Reaction (for Ethane):</strong> \(2CH_3I + 2Na \xrightarrow{\text{dry ether}} C_2H_6 + 2NaI\) (Not suitable for methane).</li>
        </ul>

        <h4>Chemical Properties of Alkanes</h4>
        <ul>
            <li><strong>Combustion:</strong> Burn in excess oxygen with a pale blue, non-sooty flame.
                <br>\(CH_4 + 2O_2 \rightarrow CO_2 + 2H_2O + \text{Heat}\)
            </li>
            <li><strong>Substitution Reaction (Halogenation):</strong> React with halogens in diffused sunlight.
                <br>\(CH_4 + Cl_2 \rightarrow CH_3Cl + HCl\) (Chloromethane)
                <br>\(CH_3Cl + Cl_2 \rightarrow CH_2Cl_2 + HCl\) (Dichloromethane)
                <br>\(CH_2Cl_2 + Cl_2 \rightarrow CHCl_3 + HCl\) (Trichloromethane/Chloroform)
                <br>\(CHCl_3 + Cl_2 \rightarrow CCl_4 + HCl\) (Carbon tetrachloride)
            </li>
            <li><strong>Catalytic Oxidation:</strong>
                <br>With Cu tube at 475K, 120 atm \(\rightarrow\) Methanol (\(CH_3OH\))
                <br>With Molybdenum oxide (\(MoO\)) \(\rightarrow\) Formaldehyde (\(HCHO\))
                <br>With Manganese compound \(\rightarrow\) Formic acid (\(HCOOH\))
            </li>
        </ul>

        <h2>9. Alkenes (\(C_nH_{2n}\))</h2>
        <p>Unsaturated aliphatic hydrocarbons containing one double bond. Also known as <strong>olefins</strong> (oil-forming).</p>

        <h3>Ethene (\(C_2H_4\))</h3>
        <p><strong>Structure:</strong> Planar molecule. Bond angle is 120°.</p>

        <div class="derivation-box">
            <p><strong>Laboratory Preparation of Ethene:</strong></p>
            <p><em>Dehydration of Ethyl Alcohol:</em> Reactants are Ethanol and Conc. Sulphuric acid.</p>
            <p><em>Reaction:</em> \(C_2H_5OH \xrightarrow{\text{Conc. } H_2SO_4, \ 170^\circ C} C_2H_4 + H_2O\)</p>
            <p><em>Purification:</em> Gas is passed through NaOH to remove impurities like \(CO_2\) and \(SO_2\).</p>
        </div>
        <p><strong>Dehydrohalogenation:</strong>
            <br>\(C_2H_5Cl + KOH \text{ (alcoholic, hot)} \rightarrow C_2H_4 + KCl + H_2O\)
        </p>

        <h4>Chemical Properties of Alkenes</h4>
        <p>Alkenes undergo <strong>Addition Reactions</strong> due to the breaking of the double bond to form saturated products.</p>
        <ul>
            <li><strong>Hydrogenation:</strong> \(C_2H_4 + H_2 \xrightarrow{Ni, \ 200^\circ C} C_2H_6\) (Ethane)</li>
            <li><strong>Halogenation:</strong> \(C_2H_4 + Cl_2 \rightarrow C_2H_4Cl_2\) (1,2-dichloroethane).
                <br><span class="q-tag">TEST</span> <em>Bromine water test:</em> Reddish-brown colour of bromine in \(CCl_4\) gets decolourised, forming colourless 1,2-dibromoethane. This proves unsaturation.
            </li>
            <li><strong>Hydration:</strong> \(C_2H_4 + H_2O \xrightarrow{H^+} C_2H_5OH\) (Ethanol)</li>
            <li><strong>Polymerization:</strong> Ethene molecules polymerize at high temp/pressure to form <strong>Polythene</strong>.</li>
            <li><strong>Baeyer's Test:</strong> Purple colour of alkaline \(KMnO_4\) is decolourised by ethene, forming 1,2-Ethanediol (Ethylene glycol).</li>
        </ul>

        <h2>10. Alkynes (\(C_nH_{2n-2}\))</h2>
        <p>Unsaturated aliphatic hydrocarbons containing a triple bond.</p>

        <h3>Ethyne (Acetylene, \(C_2H_2\))</h3>
        <p><strong>Structure:</strong> Linear molecule.</p>

        <div class="derivation-box">
            <p><strong>Laboratory Preparation of Ethyne:</strong></p>
            <p><em>Reactants:</em> Water and Calcium carbide.</p>
            <p><em>Reaction:</em> \(CaC_2 + 2H_2O \rightarrow Ca(OH)_2 + C_2H_2\uparrow\)</p>
            <p><em>Purification:</em> Passed through acidified \(CuSO_4\) or acidified \(K_2Cr_2O_7\) to remove phosphine (\(PH_3\)) and hydrogen sulphide (\(H_2S\)) impurities.</p>
        </div>

        <h4>Chemical Properties of Alkynes</h4>
        <ul>
            <li><strong>Addition Reactions:</strong> Occur in two stages.
                <br><em>Halogenation (with \(Cl_2\)):</em> \(C_2H_2 \xrightarrow{+Cl_2} C_2H_2Cl_2 \xrightarrow{+Cl_2} C_2H_2Cl_4\) (1,1,2,2-tetrachloroethane)
            </li>
            <li><strong>Combustion:</strong> Burns with a brilliant white, sooty flame. In pure oxygen, it produces a very hot flame (3000°C) used in <strong>Oxy-acetylene welding</strong>.</li>
        </ul>

        <h2>11. Alcohols (\(C_nH_{2n+1}OH\))</h2>
        <p>Hydroxyl derivatives of alkanes.</p>

        <h3>Ethanol (Ethyl Alcohol, \(C_2H_5OH\))</h3>
        <p><strong>Laboratory Preparation:</strong> Hydrolysis of alkyl halides with hot dilute alkali.
            <br>\(C_2H_5Cl + KOH \text{ (aqueous, boil)} \rightarrow C_2H_5OH + KCl\)
        </p>
        <p><strong>Industrial Preparation:</strong> Hydration of Ethene, or Fermentation of sugar (using enzymes at 37°C).</p>

        <h4>Chemical Properties of Ethanol</h4>
        <ul>
            <li><strong>Combustion:</strong> Burns with a pale blue flame.</li>
            <li><strong>Oxidation:</strong> With acidified Potassium Dichromate (\(K_2Cr_2O_7\)).
                <br>\(C_2H_5OH \xrightarrow{[O]} CH_3CHO \text{ (Acetaldehyde)} \xrightarrow{[O]} CH_3COOH \text{ (Acetic Acid)}\)
            </li>
            <li><strong>Action with Sodium:</strong> Evolves Hydrogen gas.
                <br>\(2C_2H_5OH + 2Na \rightarrow 2C_2H_5ONa \text{ (Sodium ethoxide)} + H_2\uparrow\)
            </li>
            <li><strong>Esterification:</strong> Reacts with Acetic Acid (with conc. \(H_2SO_4\)) to form Ethyl Acetate (fruity smell).
                <br>\(C_2H_5OH + CH_3COOH \xrightarrow{\text{Conc. } H_2SO_4} CH_3COOC_2H_5 + H_2O\)
            </li>
            <li><strong>Dehydration:</strong> Heated with conc. \(H_2SO_4\) at 170°C forms Ethene.</li>
        </ul>

        <div class="analysis-box">
            <p><strong>Forms of Ethanol:</strong></p>
            <ul>
                <li><strong>Denatured Alcohol (Methylated Spirit):</strong> Ethanol made undrinkable for industrial use by adding poisonous substances like pyridine, methyl alcohol, and a dye (copper sulphate).</li>
                <li><strong>Spurious Alcohol:</strong> Illicit liquor made improperly, containing fatal amounts of methanol.</li>
            </ul>
        </div>

        <h2>12. Carboxylic Acids (\(R-COOH\))</h2>
        <p>Compounds containing the carboxyl group. Exhibit acidic properties.</p>

        <h3>Acetic Acid (Ethanoic Acid, \(CH_3COOH\))</h3>
        <p><strong>Laboratory Preparation:</strong> Complete oxidation of ethanol using acidified \(K_2Cr_2O_7\).</p>
        
        <div class="master-tip">
            <p><strong>Glacial Acetic Acid:</strong> Anhydrous (pure) acetic acid cools to form crystalline mass resembling ice at 17°C, hence the name glacial acetic acid.</p>
        </div>

        <h4>Chemical Properties of Acetic Acid</h4>
        <ul>
            <li><strong>Acidic Nature:</strong> Weak acid. Turns blue litmus red.</li>
            <li><strong>Reaction with Active Metals:</strong> Evolves hydrogen.
                <br>\(2CH_3COOH + Zn \rightarrow (CH_3COO)_2Zn + H_2\uparrow\)
            </li>
            <li><strong>Reaction with Alkalis:</strong> Forms salt (Sodium acetate) and water.</li>
            <li><strong>Reaction with Carbonates/Bicarbonates:</strong> Evolves \(CO_2\) gas with brisk effervescence.
                <br>\(2CH_3COOH + Na_2CO_3 \rightarrow 2CH_3COONa + H_2O + CO_2\uparrow\)
            </li>
        </ul>

        <br><br>
        <p style="text-align:center;color:#888;font-size:0.9rem;">-- End of Master Notes --</p>
    </div>
    <script>
        function toggleTheme() {
            document.documentElement.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
"@

[System.IO.File]::WriteAllText("$(Get-Location)\$sourceFile", $newContent, [System.Text.Encoding]::UTF8)
