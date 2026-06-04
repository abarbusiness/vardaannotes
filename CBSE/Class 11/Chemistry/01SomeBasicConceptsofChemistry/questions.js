const inTextQuestions = [
    {
        "id": "Problem 1.1",
        "question": "Calculate the molecular mass of glucose (\\(C_6H_{12}O_6\\)) molecule.",
        "answer": "Molecular mass of glucose (\\(C_6H_{12}O_6\\)) <br> = \\(6(12.011\\text{ u}) + 12(1.008\\text{ u}) + 6(16.00\\text{ u})\\) <br> = \\(72.066\\text{ u} + 12.096\\text{ u} + 96.00\\text{ u}\\) <br> = \\(180.162\\text{ u}\\)"
    },
    {
        "id": "Problem 1.2",
        "question": "A compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine. Its molar mass is 98.96 g. What are its empirical and molecular formulas?",
        "answer": "Step 1: Conversion of mass per cent to grams.<br>Let us assume 100g of the compound. Mass of H = 4.07g, C = 24.27g, Cl = 71.65g.<br>Step 2: Convert into moles.<br>Moles of H = \\(4.07 / 1.008 = 4.04\\)<br>Moles of C = \\(24.27 / 12.01 = 2.021\\)<br>Moles of Cl = \\(71.65 / 35.453 = 2.021\\)<br>Step 3: Divide by smallest number (2.021) to get the ratio.<br>C : H : Cl = 1 : 2 : 1. Empirical formula is \\(CH_2Cl\\).<br>Step 4: Molecular formula.<br>Empirical formula mass = 12.01 + 2(1.008) + 35.453 = 49.48 g.<br>\\(n = \\text{Molar mass} / \\text{Empirical formula mass} = 98.96 / 49.48 = 2\\).<br>Molecular formula = \\((CH_2Cl)_2 = C_2H_4Cl_2\\)."
    },
    {
        "id": "Problem 1.3",
        "question": "Calculate the amount of water (g) produced by the combustion of 16 g of methane.",
        "answer": "The balanced equation for the combustion of methane is:<br>\\(CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)\\)<br>1 mole of \\(CH_4\\) (16g) produces 2 moles of \\(H_2O\\).<br>Molar mass of \\(H_2O\\) = 18 g/mol.<br>Amount of water produced = \\(2 \\times 18\\text{ g} = 36\\text{ g}\\)."
    },
    {
        "id": "Problem 1.4",
        "question": "How many moles of methane are required to produce 22 g \\(CO_2\\) (g) after combustion?",
        "answer": "The combustion equation is:<br>\\(CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)\\)<br>1 mole of \\(CO_2\\) (44g) is produced from 1 mole of \\(CH_4\\).<br>Moles of \\(CO_2\\) produced = \\(22\\text{ g} / 44\\text{ g/mol} = 0.5\\text{ moles}\\).<br>Thus, 0.5 moles of \\(CH_4\\) are required."
    },
    {
        "id": "Problem 1.5",
        "question": "50.0 kg of \\(N_2(g)\\) and 10.0 kg of \\(H_2(g)\\) are mixed to produce \\(NH_3(g)\\). Calculate the \\(NH_3(g)\\) formed. Identify the limiting reagent.",
        "answer": "Balanced equation: \\(N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)\\)<br>Moles of \\(N_2 = 50.0 \\times 10^3\\text{ g} / 28.0\\text{ g/mol} = 17.86 \\times 10^2\\text{ mol}\\)<br>Moles of \\(H_2 = 10.0 \\times 10^3\\text{ g} / 2.016\\text{ g/mol} = 4.96 \\times 10^3\\text{ mol}\\)<br>1 mole \\(N_2\\) requires 3 moles \\(H_2\\).<br>For \\(17.86 \\times 10^2\\) moles of \\(N_2\\), \\(H_2\\) required = \\(3 \\times 17.86 \\times 10^2 = 5.36 \\times 10^3\\) moles.<br>Since available \\(H_2\\) is only \\(4.96 \\times 10^3\\) moles, **\\(H_2\\) is the limiting reagent**.<br>3 moles of \\(H_2\\) produce 2 moles of \\(NH_3\\).<br>Moles of \\(NH_3\\) produced = \\((2/3) \\times 4.96 \\times 10^3 = 3.30 \\times 10^3\\text{ moles}\\).<br>Mass of \\(NH_3 = 3.30 \\times 10^3 \\times 17.0\\text{ g/mol} = 56.1 \\times 10^3\\text{ g} = 56.1\\text{ kg}\\)."
    },
    {
        "id": "Problem 1.6",
        "question": "A solution is prepared by adding 2 g of a substance A to 18 g of water. Calculate the mass per cent of the solute.",
        "answer": "Mass per cent of A = \\( \\frac{\\text{Mass of A}}{\\text{Mass of solution}} \\times 100 \\)<br>Mass of solution = \\(2\\text{ g} (A) + 18\\text{ g} (Water) = 20\\text{ g}\\)<br>Mass per cent of A = \\((2 / 20) \\times 100 = 10\\%\\)."
    },
    {
        "id": "Problem 1.7",
        "question": "Calculate the molarity of NaOH in the solution prepared by dissolving its 4 g in enough water to form 250 mL of the solution.",
        "answer": "Molarity (M) = \\( \\frac{\\text{Moles of solute}}{\\text{Volume of solution in liters}} \\)<br>Molar mass of NaOH = 40 g/mol.<br>Moles of NaOH = \\(4\\text{ g} / 40\\text{ g/mol} = 0.1\\text{ mol}\\).<br>Volume of solution = 250 mL = 0.250 L.<br>Molarity = \\(0.1 / 0.250 = 0.4\\text{ M}\\)."
    },
    {
        "id": "Problem 1.8",
        "question": "The density of 3 M solution of NaCl is 1.25 g mL\\(^{-1}\\). Calculate molality of the solution.",
        "answer": "Molarity = 3 M means 3 moles of NaCl are present in 1 L (1000 mL) of solution.<br>Mass of 1 L solution = \\(1000\\text{ mL} \\times 1.25\\text{ g/mL} = 1250\\text{ g}\\).<br>Mass of 3 moles of NaCl = \\(3 \\times 58.5\\text{ g} = 175.5\\text{ g}\\).<br>Mass of water (solvent) = Mass of solution - Mass of solute = \\(1250 - 175.5 = 1074.5\\text{ g} = 1.0745\\text{ kg}\\).<br>Molality (m) = \\( \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} \\) = \\(3 / 1.0745 = 2.79\\text{ m}\\)."
    }
];

const exerciseQuestions = [
    {
        "id": "1.1",
        "question": "Calculate the molecular mass of the following: (i) \\(H_2O\\) (ii) \\(CO_2\\) (iii) \\(CH_4\\)",
        "answer": "(i) \\(H_2O\\): \\((2 \\times 1.008) + 16.00 = 18.016\\text{ u}\\)<br>(ii) \\(CO_2\\): \\(12.01 + (2 \\times 16.00) = 44.01\\text{ u}\\)<br>(iii) \\(CH_4\\): \\(12.01 + (4 \\times 1.008) = 16.042\\text{ u}\\)"
    },
    {
        "id": "1.2",
        "question": "Calculate the mass per cent of different elements present in sodium sulphate (\\(Na_2SO_4\\)).",
        "answer": "Molar mass of \\(Na_2SO_4 = (2 \\times 23.0) + 32.06 + (4 \\times 16.0) = 142.06\\text{ g/mol}\\).<br>Mass % of Na = \\((46.0 / 142.06) \\times 100 = 32.38\\%\\)<br>Mass % of S = \\((32.06 / 142.06) \\times 100 = 22.57\\%\\)<br>Mass % of O = \\((64.0 / 142.06) \\times 100 = 45.05\\%\\)"
    },
    {
        "id": "1.3",
        "question": "Determine the empirical formula of an oxide of iron which has 69.9% iron and 30.1% dioxygen by mass.",
        "answer": "Moles of Fe = \\(69.9 / 55.85 = 1.25\\)<br>Moles of O = \\(30.1 / 16.0 = 1.88\\)<br>Dividing by smallest (1.25): Fe : O = 1 : 1.5<br>Multiplying by 2 to get whole numbers: Fe : O = 2 : 3.<br>Empirical formula = \\(Fe_2O_3\\)."
    },
    {
        "id": "1.4",
        "question": "Calculate the amount of carbon dioxide that could be produced when (i) 1 mole of carbon is burnt in air. (ii) 1 mole of carbon is burnt in 16 g of dioxygen. (iii) 2 moles of carbon are burnt in 16 g of dioxygen.",
        "answer": "Equation: \\(C(s) + O_2(g) \\rightarrow CO_2(g)\\)<br>(i) 1 mole C reacts with 1 mole \\(O_2\\) to produce 1 mole \\(CO_2\\) (44 g). Amount = **44 g**.<br>(ii) 16 g \\(O_2\\) = 0.5 mole. \\(O_2\\) is limiting. 0.5 mole \\(O_2\\) produces 0.5 mole \\(CO_2\\) = **22 g**.<br>(iii) 2 moles C and 0.5 mole \\(O_2\\). \\(O_2\\) is still limiting. 0.5 mole \\(CO_2\\) produced = **22 g**."
    },
    {
        "id": "1.5",
        "question": "Calculate the mass of sodium acetate (\\(CH_3COONa\\)) required to make 500 mL of 0.375 molar aqueous solution. Molar mass of sodium acetate is 82.0245 g mol\\(^{-1}\\).",
        "answer": "Molarity = Moles / Volume(L) <br>Moles required = Molarity \\(\\times\\) Volume = \\(0.375 \\times 0.500 = 0.1875\\text{ mol}\\)<br>Mass required = Moles \\(\\times\\) Molar mass = \\(0.1875 \\times 82.0245 = 15.38\\text{ g}\\)."
    },
    {
        "id": "1.6",
        "question": "Calculate the concentration of nitric acid in moles per litre in a sample which has a density, 1.41 g mL\\(^{-1}\\) and the mass per cent of nitric acid in it being 69%.",
        "answer": "Mass % = 69% means 69 g \\(HNO_3\\) in 100 g solution.<br>Molar mass of \\(HNO_3\\) = 63 g/mol.<br>Moles of \\(HNO_3 = 69 / 63 = 1.095\\text{ mol}\\).<br>Volume of 100 g solution = Mass / Density = \\(100 / 1.41 = 70.92\\text{ mL} = 0.07092\\text{ L}\\).<br>Molarity = Moles / Volume = \\(1.095 / 0.07092 = 15.44\\text{ M}\\)."
    },
    {
        "id": "1.7",
        "question": "How much copper can be obtained from 100 g of copper sulphate (\\(CuSO_4\\))?",
        "answer": "Molar mass of \\(CuSO_4\\) = 63.5 (Cu) + 32 (S) + 64 (O) = 159.5 g/mol.<br>159.5 g of \\(CuSO_4\\) contains 63.5 g of Cu.<br>Therefore, 100 g of \\(CuSO_4\\) will contain: \\( (63.5 / 159.5) \\times 100 = 39.81\\text{ g}\\) of Cu."
    },
    {
        "id": "1.8",
        "question": "Determine the molecular formula of an oxide of iron in which the mass per cent of iron and oxygen are 69.9 and 30.1 respectively. Given that the molar mass of the oxide is 159.69 g mol\\(^{-1}\\).",
        "answer": "From Ex 1.3, the empirical formula is \\(Fe_2O_3\\).<br>Empirical formula mass = \\( (2 \\times 55.85) + (3 \\times 16.0) = 159.7\\text{ g/mol}\\).<br>Since empirical mass \\(\\approx\\) molar mass, \\(n = 159.69 / 159.7 \\approx 1\\).<br>Therefore, Molecular formula = **\\(Fe_2O_3\\)**."
    },
    {
        "id": "1.9",
        "question": "Calculate the atomic mass (average) of chlorine using the following data: % Natural Abundance (35Cl = 75.77, 37Cl = 24.23) and Molar Mass (35Cl = 34.9689, 37Cl = 36.9659).",
        "answer": "Average Atomic Mass = \\( (\\text{Abundance}_1 \\times \\text{Mass}_1) + (\\text{Abundance}_2 \\times \\text{Mass}_2) \\)<br>Average = \\( (0.7577 \\times 34.9689) + (0.2423 \\times 36.9659) \\)<br>Average = \\( 26.4959 + 8.9568 = 35.4527\\text{ u}\\)."
    },
    {
        "id": "1.10",
        "question": "In three moles of ethane (\\(C_2H_6\\)), calculate the following: (i) Number of moles of carbon atoms. (ii) Number of moles of hydrogen atoms. (iii) Number of molecules of ethane.",
        "answer": "(i) 1 mole of \\(C_2H_6\\) has 2 moles of C. So, 3 moles of \\(C_2H_6\\) have \\(3 \\times 2 = 6\\text{ moles}\\) of C atoms.<br>(ii) 1 mole of \\(C_2H_6\\) has 6 moles of H. So, 3 moles of \\(C_2H_6\\) have \\(3 \\times 6 = 18\\text{ moles}\\) of H atoms.<br>(iii) Number of molecules = Moles \\(\\times\\) Avogadro's number = \\(3 \\times 6.022 \\times 10^{23} = 1.807 \\times 10^{24}\\) molecules."
    },
    {
        "id": "1.11",
        "question": "What is the concentration of sugar (\\(C_{12}H_{22}O_{11}\\)) in mol L\\(^{-1}\\) if its 20 g are dissolved in enough water to make a final volume up to 2 L?",
        "answer": "Molar mass of sugar = \\((12 \\times 12) + (22 \\times 1) + (11 \\times 16) = 342\\text{ g/mol}\\).<br>Moles of sugar = \\(20 / 342 = 0.0585\\text{ mol}\\).<br>Volume = 2 L.<br>Molarity = Moles / Volume = \\(0.0585 / 2 = 0.02925\\text{ mol L}^{-1}\\)."
    },
    {
        "id": "1.12",
        "question": "If the density of methanol is 0.793 kg L\\(^{-1}\\), what is its volume needed for making 2.5 L of its 0.25 M solution?",
        "answer": "Molar mass of methanol (\\(CH_3OH\\)) = \\(12 + 4 + 16 = 32\\text{ g/mol} = 0.032\\text{ kg/mol}\\).<br>Moles required = Molarity \\(\\times\\) Volume = \\(0.25 \\times 2.5 = 0.625\\text{ mol}\\).<br>Mass required = Moles \\(\\times\\) Molar mass = \\(0.625 \\times 0.032\\text{ kg} = 0.02\\text{ kg}\\).<br>Volume = Mass / Density = \\(0.02\\text{ kg} / 0.793\\text{ kg L}^{-1} = 0.0252\\text{ L} = 25.2\\text{ mL}\\)."
    },
    {
        "id": "1.13",
        "question": "Pressure is determined as force per unit area of the surface. The SI unit of pressure, pascal is as shown below: \\(1\\text{ Pa} = 1\\text{ N m}^{-2}\\). If mass of air at sea level is 1034 g cm\\(^{-2}\\), calculate the pressure in pascal.",
        "answer": "Pressure = Force / Area. Force = mass \\(\\times\\) gravity.<br>Mass per unit area = 1034 g cm\\(^{-2}\\) = 10.34 kg / (10\\(^{-4}\\) m\\(^2\\)) = 103400 kg m\\(^{-2}\\).<br>Pressure = \\(103400\\text{ kg m}^{-2} \\times 9.8\\text{ m s}^{-2} = 1.01332 \\times 10^5\\text{ N m}^{-2}\\) (or Pascal)."
    },
    {
        "id": "1.14",
        "question": "What is the SI unit of mass? How is it defined?",
        "answer": "The SI unit of mass is the **kilogram (kg)**.<br>It is defined by taking the fixed numerical value of the Planck constant \\(h\\) to be \\(6.62607015 \\times 10^{-34}\\) when expressed in the unit J s, which is equal to kg m\\(^2\\) s\\(^{-1}\\)."
    },
    {
        "id": "1.15",
        "question": "Match the following prefixes with their multiples: (i) micro (ii) deca (iii) mega (iv) giga (v) femto",
        "answer": "(i) micro = \\(10^{-6}\\)<br>(ii) deca = \\(10^1\\)<br>(iii) mega = \\(10^6\\)<br>(iv) giga = \\(10^9\\)<br>(v) femto = \\(10^{-15}\\)"
    },
    {
        "id": "1.16",
        "question": "What do you mean by significant figures?",
        "answer": "Significant figures are meaningful digits which are known with certainty plus one which is estimated or uncertain. They indicate the precision of a measurement."
    },
    {
        "id": "1.17",
        "question": "A sample of drinking water was found to be severely contaminated with chloroform (\\(CHCl_3\\)) supposed to be a carcinogen. The level of contamination was 15 ppm (by mass). (i) express this in percent by mass (ii) determine the molality of chloroform in the water sample.",
        "answer": "15 ppm means 15 g of \\(CHCl_3\\) in \\(10^6\\) g of solution.<br>(i) Mass % = \\( (15 / 10^6) \\times 100 = 1.5 \\times 10^{-3} \\%\\).<br>(ii) Molar mass of \\(CHCl_3 = 12 + 1 + (3 \\times 35.5) = 119.5\\text{ g/mol}\\).<br>Molality = Moles of solute / Mass of solvent in kg.<br>Moles of \\(CHCl_3 = 15 / 119.5 = 0.1255\\text{ mol}\\).<br>Mass of solvent \\(\\approx 10^6\\) g = 1000 kg.<br>Molality = \\(0.1255 / 1000 = 1.255 \\times 10^{-4}\\text{ m}\\)."
    },
    {
        "id": "1.18",
        "question": "Express the following in the scientific notation: (i) 0.0048 (ii) 234,000 (iii) 8008 (iv) 500.0 (v) 6.0012",
        "answer": "(i) \\(4.8 \\times 10^{-3}\\)<br>(ii) \\(2.34 \\times 10^5\\)<br>(iii) \\(8.008 \\times 10^3\\)<br>(iv) \\(5.000 \\times 10^2\\)<br>(v) \\(6.0012 \\times 10^0\\)"
    },
    {
        "id": "1.19",
        "question": "How many significant figures are present in the following? (i) 0.0025 (ii) 208 (iii) 5005 (iv) 126,000 (v) 500.0 (vi) 2.0034",
        "answer": "(i) 2<br>(ii) 3<br>(iii) 4<br>(iv) 3 (or 4, 5, 6 depending on certainty, standard is 3)<br>(v) 4<br>(vi) 5"
    },
    {
        "id": "1.20",
        "question": "Round up the following upto three significant figures: (i) 34.216 (ii) 10.4107 (iii) 0.04597 (iv) 2808",
        "answer": "(i) 34.2<br>(ii) 10.4<br>(iii) 0.0460<br>(iv) 2810"
    },
    {
        "id": "1.21",
        "question": "The following data are obtained when dinitrogen and dioxygen react together to form different compounds... Which law of chemical combination is obeyed by the above experimental data?",
        "answer": "The masses of oxygen (16g, 32g, 32g, 80g) that combine with a fixed mass of nitrogen (14g) bear a simple whole number ratio (1:2:2:5). This obeys the **Law of Multiple Proportions**."
    },
    {
        "id": "1.22",
        "question": "If the speed of light is \\(3.0 \\times 10^8\\text{ m s}^{-1}\\), calculate the distance covered by light in 2.00 ns.",
        "answer": "Time = 2.00 ns = \\(2.00 \\times 10^{-9}\\text{ s}\\).<br>Distance = Speed \\(\\times\\) Time = \\( (3.0 \\times 10^8) \\times (2.00 \\times 10^{-9}) = 0.600\\text{ m}\\)."
    },
    {
        "id": "1.23",
        "question": "In a reaction \\(A + B_2 \\rightarrow AB_2\\), identify the limiting reagent, if any, in the following reaction mixtures. (i) 300 atoms of A + 200 molecules of B. (ii) 2 mol A + 3 mol B. (iii) 100 atoms of A + 100 molecules of B. (iv) 5 mol A + 2.5 mol B. (v) 2.5 mol A + 5 mol B.",
        "answer": "1 atom A reacts with 1 molecule \\(B_2\\).<br>(i) B is limiting (requires 300, only 200 present).<br>(ii) A is limiting (requires 3 mol B, has 3 mol, but only 2 mol A present, so A runs out first).<br>(iii) None (stoichiometric amounts).<br>(iv) B is limiting (2.5 < 5).<br>(v) A is limiting (2.5 < 5)."
    },
    {
        "id": "1.24",
        "question": "Dinitrogen and dihydrogen react with each other to produce ammonia. If \\(2.00 \\times 10^3\\text{ g}\\) of \\(N_2\\) reacts with \\(1.00 \\times 10^3\\text{ g}\\) of \\(H_2\\), calculate the mass of ammonia produced. Will any of the two reactants remain unreacted? If yes, which one and what would be its mass?",
        "answer": "Reaction: \\(N_2 + 3H_2 \\rightarrow 2NH_3\\).<br>Moles of \\(N_2 = 2000 / 28 = 71.43\\text{ mol}\\).<br>Moles of \\(H_2 = 1000 / 2.016 = 496.03\\text{ mol}\\).<br>\\(N_2\\) requires \\(71.43 \\times 3 = 214.29\\text{ mol}\\) of \\(H_2\\). Since \\(H_2\\) is 496.03 mol, **\\(N_2\\) is the limiting reagent**.<br>(i) Mass of \\(NH_3\\) = Moles of \\(N_2 \\times 2 \\times 17.03 = 71.43 \\times 34.06 = 2432.9\\text{ g}\\).<br>(ii) Yes, \\(H_2\\) remains unreacted.<br>(iii) Unreacted \\(H_2 = 496.03 - 214.29 = 281.74\\text{ mol} = 281.74 \\times 2.016 \\approx 568\\text{ g}\\)."
    },
    {
        "id": "1.25",
        "question": "How are 0.50 mol \\(Na_2CO_3\\) and 0.50 M \\(Na_2CO_3\\) different?",
        "answer": "0.50 mol \\(Na_2CO_3\\) refers to the **amount** of substance (0.50 moles of particles).<br>0.50 M \\(Na_2CO_3\\) refers to the **concentration** of a solution (0.50 moles of \\(Na_2CO_3\\) dissolved in 1 Litre of solution)."
    },
    {
        "id": "1.26",
        "question": "If 10 volumes of dihydrogen gas reacts with 5 volumes of dioxygen gas, how many volumes of water vapour would be produced?",
        "answer": "Equation: \\(2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)\\).<br>2 volumes of \\(H_2\\) react with 1 volume of \\(O_2\\) to give 2 volumes of \\(H_2O\\).<br>Therefore, 10 volumes of \\(H_2\\) will react with 5 volumes of \\(O_2\\) to produce **10 volumes** of water vapour."
    },
    {
        "id": "1.27",
        "question": "Convert the following into basic units: (i) 28.7 pm (ii) 15.15 pm (iii) 25365 mg",
        "answer": "Basic units are meter (m) and kilogram (kg).<br>(i) \\(28.7 \\text{ pm} = 28.7 \\times 10^{-12} \\text{ m} = 2.87 \\times 10^{-11} \\text{ m}\\).<br>(ii) \\(15.15 \\text{ pm} = 15.15 \\times 10^{-12} \\text{ m} = 1.515 \\times 10^{-11} \\text{ m}\\).<br>(iii) \\(25365 \\text{ mg} = 25365 \\times 10^{-3} \\text{ g} = 25.365 \\text{ g} = 2.5365 \\times 10^{-2} \\text{ kg}\\)."
    },
    {
        "id": "1.28",
        "question": "Which one of the following will have the largest number of atoms? (i) 1 g Au (ii) 1 g Na (iii) 1 g Li (iv) 1 g of \\(Cl_2\\)",
        "answer": "Number of atoms = (Mass / Atomic Mass) \\(\\times\\) Avogadro's Number.<br>Smallest atomic mass will have largest number of moles, hence largest number of atoms for a given 1g mass.<br>Atomic masses: Au=197, Na=23, Li=7, Cl=35.5 (but \\(Cl_2\\) has 2 atoms per molecule, atoms = (1/71)\\(\\times 2 \\times N_A\\) = 1/35.5 \\(N_A\\)).<br>**1 g of Li** has the largest number of atoms since Li has the smallest atomic mass (7)."
    },
    {
        "id": "1.29",
        "question": "Calculate the molarity of a solution of ethanol in water, in which the mole fraction of ethanol is 0.040 (assume the density of water to be one).",
        "answer": "Mole fraction of ethanol = 0.040. Mole fraction of water = 1 - 0.040 = 0.960.<br>Let total moles be 1. Moles of ethanol = 0.040, Moles of water = 0.960.<br>Mass of water = \\(0.960 \\times 18 = 17.28\\text{ g}\\).<br>Volume of water \\(\\approx\\) Volume of solution (assuming dilute) = 17.28 mL = 0.01728 L.<br>Molarity = Moles / Volume = \\(0.040 / 0.01728 = 2.31\\text{ M}\\)."
    },
    {
        "id": "1.30",
        "question": "What will be the mass of one \\(^{12}C\\) atom in g?",
        "answer": "1 mole of \\(^{12}C\\) atoms weighs 12 g.<br>Number of atoms in 1 mole = \\(6.022 \\times 10^{23}\\).<br>Mass of one atom = \\(12 / (6.022 \\times 10^{23}) = 1.99 \\times 10^{-23}\\text{ g}\\)."
    },
    {
        "id": "1.31",
        "question": "How many significant figures should be present in the answer of the following calculations? (i) (0.02856 \\(\\times\\) 298.15 \\(\\times\\) 0.112) / 0.5785 (ii) 5 \\(\\times\\) 5.364 (iii) 0.0125 + 0.7864 + 0.0215",
        "answer": "(i) Least number of sig figs in multiplication/division is 3 (in 0.112). Answer: **3**.<br>(ii) 5 is an exact number. 5.364 has 4 sig figs. Answer: **4**.<br>(iii) Addition depends on least decimal places. Least is 4 decimal places. Answer will be 0.8204 which has **4** sig figs."
    },
    {
        "id": "1.32",
        "question": "Use the data given in the following table to calculate the molar mass of naturally occurring argon isotopes: 36Ar (35.96755 g/mol, 0.337%), 38Ar (37.96272 g/mol, 0.063%), 40Ar (39.9624 g/mol, 99.600%).",
        "answer": "Average molar mass = \\( \\sum (\\text{Abundance} \\times \\text{Isotopic Mass}) \\)<br>= \\((0.00337 \\times 35.96755) + (0.00063 \\times 37.96272) + (0.99600 \\times 39.9624)\\)<br>= \\(0.121 + 0.024 + 39.802 = 39.947\\text{ g/mol}\\)."
    },
    {
        "id": "1.33",
        "question": "Calculate the number of atoms in each of the following (i) 52 moles of Ar (ii) 52 u of He (iii) 52 g of He.",
        "answer": "(i) \\(52 \\times 6.022 \\times 10^{23} = 3.13 \\times 10^{25}\\text{ atoms}\\).<br>(ii) 1 He atom = 4 u. So 52 u = \\(52 / 4 = 13\\text{ atoms}\\).<br>(iii) Moles of He = 52 g / 4 g/mol = 13 moles. Atoms = \\(13 \\times 6.022 \\times 10^{23} = 7.828 \\times 10^{24}\\text{ atoms}\\)."
    },
    {
        "id": "1.34",
        "question": "A welding fuel gas contains carbon and hydrogen only. Burning a small sample of it in oxygen gives 3.38 g carbon dioxide, 0.690 g of water and no other products. A volume of 10.0 L (measured at STP) of this welding gas is found to weigh 11.6 g. Calculate (i) empirical formula, (ii) molar mass of the gas, and (iii) molecular formula.",
        "answer": "Mass of C in 3.38g \\(CO_2\\) = \\((12/44) \\times 3.38 = 0.9218\\text{ g}\\).<br>Mass of H in 0.690g \\(H_2O\\) = \\((2/18) \\times 0.690 = 0.0767\\text{ g}\\).<br>Moles of C = \\(0.9218 / 12 = 0.0768\\). Moles of H = \\(0.0767 / 1 = 0.0767\\).<br>Ratio C : H = 1 : 1. Empirical formula = **CH**.<br>(ii) 10.0 L at STP weighs 11.6 g. 22.4 L (1 mole) weighs \\((11.6 / 10.0) \\times 22.4 = 26.0\\text{ g/mol}\\). Molar mass = **26 g/mol**.<br>(iii) Empirical formula mass of CH = 13. \\(n = 26 / 13 = 2\\). Molecular formula = **\\(C_2H_2\\)**."
    },
    {
        "id": "1.35",
        "question": "Calcium carbonate reacts with aqueous HCl to give \\(CaCl_2\\) and \\(CO_2\\) according to the reaction: \\(CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + CO_2(g) + H_2O(l)\\). What mass of \\(CaCO_3\\) is required to react completely with 25 mL of 0.75 M HCl?",
        "answer": "Moles of HCl = Molarity \\(\\times\\) Volume = \\(0.75 \\times 0.025 = 0.01875\\text{ mol}\\).<br>From equation, 2 moles of HCl react with 1 mole of \\(CaCO_3\\).<br>Moles of \\(CaCO_3\\) required = \\(0.01875 / 2 = 0.009375\\text{ mol}\\).<br>Molar mass of \\(CaCO_3 = 40 + 12 + 48 = 100\\text{ g/mol}\\).<br>Mass of \\(CaCO_3 = 0.009375 \\times 100 = 0.9375\\text{ g}\\)."
    },
    {
        "id": "1.36",
        "question": "Chlorine is prepared in the laboratory by treating manganese dioxide (\\(MnO_2\\)) with aqueous hydrochloric acid according to the reaction: \\(4HCl(aq) + MnO_2(s) \\rightarrow 2H_2O(l) + MnCl_2(aq) + Cl_2(g)\\). How many grams of HCl react with 5.0 g of manganese dioxide?",
        "answer": "Molar mass of \\(MnO_2 = 55 + (2 \\times 16) = 87\\text{ g/mol}\\).<br>Moles of \\(MnO_2 = 5.0 / 87 = 0.05747\\text{ mol}\\).<br>From equation, 1 mole of \\(MnO_2\\) reacts with 4 moles of HCl.<br>Moles of HCl required = \\(4 \\times 0.05747 = 0.2298\\text{ mol}\\).<br>Molar mass of HCl = 36.5 g/mol.<br>Mass of HCl = \\(0.2298 \\times 36.5 = 8.39\\text{ g}\\)."
    }
];
