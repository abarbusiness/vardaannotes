
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

console.log("Starting Audit...");
console.log("Chapter | Series/Q | Section | Status | Details");
console.log("---|---|---|---|---");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Split by cards to maintain context
        const cards = content.split('<div class="card"');

        // Skip header/preamble (cards[0] is usually empty or header)
        for (let i = 1; i < cards.length; i++) {
            const card = cards[i];

            // Extract Meta
            // <span class="card-meta">31/1 &middot; Q22</span>
            const metaMatch = card.match(/<span class="card-meta">([^<]+)<\/span>/);
            const meta = metaMatch ? metaMatch[1].replace('&middot;', '·').trim() : "Unknown";

            // Separate Question and Solution
            // Question is usually from start until <button class="sol-toggle"> or <div class="solution">
            const solStart = card.indexOf('<div class="solution">');

            let questionPart = "";
            let solutionPart = "";

            if (solStart !== -1) {
                questionPart = card.substring(0, solStart);
                solutionPart = card.substring(solStart);
            } else {
                questionPart = card;
            }

            // Check Question Part
            auditSection(chapter, meta, "Question", questionPart);

            // Check Solution Part
            auditSection(chapter, meta, "Solution", solutionPart);
        }
    }
});

function auditSection(chapter, meta, section, text) {
    // 1. Check for Placed Images
    // <img ... src=".../([^\"]+)" ...>
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    let match;
    while ((match = imgRegex.exec(text)) !== null) {
        const src = match[1];
        const filename = path.basename(src);
        // Exclude icons/assets if any (usually PYQ images have specific format)
        if (filename.includes('2025-31') || filename.includes('QuestionNumber')) {
            console.log(`${chapter} | ${meta} | ${section} | ✅ Placed | ${filename}`);
        }
    }

    // 2. Check for Placeholders (Explicit Requirements)
    // <div class="image-placeholder">...</div>
    // or class="question-image placeholder"
    const phRegex = /<div class="image-placeholder">([^<]+)<\/div>/g;
    while ((match = phRegex.exec(text)) !== null) {
        const phText = match[1];
        console.log(`${chapter} | ${meta} | ${section} | ⭕ REQUIREMENT | Placeholder: ${phText}`);
    }

    // 3. Check for Keywords indicating missing visuals (Heuristic)
    // "diagram shown", "figure", "graph"
    // Only if no image/placeholder is found nearby (hard to scope strictly in regex, just listing hints)
    // We'll trust placeholders for now as the user mentioned "requirements".
    // If text contains "image-placeholder" class in other tags?
    if (text.includes('class="question-image placeholder"')) {
        // This is a specific img tag placeholder used in some scripts
        // Extract alt or src
        // <img src="...png" ... class="...placeholder">
        // actually if it's an img tag, it might be caught by step 1, but we should flag it as "Placeholder" if it uses dummy structure
        // But my previous scripts replaced placeholders with real images.
    }
}
