const fs = require('fs');
const path = require('path');

const baseDir = "C:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Hindi";
const imageFolder = path.join(baseDir, "image");

const exactFileMap = new Map();

if (fs.existsSync(imageFolder)) {
    fs.readdirSync(imageFolder).forEach(file => {
        if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
            const basePrefix = file.split('.')[0];
            const placeholderFallback = basePrefix + ".jpg";
            exactFileMap.set(placeholderFallback, file);
        }
    });
} else {
    console.error("Image folder not found: " + imageFolder);
    process.exit(1);
}

let totalPlaceholdersFound = 0;
let totalImagesAdded = 0;

// The user has duplicate folders like '08 Bhikhshuk' and '08 Bhikshuk'.
// Also '07 Sandeh' and '07 Sandeha', and '09 Chalna Hamara Kaam Hai' and '09 Chalna Hamara Kam Hai'
// Let's ensure ALL folders get their placeholders replaced correctly.
// If the placeholder expected name is off, we forcibly map it.

function getActualFilename(expectedFilename, filepath) {
    let basePrefix = expectedFilename.split('.')[0];

    // Manual overrides for known typos in the original placeholder injection
    if (basePrefix === "indian-literature-scene-end" && filepath.includes("08 Bhikshuk")) {
        // From our prompt data, Bhikshuk's climax image is bhikhshuk-dogs
        basePrefix = "bhikhshuk-dogs";
    }
    if (basePrefix === "chalna-hamara-kaam" && filepath.includes("09 Chalna Hamara Kam Hai")) {
        basePrefix = "chalna-hamara-kaam";
    }

    let expectedFallback = basePrefix + ".jpg";
    return exactFileMap.get(expectedFallback);
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);

        if (stat.isDirectory()) {
            if (file !== "image") {
                walkDir(filepath);
            }
        } else if (file === "ChapterNotes.html" && !filepath.includes("PracticeQuestions") && !filepath.includes("Questions")) {
            let content = fs.readFileSync(filepath, 'utf-8');

            const placeholderRegex = /<!--\s*.*AI IMAGE.*PLACEHOLDER\s*-->[\s\S]*?Recommended Filename:.*?<span[^>]*>([^<]+)<\/span>[\s\S]*?<!--\s*\/.*AI IMAGE.*PLACEHOLDER\s*-->/g;

            let match;
            let newContent = content;
            let fileChanges = 0;

            while ((match = placeholderRegex.exec(content)) !== null) {
                totalPlaceholdersFound++;
                const fullPlaceholder = match[0];
                const expectedFilename = match[1].trim();

                const actualFilename = getActualFilename(expectedFilename, filepath);

                if (actualFilename) {
                    const relPath = path.relative(path.dirname(filepath), path.join(imageFolder, actualFilename)).replace(/\\/g, '/');
                    const imgTag = `\n<div style="text-align: center; margin: 30px 0;">\n    <img src="${relPath}" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">\n</div>\n`;
                    newContent = newContent.replace(fullPlaceholder, imgTag);
                    totalImagesAdded++;
                    fileChanges++;
                } else {
                    console.warn(`WARNING: Image missing in image folder for ${expectedFilename} at ${filepath}`);
                }
            }

            if (fileChanges > 0) {
                fs.writeFileSync(filepath, newContent, 'utf-8');
                console.log(`Updated ${filepath}: Replaced ${fileChanges} placeholders.`);
            }
        }
    }
}

walkDir(baseDir);

console.log("\n--- SUMMARY ---");
console.log(`Total Image Placeholders Found: ${totalPlaceholdersFound}`);
console.log(`Total Images Successfully Added: ${totalImagesAdded}`);
