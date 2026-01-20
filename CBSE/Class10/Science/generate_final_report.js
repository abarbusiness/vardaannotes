
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

console.log("| Chapter | Question ID | Type | Status | Image/Placeholder |");
console.log("| :--- | :--- | :--- | :--- | :--- |");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const cards = content.split('<div class="card"');

        for (let i = 1; i < cards.length; i++) {
            const card = cards[i];
            const metaMatch = card.match(/<span class="card-meta">([^<]+)<\/span>/);
            const meta = metaMatch ? metaMatch[1].replace('&middot;', '·').trim() : "Unknown";

            // Check for Images
            const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
            let match;
            while ((match = imgRegex.exec(card)) !== null) {
                const src = match[1];
                const filename = path.basename(src);
                // Filter helpful images only
                if (filename.includes('2025') || filename.includes('QuestionNumber') || filename.includes('Solution')) {
                    const type = card.indexOf(match[0]) < card.indexOf('<div class="solution">') ? "Question" : "Solution";
                    console.log(`| ${chapter.substring(0, 15)}... | ${meta} | ${type} | ✅ LINKED | ${filename} |`);
                }
            }

            // Check for Placeholders
            const phRegex = /<div class="image-placeholder">([^<]+)<\/div>/g;
            while ((match = phRegex.exec(card)) !== null) {
                const phText = match[1];
                const type = card.indexOf(match[0]) < card.indexOf('<div class="solution">') ? "Question" : "Solution";
                console.log(`| ${chapter.substring(0, 15)}... | ${meta} | ${type} | ⭕ REQUIRED | ${phText} |`);
            }
        }
    }
});
