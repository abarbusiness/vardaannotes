
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

const fixes = [
    {
        file: "04CarbonAndItsCompounds/PYQ.html",
        // Q36 (A) asks for structures. A, B, C.
        // It says "Identify A,B,C and write their structures."
        // Solution has text structures like `CH3-CH2-OH`.
        // Maybe the user wants an image for the reaction flow?
        // But the script flagged it because "Structure" keyword.
        // It's text-based structure. But "Draw structural isomers" (in OR part Q36 B ii/iii?) 
        // Q36 B(i) "Identify A and write structure". 
        // Let's add a placeholder for clarity regardless.
        search: "Role of Conc. \\(\\text{H}_2\\text{SO}_4\\):</strong> Dehydrating agent.<br><br>",
        replace: "Role of Conc. \\(\\text{H}_2\\text{SO}_4\\):</strong> Dehydrating agent.<br><br>\n                    <img src=\"2025-31-4-QuestionNumber36A.png\" alt=\"2025-31-4-QuestionNumber36A\" class=\"question-image placeholder\">\n"
    },
    {
        file: "07HowDoOrganismsReproduce/PYQ.html",
        // Q35 A asks for diagram parts. "Name the parts A and B... Write changes".
        // It has correct image in QUESTION. 
        // But solution does not have image. "Labels A=Stigma...".
        // Does user want solution image? "in that case please keep hte image place holder inside the solutino container"
        // Yes.
        search: "strong>Labels:</strong> A = Stigma, B = Anther (or Pollen Grain if pointing to grain). Moves from Anther to Stigma.<br>",
        replace: "<strong>Labels:</strong> A = Stigma, B = Anther (or Pollen Grain if pointing to grain). Moves from Anther to Stigma.<br>\n                    <img src=\"2025-31-4-QuestionNumber35A_Sol.png\" alt=\"2025-31-4-QuestionNumber35A_Sol\" class=\"question-image placeholder\">\n"
    },
    {
        file: "10TheHumanEyeandtheColourfulWorld/PYQ.html",
        // Q24 A: [Diagram Required...]
        search: "\\[Diagram Required: Refraction through Prism showing \\\\(\\angle i, \\angle e, \\angle D\\\\) \\(Angle of Deviation\\)\\]\\.",
        replace: "<img src=\"2025-31-4-QuestionNumber24A.png\" alt=\"2025-31-4-QuestionNumber24A\" class=\"question-image placeholder\">"
    },
    {
        file: "10TheHumanEyeandtheColourfulWorld/PYQ.html",
        // Q37 B: [Diagram Required: Rainbow...]
        search: "\\[Diagram Required: Rainbow formation in water droplet\\]\\.",
        replace: "<img src=\"2025-31-4-QuestionNumber37B.png\" alt=\"2025-31-4-QuestionNumber37B\" class=\"question-image placeholder\">"
    },
    {
        file: "11Electricity/PYQ.html",
        // Q32: Define potential difference.
        // Why flagged? "define the term 'potential difference'".
        // Text contains "define".
        // Wait, did I flag "define"? No.
        // "Draw|Diagram|Structure|Circuit|Ray|Pattern|Flow chart|Electron dot"
        // Q32 text: "Define the term...".
        // Solution: "Potential Difference (V)...".
        // Why flagged? Ah, Q32 text: "Define...". Maybe I misread the log.
        // Log said: "[MISSING] 11Electricity Q32: Asking for diagram/structure..."
        // Let's re-read Q32 text in `add_31_4_questions_part2_fixed.js`:
        // "Define the term 'potential difference'... Name and define its S.I. unit. Also express it in terms of S.I. unit of work and charge."
        // Doesn't seem to ask for diagram. 
        // "Structure"? No. "Circuit"? No. "Ray"? No. "Pattern"? No.
        // Maybe "circuit" was in "electric circuit carrying current".
        // Yes, "electric circuit".
        // User said "see each question carefully".
        // Q32 does NOT ask to DRAW a circuit. It just mentions "in an electric circuit".
        // So Q32 is a False Positive. Skipping.
    },
    {
        file: "12MagneticEffectsofElectricCurrent/PYQ.html",
        // Q34 A (i): Draw pattern...
        // Solution has: "[Diagram: Magnetic field lines repel each other...]"
        search: "\\[Diagram: Magnetic field lines repel each other between conductors carrying opposite currents\\]\\.",
        replace: "<img src=\"2025-31-4-QuestionNumber34A_Sol.png\" alt=\"2025-31-4-QuestionNumber34A_Sol\" class=\"question-image placeholder\">"
    },
    {
        file: "12MagneticEffectsofElectricCurrent/PYQ.html",
        // Q26: Draw the pattern of magnetic field...
        // Script didn't flag Q26? 
        // Let's check logic. Q26 text: "Draw the pattern..."
        // Previous audit: `[MISSING] 11Electricity Q32...` `[TODO] 12MagneticEffectsofElectricCurrent Q34...`
        // Why not Q26? 
        // Maybe Q26 has an image?
        // Q26 solution in `part2_fixed.js`: Just text.
        // Why didn't audit catch it?
        // Maybe `cards` regex issue? Or content?
        // Let's add fix for Q26 anyway just in case.
        search: "<strong>Pattern:</strong> Concentric circles centered around the wire.<br>",
        replace: "<strong>Pattern:</strong> Concentric circles centered around the wire.<br>\n                    <img src=\"2025-31-4-QuestionNumber26.png\" alt=\"2025-31-4-QuestionNumber26\" class=\"question-image placeholder\">\n"
    },
    { // Carbon Q39 (which wasn't in audit list but in part 2 code)
        // Q39 (c) (ii) "Draw two structural isomers of butane".
        // In `part2_fixed` it refers to `2025-31-S-Solution39c` (old style).
        // Should check if Q39 exists in Part 2 or Part 1? 
        // Q39 was in `04Carbon...` Part 2? 
        // No, Carbon Q39 was in Part 1 logic? Wait.
        // Carbon Q36 corresponds to Part 2.
        // Carbon Q39 was likely present? 
        // I need to check `04Carbon` file content for Q39 later if needed.
        // But focusing on Part 2: Carbon Q36.
    }
];

fixes.forEach(fix => {
    if (!fix.search) return;

    const filePath = path.join(baseDir, fix.file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.indexOf(fix.search) !== -1) {
            content = content.replace(fix.search, fix.replace);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Applied Diagram Fix in: ${fix.file}`);
        } else {
            console.log(`Search pattern not found in: ${fix.file} (Already fixed?)`);
        }
    }
});
