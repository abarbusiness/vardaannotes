
const fs = require('fs');
const path = require('path');
const cheerio = null; // Removed dependency as it is not available

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

// Get all images
const allImages = fs.readdirSync(imageDir).filter(f => f.endsWith('.png'));

console.log(`Scanning ${allImages.length} images for correct placement...`);
console.log("----------------------------------------------------------------------------------------------------");
console.log("| Image Filename | Status | Expected Meta | Found Meta | Location |");
console.log("----------------------------------------------------------------------------------------------------");

let successCount = 0;
let failCount = 0;

// Helper to extract expected meta from filename
function getExpectedMeta(filename) {
    // 2025-31-1-QuestionNumber28.png -> 31/1, Q28
    const regex = /2025-31-([A-Z0-9]+)-QuestionNumber(\d+)/i;
    const match = filename.match(regex);
    if (match) {
        return {
            series: `31/${match[1]}`, // e.g. 31/1
            qNum: `Q${match[2]}`      // e.g. Q28
        };
    }
    return null;
}

// Global map to store results
const results = {};

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Scan for each image
        allImages.forEach(img => {
            if (results[img] && results[img].found) return; // Already found

            if (content.includes(img)) {
                // Image is in this file. Now check context.
                // We need to find the <div class="card"> that contains this image.
                // Approach: Find image index, search backwards for <div class="card", 
                // then search forwards from that card start for <span class="card-meta">

                const imgIdx = content.indexOf(img);

                // Find nearest preceding "card-meta" is risky if multiple cards.
                // Better: Find nearest preceding <div class="card"
                const cardStartIdx = content.lastIndexOf('<div class="card"', imgIdx);

                if (cardStartIdx !== -1) {
                    // Search for meta within this card (before the next card starts)
                    const nextCardIdx = content.indexOf('<div class="card"', cardStartIdx + 1);
                    const searchLimit = (nextCardIdx === -1) ? content.length : nextCardIdx;

                    if (imgIdx < searchLimit) {
                        // Image is indeed in this card block
                        // Extract Meta
                        // <span class="card-meta">31/1 &middot; Q28</span>
                        const metaStart = content.indexOf('<span class="card-meta">', cardStartIdx);
                        const metaEnd = content.indexOf('</span>', metaStart);

                        let foundMetaFull = "Unknown";
                        if (metaStart !== -1 && metaStart < searchLimit) {
                            foundMetaFull = content.substring(metaStart + '<span class="card-meta">'.length, metaEnd).trim();
                            // Clean up HTML entities like &middot; -> ·
                            foundMetaFull = foundMetaFull.replace('&middot;', '·');
                        }

                        const expected = getExpectedMeta(img);
                        let status = "⚠️ Check";

                        if (expected) {
                            // Check if foundMeta contains expected Series and QNum
                            // Found: "31/1 · Q28"
                            // Expected: {series: "31/1", qNum: "Q28"}

                            if (foundMetaFull.includes(expected.series) && foundMetaFull.includes(expected.qNum)) {
                                status = "✅ Correct";
                                successCount++;
                            } else {
                                status = "❌ Mismatch";
                                failCount++;
                            }
                        } else {
                            status = "⚠️ No Parse";
                            failCount++;
                        }

                        results[img] = {
                            found: true,
                            status: status,
                            foundMeta: foundMetaFull,
                            expected: expected ? `${expected.series} · ${expected.qNum}` : "N/A",
                            chapter: chapter
                        };
                    } else {
                        // Image found but apparently not within the identified card scope?
                        results[img] = {
                            found: true,
                            status: "⚠️ Scope Err",
                            foundMeta: "Lost",
                            expected: "N/A",
                            chapter: chapter
                        };
                    }
                }
            }
        });
    }
});

// Print Results
allImages.forEach(img => {
    const res = results[img];
    if (res) {
        console.log(`| ${img.substring(0, 30).padEnd(30)} | ${res.status.padEnd(10)} | ${res.expected.padEnd(15)} | ${res.foundMeta.padEnd(15)} | ${res.chapter.substring(0, 15)} |`);
    } else {
        console.log(`| ${img.substring(0, 30).padEnd(30)} | ❌ Missing  | ---             | ---             | ---             |`);
        failCount++;
    }
});

console.log("----------------------------------------------------------------------------------------------------");
console.log(`Total: ${allImages.length} | Success: ${successCount} | Issues: ${failCount}`);
