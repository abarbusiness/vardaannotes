
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

let totalAdded = 0;
let auditTable = [];

console.log("Starting Audit for 31/6 Series...");
console.log("---------------------------------------------------");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Match 31/6 pattern in card-meta
        // Regex: 31\/6\s*&middot;\s*Q(\d+)
        const regex = /31\/6\s*&middot;\s*Q(\d+)/g;
        let match;
        const questions = [];

        while ((match = regex.exec(content)) !== null) {
            questions.push('Q' + match[1]);
        }

        // Sort questions numerically
        questions.sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

        const count = questions.length;
        totalAdded += count;

        if (count > 0) {
            auditTable.push({
                chapter: chapter.substring(0, 20) + "...",
                count: count,
                questions: questions.join(', ')
            });
        }
    }
});

console.table(auditTable);
console.log("---------------------------------------------------");
console.log(`TOTAL 31/6 QUESTIONS ADDED: ${totalAdded}`);
console.log("Expected: 39");

if (totalAdded === 39) {
    console.log("SUCCESS: All questions accounted for.");
} else {
    console.log("WARNING: Discrepancy detected.");
}
