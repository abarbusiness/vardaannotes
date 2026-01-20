
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const imageDir = path.join(baseDir, "PYQ Images for Science");

// 1. Get List of All Images
const allImages = fs.readdirSync(imageDir).filter(f => f.endsWith('.png'));

// 2. Map Images to Target IDs
// 2025-31-1-QuestionNumber28.png -> { series: "31/1", qNum: "Q28", part: null }
// 2025-31-3-QuestionNumber36a(i).png -> { series: "31/3", qNum: "Q36", part: "a(i)" }
// 2025-31-S-QuestionNumber33.png -> { series: "31/S", qNum: "Q33" }

const imageTargets = allImages.map(img => {
    // Standardize parsing
    const match = img.match(/2025-31-([A-Z0-9]+)-QuestionNumber(\d+)(.*)\.png/i);
    if (!match) return null;

    return {
        filename: img,
        series: `31/${match[1]}`, // e.g. 31/1, 31/S
        qNum: `Q${match[2]}`,      // e.g. Q28
        fullId: `31/${match[1]} &middot; Q${match[2]}`, // Exact string in HTML
        rawPart: match[3] ? match[3].toLowerCase() : "" // e.g. "a(i)"
    };
}).filter(i => i !== null);


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

let globalLog = [];

console.log(`Processing ${imageTargets.length} images...`);

// 3. Scan Chapters and Insert
chapters.forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    imageTargets.forEach(target => {
        // Search for the Question ID in this chapter
        // Regex to find the Meta tag: <span class="card-meta">31/6 &middot; Q39</span>
        // We handle slight variations in spaces
        const idRegex = new RegExp(`<span class="card-meta">\\s*${target.series.replace('/', '\\/')}\\s*&middot;\\s*${target.qNum}\\s*<\\/span>`, 'g');

        let match;
        // We use a loop in case of duplicates in the same file (rare but possible)
        // or just to find the position.
        // Actually, we need to locate the CARD containing this meta.

        if (idRegex.test(content)) {
            // Found the Question!
            // Now, is the image already there?
            if (content.includes(target.filename)) {
                globalLog.push(`[${chapter}] Image ${target.filename} already linked.`);
                return;
            }

            // Not linked. Need to insert.
            // Find the insertion point.
            // We need the location of the match.
            // Reset regex
            idRegex.lastIndex = 0;
            const metaMatch = idRegex.exec(content);
            const metaPos = metaMatch.index;

            // Find the end of this card or the solution toggle
            // Search forward from metaPos
            const solTogglePos = content.indexOf('<button class="sol-toggle"', metaPos);
            const nextCardPos = content.indexOf('<div class="card"', metaPos);
            const limitPos = (nextCardPos === -1) ? content.length : nextCardPos;

            // Define insertion boundaries: Meta -> (SolutionToggle OR nextCard)
            // Ideally insert inside <div class="question"> match
            const questionDivPos = content.lastIndexOf('<div class="question">', metaPos); // Usually before meta? No, meta is in card-top. Question is sibling.
            // Structure:
            // <div class="card">
            //    <div class="card-top">...meta...</div>
            //    <div class="question">...TEXT... <button...> ... </div>
            // </div>

            // So find <div class="question"> AFTER metaPos
            const qDivStart = content.indexOf('<div class="question">', metaPos);

            if (qDivStart !== -1 && qDivStart < limitPos) {
                // We are in the correct question block.

                // Strategy 1: Replace Placeholder
                // Check for ANY placeholder in this block
                const blockText = content.substring(qDivStart, limitPos);
                // Regex for placeholder: <div class="image-placeholder">...</div>
                // OR specific placeholders like 2025-31-3-QuestionNumber3

                // We'll replace matching placeholders or generic ones.
                // Constrain: Check if placeholder text matches or is generic "Image"

                // If no placeholder, insert at end of question text (before options or sol toggle)

                const imgTag = `<img src="../../PYQ Images for Science/${target.filename}" class="question-image" alt="${target.qNum} Diagram" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">`;

                // Look for specific placeholder for THIS image if previously added text-based one
                // e.g. "Placeholder: 2025-31-3-QuestionNumber3"
                // Construct strict placeholder regex? No, too risky.

                // Simplest: Replace ANY "image-placeholder" div in this block?
                // Be careful not to replace Solution placeholders if the image is for Question.

                // Question images usually go in <div class="question">...HERE...<button>
                // Solution images go in <div class="question">...<div class="solution">...HERE...</div></div>

                // IMPORTANT: The user said "not placed any images in the solution", so these are QUESTION images.
                // So we insert BEFORE <button class="sol-toggle">

                const solStart = content.indexOf('<button class="sol-toggle"', qDivStart);
                let insertPos = -1;

                if (solStart !== -1 && solStart < limitPos) {
                    // Insert before button
                    insertPos = solStart;
                } else {
                    // Insert before </div> of question (closing question div)
                    // Risks: finding the correct closing div.
                    // Safer: Insert before <div class="solution"> or at end of known block
                    insertPos = blockText.length - 6; // approximate fallback
                }

                if (insertPos !== -1) {
                    // Check if there is an existing placeholder to overwrite
                    const placeholderRegex = /<div class="image-placeholder">[^<]+<\/div>/;
                    const qBlock = content.substring(qDivStart, solStart);
                    const phMatch = placeholderRegex.exec(qBlock);

                    if (phMatch) {
                        // Replace the placeholder
                        const absolutePhStart = qDivStart + phMatch.index;
                        const absolutePhEnd = absolutePhStart + phMatch[0].length;

                        content = content.substring(0, absolutePhStart) + imgTag + content.substring(absolutePhEnd);
                        globalLog.push(`[${chapter}] REPLACED PLACEHOLDER for ${target.filename}`);
                    } else {
                        // Append to question
                        // content = content.substring(0, insertPos) + imgTag + content.substring(insertPos);
                        // Actually, solStart is absolute.
                        content = content.substring(0, solStart) + imgTag + content.substring(solStart);
                        globalLog.push(`[${chapter}] INSERTED ${target.filename}`);
                    }
                    modified = true;
                }
            }
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${chapter}`);
    }
});

console.log("\nSummary of Actions:");
globalLog.forEach(l => console.log(l));
