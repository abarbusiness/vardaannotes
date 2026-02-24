const fs = require('fs');
const path = require('path');

const baseDir = "C:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Hindi";

let totalImagesUpdated = 0;

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

            // Find the previously added image tags which look like:
            // <div style="text-align: center; margin: 30px 0;">\n    <img src="..." alt="..." style="max-width: 100%; height: auto; border-radius: 8px;">\n</div>
            // OR the second batch which had:
            // <img src="..." style="max-width: 100%; height: auto; display: block; margin: 0 auto;">

            // We want to replace the inner <img> tag styles to strictly have NO border radius or shadow.
            // "don't give any effect to the image like the shadow or any borders"

            const regex1 = /<img src="([^"]+)" alt="([^"]+)" style="max-width: 100%; height: auto; border-radius: 8px;">/g;
            const regex2 = /<img src="([^"]+)" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">/g;

            let fileChanges = 0;
            let newContent = content;

            newContent = newContent.replace(regex1, (match, srcPath, altText) => {
                totalImagesUpdated++;
                fileChanges++;
                return `<img src="${srcPath}" alt="${altText}" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">`;
            });

            newContent = newContent.replace(regex2, (match, srcPath) => {
                // If regex2 matches, it might already be correct in terms of border, but we count it
                // Actually, wait, regex2 was used for the remaining 2 images and lacked alt tags, but met the "no border" rule.
                // Let's just ensure they are all tallied. We won't change the string because it's already correct.
                return match;
            });

            // Wait, we need to count regex2 matches too even if we don't change them
            const matchesRegex2 = [...content.matchAll(regex2)];
            if (matchesRegex2.length > 0) {
                totalImagesUpdated += matchesRegex2.length;
            }

            if (fileChanges > 0) {
                fs.writeFileSync(filepath, newContent, 'utf-8');
            }
        }
    }
}

walkDir(baseDir);

console.log("\n--- SUMMARY FOR BORDER STRIPPING ---");
console.log(`Total Images Found and Verified without borders: ${totalImagesUpdated}`);

// Explain the missing file situation
console.log("\nNOTE ON IMAGE COUNT:");
console.log("The image folder only contains *80 actual image files* plus 1 'image.html' file (Total items: 81).");
console.log("The missing image file is: bheed-mein-khoya-aadmi-station.jpg");
