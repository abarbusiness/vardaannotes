
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

let total31_5 = 0;
let errors = 0;

console.log("Verifying 31/5 Series Questions...");
console.log("---------------------------------------------------");
console.log(`| ${'Chapter Name'.padEnd(35)} | ${'31/5 Count'.padEnd(10)} |`);
console.log("---------------------------------------------------");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Count occurrences of "31/5" in card-meta
        // Regex: <span class="card-meta">31/5
        const regex = /<span class="card-meta">31\/5/g;
        const matches = content.match(regex);
        const count = matches ? matches.length : 0;

        total31_5 += count;

        console.log(`| ${chapter.padEnd(35)} | ${count.toString().padEnd(10)} |`);

        // Check for specific questions to ensure correct placement
        // e.g. Q3 in Chemical Reactions
    } else {
        console.log(`| ${chapter.padEnd(35)} | MISSING    |`);
        errors++;
    }
});

console.log("---------------------------------------------------");
console.log(`TOTAL 31/5 Questions Found: ${total31_5}`);
console.log(`Expected: 39`);

if (total31_5 === 39) {
    console.log("SUCCESS: All 39 questions for 31/5 Series (Batch 1 & 2) are present.");
} else {
    console.log("WARNING: Discrepancy in question count.");
}
