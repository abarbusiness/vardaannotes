
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const imageDir = path.join(baseDir, "PYQ Images for Science");

// Get all images
const allImages = fs.readdirSync(imageDir).filter(f => f.endsWith('.png'));

// Map to track status
const imageStatus = {};
allImages.forEach(img => {
    imageStatus[img] = {
        name: img,
        foundIn: null,
        count: 0
    };
});

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

console.log("Scanning files for linked images...");

chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Look for image filename in content
        allImages.forEach(img => {
            // Check for exact filename occurrence
            if (content.includes(img)) {
                if (!imageStatus[img].foundIn) {
                    imageStatus[img].foundIn = chapter;
                }
                imageStatus[img].count++;
            }
        });
    }
});

// Generate Table
console.log("\nFinal Image Linking Report:");
console.log("--------------------------------------------------------------------------------");
console.log("| Image Filename | Status | Location (Chapter) |");
console.log("--------------------------------------------------------------------------------");

let hookedCount = 0;
const reportData = [];

allImages.forEach(img => {
    const status = imageStatus[img];
    const isHooked = status.count > 0;
    if (isHooked) hookedCount++;

    // Format for console log
    const statusIcon = isHooked ? "✅ Linked" : "❌ Not Found";
    const loc = status.foundIn ? status.foundIn.substring(0, 25) : "---";
    console.log(`| ${img.padEnd(35)} | ${statusIcon.padEnd(10)} | ${loc} |`);

    reportData.push({
        filename: img,
        status: isHooked ? "✅ Linked" : "❌ Not Found",
        location: status.foundIn || "---"
    });
});
console.log("--------------------------------------------------------------------------------");
console.log(`Total Images: ${allImages.length}`);
console.log(`Successfully Linked: ${hookedCount}`);
console.log(`Unlinked: ${allImages.length - hookedCount}`);

if (allImages.length - hookedCount > 0) {
    console.log("\nUnlinked Images Details:");
    allImages.filter(i => imageStatus[i].count === 0).forEach(i => console.log(`- ${i}`));
}
