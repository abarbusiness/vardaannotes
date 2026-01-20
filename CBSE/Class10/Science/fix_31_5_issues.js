
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const chapters = [
    "01ChemicalReactionsandEquations",
    "02AcidsBasesandSalts",
    "03MetalsAndNonMetals",
    "04CarbonAndItsCompounds",
    "05LifeProcesses",
    "06ControlAndCoordination",
    "07HowDoOrganismsReproduce",
    "08HeredityandEvolution",
    "09LightReflectionandRefraction",
    "10TheHumanEyeandtheColourfulWorld",
    "11Electricity",
    "12MagneticEffectsofElectricCurrent",
    "13OurEnvironment"
];

let fixedCount = 0;

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Fix 1: Replace double-escaped delimiters \\( -> \( and \\) -> \)
        // We use a global replace.
        // Be careful not to replace \\\\( which might be triple escaped? No, just \\(

        // Count occurrences before
        const matchStart = content.match(/\\\\(\(|\[)/g);
        const matchEnd = content.match(/\\\\(\)|\])/g);

        if (matchStart || matchEnd) {
            console.log(`Fixing delimiters in ${chapter}...`);
            content = content.replace(/\\\\(\(|\[)/g, '\\$1'); // \\( -> \( , \\[ -> \[
            content = content.replace(/\\\\(\)|\])/g, '\\$1'); // \\) -> \) , \\] -> \]
        }

        // Fix 2: Q37 Badge in Magnetic Effects
        if (chapter === "12MagneticEffectsofElectricCurrent") {
            // Look for Q37 5 Marks
            const q37Regex = /<span class="card-meta">31\/5 &middot; Q37<\/span>\s*<\/div>\s*<div class="question"><span class="question-number">Q37\.<\/span>/;
            // We need to find the badge before it.
            // Regex to find the whole card top for Q37
            // <span class="badge badge-5">5 Marks</span>
            // <span class="card-meta">31/5 &middot; Q37</span>

            const targetStr = '<span class="badge badge-5">5 Marks</span>\n                <span class="card-meta">31/5 &middot; Q37</span>';
            const replaceStr = '<span class="badge badge-4">4 Marks</span>\n                <span class="card-meta">31/5 &middot; Q37</span>';

            // Try flexible regex for whitespace
            const targetRegex = /<span class="badge badge-5">5 Marks<\/span>\s*<span class="card-meta">31\/5 &middot; Q37<\/span>/;

            if (targetRegex.test(content)) {
                console.log(`Fixing Q37 Badge in ${chapter}...`);
                content = content.replace(targetRegex, '<span class="badge badge-4">4 Marks</span>\n                <span class="card-meta">31/5 &middot; Q37</span>');
            }
        }

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            fixedCount++;
            console.log(`Updated ${chapter}`);
        }
    }
});

console.log(`Total files updated: ${fixedCount}`);
