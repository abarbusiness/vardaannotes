
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

console.log("| Chapter Name | Questions (31/4) | Verification |");
console.log("|---|---|---|");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, "PYQ.html");
    let status = "✅";
    let count = 0;
    let details = "";

    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Count 31/4 questions
        // <span class="card-meta">31/4 &middot; Q
        const matches = content.match(/31\/4\s*&middot;\s*Q/g);
        count = matches ? matches.length : 0;

        // Check for corruption signatures
        if (content.match(/\(ightarrow\)/) || content.match(/\(imes\)/) || content.match(/\(frac{/)) {
            status = "⚠️";
            details += "LaTeX Corruption detected. ";
        }

        // Check structural placement (Heuristic)
        // 31/4 should be inside y2025.
        // We can check if the last index of "31/4" is BEFORE the index of "y2024"
        const last31_4 = content.lastIndexOf("31/4 &middot;");
        const y2024Index = content.indexOf('id="y2024"');

        if (last31_4 !== -1 && y2024Index !== -1 && last31_4 > y2024Index) {
            status = "⚠️";
            details += "Placement Issue (Found after 2024 start). ";
        }

        // Check for broken image placeholders?
        // Check for specific "Solution" visibility button issues?

        if (count === 0) {
            status = "⚠️"; // Suspicious if we expected them
            details += "No 31/4 Questions. ";
        }

    } else {
        status = "❌";
        details = "File not found";
    }

    // Clean chapter name for display
    let dispName = chapter.replace(/^\d+/, '').replace(/([A-Z])/g, ' $1').trim();

    // Add warning symbol if details exist
    if (status !== "✅") {
        status += " " + details;
    }

    console.log(`| ${dispName} | ${count} | ${status} |`);
});
