const fs = require('fs');
const path = require('path');

const sourcePath = 'source_2025.html';
const basePath = __dirname;

const chapterMap = {
    "Chapter 1": "01RealNumbers",
    "Chapter 2": "02Polynomials",
    "Chapter 3": "03PairofLinearEquationsinTwoVariables",
    "Chapter 4": "04QuadraticEquations",
    "Chapter 5": "05ArithmeticProgressions",
    "Chapter 6": "06Triangles",
    "Chapter 7": "07CoordinateGeometry",
    "Chapter 8": "08IntroductiontoTrigonometry",
    "Chapter 9": "09SomeApplicationsofTrigonometry",
    "Chapter 10": "10Circles",
    "Chapter 11": "11AreasRelatedtoCircles",
    "Chapter 12": "12SurfaceAreasandVolumes",
    "Chapter 13": "13Statistics",
    "Chapter 14": "14Probability"
};

// Image placeholder template for interactive files
const imgPlaceholderInteractive = (qNum) => `
                    <div class="question-image">
                        <img src="images/q${qNum}.png" alt="Question ${qNum} Figure" class="pyq-image">
                    </div>`;

// Image placeholder template for print files
const imgPlaceholderPrint = (qNum) => `
                    <div class="question-image">
                        <img src="images/q${qNum}.png" alt="Question ${qNum} Figure" class="pyq-image">
                    </div>`;

try {
    const htmlContent = fs.readFileSync(sourcePath, 'utf8');
    const chapters = htmlContent.split('class="chapter-section"').slice(1);

    chapters.forEach(chapterChunk => {
        const titleMatch = chapterChunk.match(/<h2>(Chapter \d+):/);
        if (!titleMatch) return;

        const chapKey = titleMatch[1];
        const folderName = chapterMap[chapKey];

        if (!folderName) {
            console.log(`Folder map not found for ${chapKey}`);
            return;
        }

        const targetDir = path.join(basePath, folderName);
        if (!fs.existsSync(targetDir)) {
            console.log(`Directory not found: ${targetDir}`);
            return;
        }

        // Create images folder if not exists
        const imagesDir = path.join(targetDir, 'images');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir);
        }

        console.log(`Processing ${chapKey} -> ${folderName}`);

        const questionBlocks = chapterChunk.split('class="question-block"').slice(1);
        let printHTML = "";
        let solHTML = "";
        let interactiveHTML = "";

        questionBlocks.forEach(block => {
            const marksMatch = block.match(/class="marks">\[(.*?)\]<\/span>/);
            const marksStr = marksMatch ? marksMatch[1] : "1 Mark";
            const marksInt = parseInt(marksStr) || 1;

            const parts = block.split('<div class="or-divider">OR</div>');

            parts.forEach((part, index) => {
                const qMatch = part.match(/class="question-text">([\s\S]*?)<\/div>\s*(?:<div class="solution-box">|<div class="or-divider">|$)/);
                const sMatch = part.match(/class="solution-box">([\s\S]*?)<\/div>\s*(?:<div class="or-divider">|<\/div>\s*<\/div>|$)/);

                if (qMatch) {
                    let q = qMatch[1].trim();
                    let s = sMatch ? sMatch[1].trim() : "";
                    s = s.replace(/<span class="solution-title">Solution:<\/span>/, '').trim();

                    // Extract question number for image naming
                    const qNumMatch = q.match(/Q(\d+[a-z]?)/i);
                    const qNum = qNumMatch ? qNumMatch[1] : 'unknown';

                    // Check if question has image placeholder and convert it
                    const hasImage = part.includes('class="image-placeholder"');
                    let imageHTML = '';
                    if (hasImage) {
                        imageHTML = `<div class="question-image"><img src="images/q${qNum}.png" alt="Question ${qNum} Figure" class="pyq-image"></div>`;
                    }

                    // Remove old image placeholder text from question
                    q = q.replace(/<div class="image-placeholder">[\s\S]*?<\/div>/g, '');

                    if (index > 0) {
                        printHTML += `<div class="or-divider">OR</div>`;
                        solHTML += `<div class="or-divider">OR</div>`;
                    }

                    // --- Print HTML ---
                    printHTML += `
                    <div class='question'>
                        <div class='question-content'>${q}${imageHTML}</div>
                        <span class='marks'>[${marksStr}]</span>
                    </div>`;

                    // --- Sol HTML ---
                    solHTML += `
                    <div class='question-block'>
                        <div class='q-text'>${q}${imageHTML}</div>
                        <div class='solution-step'>${s}</div>
                    </div>`;

                    // --- Interactive HTML ---
                    let badgeClass = "badge-1";
                    if (marksInt === 2) badgeClass = "badge-2";
                    if (marksInt === 3) badgeClass = "badge-3";
                    if (marksInt >= 4) badgeClass = "badge-5";

                    let metaText = "2025";
                    if (index > 0) metaText = "2025 (OR)";

                    interactiveHTML += `
            <div class="card" data-marks="${marksInt}">
                <div class="card-top">
                    <span class="badge ${badgeClass}">${marksStr}</span>
                    <span class="card-meta">${metaText}</span>
                </div>
                <div class="question">${q}${imageHTML}</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">${s}</div>
            </div>`;
                }
            });
        });

        updatePrintFile(path.join(targetDir, 'pyq_print.html'), printHTML, 'print');
        updatePrintFile(path.join(targetDir, 'pyq_solutions_print.html'), solHTML, 'sol');
        updateInteractiveFile(path.join(targetDir, 'pyq.html'), interactiveHTML);

    });

} catch (err) {
    console.error("Error:", err);
}

function updatePrintFile(filePath, newContent, type) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const parts = content.split(/<\/header>[\s\S]*?<footer>/);
    if (parts.length >= 2) {
        let midSection = `</header>\n\n        <div class='section-title'>BOARD EXAM 2025 (Set 30/6/3)</div>${newContent}\n\n        <footer>`;
        fs.writeFileSync(filePath, parts[0] + midSection + parts[1], 'utf8');
        console.log(`Updated ${path.basename(filePath)}`);
    }
}

function updateInteractiveFile(filePath, newContent) {
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping interactive update, file not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Ensure 2025 Tab exists
    if (content.indexOf("switchYear('2025'") === -1) {
        content = content.replace(
            /<div class="tabs">/,
            `<div class="tabs">\n            <button class="tab" onclick="switchYear('2025', this)">2025</button>`
        );
    }

    const yearContainer = `
        <!-- 2025 -->
        <div id="y2025" class="year-content active">
            <div class="section-label">
                <h2>Board Exam 2025</h2>
            </div>
            ${newContent}
        </div>`;

    // Remove existing y2025 if present
    if (content.indexOf('id="y2025"') !== -1) {
        const startMarker = '<div id="y2025"';
        const startIndex = content.indexOf(startMarker);

        if (startIndex !== -1) {
            const nextYearIndex = content.indexOf('<div id="y2024"', startIndex);
            if (nextYearIndex !== -1) {
                let cutEnd = nextYearIndex;
                const commentCheck = content.lastIndexOf('<!--', nextYearIndex);
                if (commentCheck > startIndex) {
                    cutEnd = commentCheck;
                }
                content = content.slice(0, startIndex) + content.slice(cutEnd);
            } else {
                const footerIndex = content.indexOf('<footer', startIndex);
                if (footerIndex !== -1) {
                    content = content.slice(0, startIndex) + content.slice(footerIndex);
                }
            }
        }
    }

    // Insert New Content after filters
    const filtersStart = content.indexOf('class="filters"');
    if (filtersStart !== -1) {
        let filtersEnd = content.indexOf('</div>', filtersStart) + 6;
        content = content.slice(0, filtersEnd) + "\n\n" + yearContainer + content.slice(filtersEnd);
    } else {
        console.log("Could not find filters div in interactive file.");
        return;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Interactive ${path.basename(filePath)}`);
}
