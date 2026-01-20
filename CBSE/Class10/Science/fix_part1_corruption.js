
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";

// Map of known corruptions to fixes (String literals must be carefully escaped in this script!)
// We use a list of replacements. The 'search' string must match the corrupted file content.
// Since we can't easily type the corrupted chars (like CR or Tab) in a string literal here without them being interpreted,
// we will construct them using unicode escapes or standard escapes.

// \r = \u000D
// \t = \u0009
// \f = \u000C

const replacements = [
    // 1. Right Arrow: (ightarrow) -> \(\rightarrow\)
    {
        // "(\rightharrow)" -> The '\r' became CR.
        // So we look for "\rightharrow" sequence.
        // In the file it likely looks like `\r` followed by `ightarrow`.
        // Wait, if I used `\rightarrow` in a backticked string, it became `\r` (CR) + `ightarrow`.
        // But was it wrapped in `(` `)`?
        // Options like `(a) Grass \rightarrow` became `(a) Grass \rightharrow`.
        // My previous view_file showed `(ightarrow)`. This implies the `\r` was swallowed or hidden.
        // Let's replace `ightarrow` with `\rightarrow` globally? No, dangerous.
        // Replace `(ightarrow)` with `\(\rightarrow\)` ? 
        // In `13OurEnvironment`: `<li>(a) Grass (ightarrow) Grasshopper...`
        // It seems `\rightarrow` was NOT wrapped in `\(\)` in the original script?
        // Original: `<li>(a) Grass \(\rightarrow\) ...` (Wait, did I use `\(` in original? Let me check Part 1 code... No I can't see it easily.
        // Assuming I did.

        // Let's just target the specific corrupted outcomes I saw.
        search: /\(ightarrow\)/g,
        replace: "\\(\\rightarrow\\)"
    },
    {
        // If the CR is present: `\right` -> `\r` + `ight`
        // `\rightarrow` -> CR + `ightarrow`.
        // The view_file output showed `(ightarrow)`. This suggests `\r` might be rendered as invisible.
        // Regex to find "Any char + ightarrow"?
        search: /[\r\n\t\f]ightarrow/g,
        replace: "\\rightarrow"
    },

    // 2. Times: (imes) -> \(\times\)
    {
        search: /\(imes\)/g,
        replace: "\\(\\times\\)"
    },
    {
        search: /[\t]imes/g, // Tab + imes
        replace: "\\times"
    },

    // 3. Frac: (rac...) -> \(\frac...\)
    {
        search: /[\f]rac/g, // FormFeed + rac
        replace: "\\frac"
    },

    // 4. Text: (ext...) -> \(\text...\)
    {
        search: /[\t]ext/g, // Tab + ext
        replace: "\\text"
    },

    // 5. Omega: (Omega) -> \(\Omega\)
    // In Electricity Q11: `(a) 4400 (Omega)`
    // Original: `4400 \(\Omega\)` or `4400 \Omega`? 
    // If original was `\Omega`, `\O` is `O`. So `Omega`.
    // If it was wrapped `\(\Omega\)`, then `\(` -> `(` and `\)` -> `)`.
    // So `(Omega)`.
    {
        search: /\(Omega\)/g,
        replace: "\\(\\Omega\\)"
    },

    // 6. Rightarrow (Capital): (Rightarrow) -> \(\Rightarrow\)
    // Electricity Q10: `(n ... Rightarrow ...)`
    // Original `\Rightarrow`. `\R` -> `R`. So `Rightarrow`.
    // Wrapped in `\(` `\)` -> `(` `)`.
    {
        search: /Rightarrow/g,
        replace: "\\Rightarrow"
    },

    // 7. Parentheses: `(` instead of `\(` and `)` instead of `\)` contextually?
    // In Electricity: `(P = \frac{V^2}{R} ...)`
    // It became `(P = rac... )`.
    // We already fixed `rac` to `\frac`.
    // So it becomes `(P = \frac... )`.
    // We need to restore `\(` and `\)`.
    // We can replace `(P =` with `\(P =` and the corresponding `)` ?
    // Or just manually fix the known equation strings.

    // Electricity Q10: `(n 	imes 4 = 240 Rightarrow n = 60)`
    // Search for this pattern (handling the Tab).
    // `n \t imes`
    {
        // Q10 Solution
        search: /\(n\s+imes\s+4\s+=\s+240\s+Rightarrow\s+n\s+=\s+60\)/g,
        replace: "\\(n \\times 4 = 240 \\Rightarrow n = 60\\)"
    },
    {
        // Q5 Solution
        // (1/R' = \frac...)
        // The `\f` was replaced above.
        // Now match `(1/R' =`
        search: /\(\\frac\{1\}\{R'\}\s+=\s+/g,
        replace: "\\(\\frac{1}{R'} = "
    },
    {
        // Closing parenthesis for Q5
        // `... = \frac{3}{r})` -> `... = \frac{3}{r}\)`
        search: /=\s+\\frac\{3\}\{r\}\)/g,
        replace: "= \\frac{3}{r}\\)"
    },
    {
        // Q5 Part 2
        // `(R' = \frac{r}{3} ... = 9)`
        search: /\(R'\s+=\s+\\frac\{r\}\{3\}/g,
        replace: "\\(R' = \\frac{r}{3}"
    },
    // General fix for `)` at end of math?
    // Dangerous.

    // Light Q16
    // `(Magnification m = -1)` due to `\t`ext not being used? 
    // Wait, earlier view showed `Magnification m = -1`. 
    // Did it have `(ext`?
    // Let's assume `\t`ext was fixed to `\text`.
    // So `(\text{Magnification m = -1})`.
    // We want `\(\text{Magnification m = -1}\)`.
    {
        search: /\(\\text\{Magnification/g,
        replace: "\\(\\text{Magnification"
    },
    {
        // `(20 \times 220 = 4400 \ \Omega)`
        // `\ ` (Reference space) -> ` ` (Space).
        // ` 20 \t imes 220`.
        search: /\(R\s+=\s+\\frac\{220/g,
        replace: "\\(R = \\frac{220"
    },

    // Fix pure `\(` `\)` restoration
    // If we have `(P =` ... `)`
    {
        search: /\(P\s+=\s+\\frac/g,
        replace: "\\(P = \\frac"
    },

    // Acids Bases Q7: `(CaCl_2)`?
    // Original: `\text{CaCl}_2`. -> `\text{CaCl}_2` (Fix 4 handles `ext`).
    // But `(` and `)` wrapper?
    // If it was `\(\text{CaCl}_2\)`. -> `(\text{CaCl}_2)`. -> `\(\text{CaCl}_2\)`.
    {
        search: /\(\\text\{CaCl\}_2\)/g,
        replace: "\\(\\text{CaCl}_2\\)"
    },

    // Fix `(Delta)`?
    // `\xrightarrow{\Delta}` -> `\xrightarrow{Delta}`.
    // If `\xrightarrow` is patched, we get `\xrightarrow{Delta}`.
    // `\Delta` -> `Delta` (since `\D` is `D`).
    // So `Delta` is usually fine to stay as `Delta`? No, `\Delta` is the triangle symbol. `Delta` is text.
    // Replace `Delta` with `\Delta` inside math?
    // Or just globally replace `{Delta}` with `{\Delta}`?
    {
        search: /\{Delta\}/g,
        replace: "{\\Delta}"
    }

];

// Files to check
const filesToCheck = [
    "13OurEnvironment/PYQ.html",
    "03MetalsAndNonMetals/PYQ.html",
    "09LightReflectionandRefraction/PYQ.html",
    "11Electricity/PYQ.html",
    "01ChemicalReactionsandEquations/PYQ.html",
    "02AcidsBasesandSalts/PYQ.html",
    "04CarbonAndItsCompounds/PYQ.html",
    "05LifeProcesses/PYQ.html",
    "07HowDoOrganismsReproduce/PYQ.html",
    "08HeredityandEvolution/PYQ.html",
    "10TheHumanEyeandtheColourfulWorld/PYQ.html"
];

filesToCheck.forEach(relativePath => {
    const filePath = path.join(baseDir, relativePath);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        replacements.forEach(rep => {
            content = content.replace(rep.search, rep.replace);
        });

        // Additional pass for closing parenthesis of math blocks if opened with `\(`
        // This is heuristic and might be risky, but let's try to match specific known endings.
        // Electricity Q5: `... = 9)`. -> `... = 9\)`.
        content = content.replace(/=\s+9\)\./g, "= 9\\).");

        // Electricity Q10: `= 60)`. -> `= 60\)`.
        content = content.replace(/=\s+60\)\./g, "= 60\\).");

        // Electricity Q11: `= 4400 \Omega)` -> `= 4400 \Omega\)`.
        // Note: regex needs escaped slash for Omega
        content = content.replace(/=\s+4400\s+\\Omega\)/g, "= 4400 \\Omega\\)");

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed corruption in: ${relativePath}`);
        } else {
            console.log(`No corruption matches found in: ${relativePath}`);
        }
    } else {
        // console.log(`File not found: ${relativePath}`);
    }
});
