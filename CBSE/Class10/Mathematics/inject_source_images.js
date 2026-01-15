const fs = require('fs');
const path = require('path');

const sourcePath = 'source_2025.html';

// Map of questions requiring images
// Format: "Question Number Prefix": "ImageName"
// We use the Q Number from the <span> e.g., "Q15." or "Q32 (b)."
const imageMap = {
    "Q35 (a).": "q35a",
    "Q38 (Case Study).": "q38", // Chapter 5
    "Q15.": "q15",
    "Q23.": "q23",
    "Q32 (b).": "q32b",
    "Q4.": "q4", // Chapter 9 Peacock? Maybe needed but text says "peacock on tree...". Usually diagram helps. Let's add.
    "Q2.": "q2", // Chapter 10
    "Q18.": "q18", // Chapter 10
    "Q29.": "q29", // Chapter 10
    "Q37 (Case Study).": "q37", // Chapter 11
    "Q33.": "q33", // Chapter 12
    "Q36 (Case Study).": "q36", // Chapter 9
    "Q38.": "q38" // Just in case label matches differently
};

try {
    let content = fs.readFileSync(sourcePath, 'utf8');

    // We will iterate through keys and replace.
    // We look for: <span class="question-number">KEY</span> ... (content) ... 
    // We want to insert <div class="image-placeholder">[Image: name.png]</div> inside the question-text div
    // But since distribution script handles splitting, simpler is to just append the image div after the question number span or at the end of text.

    // Let's iterate and use regex to insert if not present.
    Object.keys(imageMap).forEach(key => {
        const imgName = imageMap[key];
        const placeholder = `<div class="image-placeholder">[Image: ${imgName}.png]</div>`;

        // Regex to match the question start and insert placeholder if not exists
        // Looks for <span class="question-number">KEY</span>
        // And checks if placeholder is already there in the vicinity

        const qRegex = new RegExp(`(<span class="question-number">${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</span>)([\\s\\S]*?)(<ul class="options"|<div class="or-divider"|<div class="solution-box"|<\\/div>)`, 'g');

        // We replace by putting the placeholder after the text, but before options/solution/divider
        // Note: The capture group $2 is the question text.

        // Only replace if we don't already see "image-placeholder" in the match
        if (!content.match(new RegExp(`<span class="question-number">${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</span>[\\s\\S]*?image-placeholder`))) {
            content = content.replace(qRegex, (match, p1, p2, p3) => {
                // p1: Q number span
                // p2: text content
                // p3: next tag
                return `${p1}${p2}\n${placeholder}\n${p3}`;
            });
            console.log(`Inserted placeholder for ${key}`);
        } else {
            console.log(`Placeholder already exists for ${key}`);
        }
    });

    fs.writeFileSync(sourcePath, content, 'utf8');
    console.log('Source file updated with placeholders.');

} catch (err) {
    console.error(err);
}
