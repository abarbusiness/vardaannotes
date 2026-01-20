
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const imageDir = path.join(baseDir, "PYQ Images for Science");

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

const images = fs.readdirSync(imageDir).filter(f => f.endsWith('.png'));

// Parse image filenames
// Format: 2025-31-[Series]-QuestionNumber[N][SubPart].png
// Examples:
// 2025-31-1-QuestionNumber2.png -> Series: 31/1, Q: 2, Part: 
// 2025-31-2-QuestionNumber34a (i).png -> Series: 31/2, Q: 34, Part: a (i)

const map = [];

images.forEach(img => {
    // Regex to capture components
    // 2025-31-([A-Z0-9]+)-QuestionNumber(\d+)(\s*[a-zA-Z0-9\(\)\s]*)?\.png
    const regex = /2025-31-([A-Z0-9]+)-QuestionNumber(\d+)(.*)\.png/i;
    const match = img.match(regex);

    if (match) {
        const seriesSuffix = match[1]; // 1, 2, S, 5 etc
        const qNum = match[2];
        const part = match[3] ? match[3].trim() : "";

        map.push({
            filename: img,
            series: `31/${seriesSuffix}`,
            qNum: `Q${qNum}`,
            part: part,
            found: false
        });
    }
});

console.log(`Found ${map.length} images to map.`);

// Scan files
chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        map.forEach(item => {
            if (item.found) return; // Matches found for this image already

            // Search for question card
            // <span class="card-meta">31/1 &middot; Q2</span>
            // escape dot
            const metaTag = `${item.series} &middot; ${item.qNum}`;

            if (content.includes(metaTag)) {
                item.found = true;
                item.chapter = chapter;
                console.log(`MATCH: ${item.filename} -> ${chapter} (${metaTag}) [Part: '${item.part}']`);
            }
        });
    }
});

const notFound = map.filter(i => !i.found);
if (notFound.length > 0) {
    console.log("\nUnmapped Images:");
    notFound.forEach(i => console.log(`${i.filename} (Series: ${i.series}, Q: ${i.qNum})`));
}
