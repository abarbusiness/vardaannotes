
const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const imageDir = path.join(baseDir, "PYQ Images for Science");
// Relative path from [Chapter]/PYQ.html to Image Folder:
// ../../PYQ Images for Science/
const relImagePath = "../../PYQ Images for Science/";

// Mapped images from audit
const mappings = [
    { file: '2025-31-1-QuestionNumber2.png', chapter: '01ChemicalReactionsandEquations', meta: '31/1 &middot; Q2', part: '' },
    { file: '2025-31-1-QuestionNumber25.png', chapter: '01ChemicalReactionsandEquations', meta: '31/1 &middot; Q25', part: '' },
    { file: '2025-31-1-QuestionNumber3.png', chapter: '02AcidsBasesandSalts', meta: '31/1 &middot; Q3', part: '' },
    { file: '2025-31-2-QuestionNumber39.png', chapter: '02AcidsBasesandSalts', meta: '31/2 &middot; Q39', part: '' },
    { file: '2025-31-5-QuestionNumber33b.png', chapter: '02AcidsBasesandSalts', meta: '31/5 &middot; Q33', part: 'b' },
    { file: '2025-31-3-QuestionNumber3.png', chapter: '03MetalsAndNonMetals', meta: '31/3 &middot; Q3', part: '' },
    { file: '2025-31-5-QuestionNumber38.png', chapter: '04CarbonAndItsCompounds', meta: '31/5 &middot; Q38', part: '' },
    { file: '2025-31-1-QuestionNumber35b.png', chapter: '07HowDoOrganismsReproduce', meta: '31/1 &middot; Q35', part: 'b' },
    { file: '2025-31-3-QuestionNumber36a(i).png', chapter: '07HowDoOrganismsReproduce', meta: '31/3 &middot; Q36', part: 'a(i)' },
    { file: '2025-31-3-QuestionNumber36b(i).png', chapter: '07HowDoOrganismsReproduce', meta: '31/3 &middot; Q36', part: 'b(i)' },
    { file: '2025-31-4-QuestionNumber35a.png', chapter: '07HowDoOrganismsReproduce', meta: '31/4 &middot; Q35', part: 'a' },
    { file: '2025-31-5-QuestionNumber39.png', chapter: '08HeredityandEvolution', meta: '31/5 &middot; Q39', part: '' },
    { file: '2025-31-2-QuestionNumber12.png', chapter: '09LightReflectionandRefraction', meta: '31/2 &middot; Q12', part: '' },
    { file: '2025-31-2-QuestionNumber38.png', chapter: '09LightReflectionandRefraction', meta: '31/2 &middot; Q38', part: '' },
    { file: '2025-31-3-QuestionNumber26.png', chapter: '11Electricity', meta: '31/3 &middot; Q26', part: '' },
    { file: '2025-31-3-QuestionNumber37FirstImage.png', chapter: '11Electricity', meta: '31/3 &middot; Q37', part: 'FirstImage' },
    { file: '2025-31-3-QuestionNumber37secondimage.png', chapter: '11Electricity', meta: '31/3 &middot; Q37', part: 'secondimage' },
    { file: '2025-31-5-QuestionNumber22.png', chapter: '11Electricity', meta: '31/5 &middot; Q22', part: '' },
    { file: '2025-31-S-QuestionNumber38.png', chapter: '11Electricity', meta: '31/S &middot; Q38', part: '' },
    { file: '2025-31-3-QuestionNumber32b.png', chapter: '12MagneticEffectsofElectricCurrent', meta: '31/3 &middot; Q32', part: 'b' },
    { file: '2025-31-4-QuestionNumber34a(i).png', chapter: '12MagneticEffectsofElectricCurrent', meta: '31/4 &middot; Q34', part: 'a(i)' },
    { file: '2025-31-4-QuestionNumber34b(i).png', chapter: '12MagneticEffectsofElectricCurrent', meta: '31/4 &middot; Q34', part: 'b(i)' },
    { file: '2025-31-S-QuestionNumber33.png', chapter: '12MagneticEffectsofElectricCurrent', meta: '31/S &middot; Q33', part: '' },
    { file: '2025-31-2-QuestionNumber34a (i).png', chapter: '13OurEnvironment', meta: '31/2 &middot; Q34', part: 'a (i)' },
    { file: '2025-31-2-QuestionNumber34a (iii).png', chapter: '13OurEnvironment', meta: '31/2 &middot; Q34', part: 'a (iii)' },
    { file: '2025-31-2-QuestionNumber7.png', chapter: '13OurEnvironment', meta: '31/2 &middot; Q7', part: '' },
    { file: '2025-31-5-QuestionNumber14.png', chapter: '13OurEnvironment', meta: '31/5 &middot; Q14', part: '' }
];

let processedCount = 0;

// Group by chapter to minimize file open/writes
const chapterMap = {};
mappings.forEach(m => {
    if (!chapterMap[m.chapter]) chapterMap[m.chapter] = [];
    chapterMap[m.chapter].push(m);
});

Object.keys(chapterMap).forEach(chapter => {
    const filePath = path.join(baseDir, chapter, 'PYQ.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        chapterMap[chapter].forEach(item => {
            const imgTag = `<img src="${relImagePath}${item.file}" class="question-image" alt="${item.file}" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">`;

            // Find the card starting with this meta
            // <span class="card-meta">31/1 &middot; Q2</span>
            const metaRegex = new RegExp(`<span class="card-meta">${item.meta.replace('.', '\\.')}</span>`, 'g');
            // We need to find the specific instance.
            // Then find the containing <div class="card"> or at least the <div class="question"> following it.

            // Simpler approach: Locate the meta string index.
            const metaIdx = content.indexOf(item.meta);
            if (metaIdx !== -1) {
                // Find start of <div class="question"> after metaIdx
                const qStartIdx = content.indexOf('<div class="question">', metaIdx);
                if (qStartIdx !== -1) {
                    // Find end of question div (or before options/button)
                    // We can look for <ul class="options"> or <button class="sol-toggle">
                    // If subpart is specified, try to find text inside.

                    // Limit search to the next card or end of file
                    const nextCardIdx = content.indexOf('<div class="card"', qStartIdx);
                    const searchLimit = nextCardIdx === -1 ? content.length : nextCardIdx;
                    let insertionPoint = -1;

                    // Part matching logic
                    if (item.part) {
                        // Normalize part string for search: "a(i)" -> "(a) (i)" or similar
                        // User provided: "a(i)", "a (i)", "b", "FirstImage"
                        // We'll search primarily for the Part string as is, or variations.

                        // Try to find the PART string in the content within limit
                        // e.g. "(a) (i)" or "(b)"

                        let searchStr = item.part;
                        // Common variations
                        if (item.part.match(/^[a-z]\(i+\)$/)) {
                            // a(i) -> (a) (i)
                            searchStr = `(${item.part[0]}) (${item.part.substring(2, item.part.length - 1)})`;
                        } else if (item.part.length === 1) {
                            searchStr = `(${item.part})`;
                        }

                        // Look for exactly the part identifier
                        const partIdx = content.indexOf(searchStr, qStartIdx);
                        if (partIdx !== -1 && partIdx < searchLimit) {
                            // Found the part label. Insert AFTER the label (maybe after <br> or newline?)
                            // Let's insert after the line break following the label if possible, or just before next line break.
                            // Safest: Insert after the label text + some context
                            insertionPoint = partIdx + searchStr.length;
                        }
                    }

                    // Fallback: Check for existing placeholders
                    if (insertionPoint === -1) {
                        const phRegex = /<div class="image-placeholder">[^<]+<\/div>/;
                        const chunk = content.substring(qStartIdx, searchLimit);
                        const phMatch = chunk.match(phRegex);
                        if (phMatch) {
                            // Replace placeholder
                            const phFull = phMatch[0];
                            content = content.replace(phFull, imgTag); // WARNING: Globalreplace risk if duplicate ph content
                            // Better to replicate by string parts
                            // We are safe because we update 'content' and use indexes from 'content' which becomes stale.
                            // Actually, let's use string manipulation with indexes.
                            const absPhStart = qStartIdx + phMatch.index;
                            content = content.substring(0, absPhStart) + imgTag + content.substring(absPhStart + phFull.length);
                            modified = true;
                            console.log(`Replaced placeholder for ${item.file}`);
                            return; // Done
                        }
                    }

                    // Fallback 2: Insert at end of question (before options/button)
                    if (insertionPoint === -1) {
                        const optionsIdx = content.indexOf('<ul class="options">', qStartIdx);
                        const btnIdx = content.indexOf('<button class="sol-toggle"', qStartIdx);

                        let endIdx = searchLimit;
                        if (optionsIdx !== -1 && optionsIdx < endIdx) endIdx = optionsIdx;
                        // if btnIdx is before options (unlikely) or options is -1
                        if (btnIdx !== -1 && btnIdx < endIdx) endIdx = btnIdx;

                        insertionPoint = endIdx;
                        console.log(`Inserting at end of question block for ${item.file}`);
                    }
                    else {
                        console.log(`Inserting near part '${item.part}' for ${item.file}`);
                    }

                    if (insertionPoint !== -1) {
                        content = content.substring(0, insertionPoint) + "\n" + imgTag + "\n" + content.substring(insertionPoint);
                        modified = true;
                    }
                }
            } else {
                console.log(`Could not find meta tag: ${item.meta}`);
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            processedCount++;
            console.log(`Updated ${chapter}`);
        }
    }
});

console.log(`Total chapters updated: ${processedCount}`);
