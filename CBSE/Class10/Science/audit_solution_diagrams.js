
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

console.log("Scanning 31/4 Series for missing Diagram placeholders in Solutions...");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, "PYQ.html");
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Find all 31/4 cards
        // Regex to match the whole card roughly
        const cardRegex = /<div class="card"[\s\S]*?<span class="card-meta">31\/4[\s\S]*?<\/div>\s*<\/div>/g;
        const cards = content.match(cardRegex) || [];

        cards.forEach(card => {
            // Extract Q Number
            const qNumMatch = card.match(/Q(\d+)\./);
            const qNum = qNumMatch ? qNumMatch[1] : "?";

            // Extract Question Text
            const qTextMatch = card.match(/<div class="question">([\s\S]*?)<button/);
            const qText = qTextMatch ? qTextMatch[1] : "";

            // Extract Solution
            const solMatch = card.match(/<div class="solution">([\s\S]*?)<\/div>/);
            const solText = solMatch ? solMatch[1] : "";

            // Keywords indicating a diagram is needed
            const needsDiagram = /Draw|Diagram|Structure|Circuit|Ray|Pattern|Flow chart|Electron dot/i.test(qText);

            // Check if solution has image or placeholder
            const hasImage = /<img|<div class="image-placeholder"|\[Diagram/i.test(solText);

            if (needsDiagram && !hasImage) {
                console.log(`[MISSING] ${chapter} Q${qNum}: Asking for diagram/structure, but solution lacks image placeholder.`);
                // console.log(`   Context: ${qText.substring(0, 100)}...`);
            } else if (needsDiagram && hasImage) {
                // console.log(`[OK] ${chapter} Q${qNum}`);
                if (solText.includes("[Diagram")) {
                    console.log(`[TODO] ${chapter} Q${qNum}: Has '[Diagram' text but needs real HTML placeholder.`);
                }
            }
        });
    }
});
