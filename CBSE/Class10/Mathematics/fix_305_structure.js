const fs = require('fs');
const path = require('path');

// Chapters that need fixing
const chapters = [
    '01RealNumbers',
    '02Polynomials',
    '03PairofLinearEquationsinTwoVariables',
    '04QuadraticEquations',
    '05ArithmeticProgressions',
    '06Triangles',
    '07CoordinateGeometry',
    '08IntroductiontoTrigonometry',
    '09SomeApplicationsofTrigonometry',
    '10Circles',
    '11AreasRelatedtoCircles',
    '12SurfaceAreasandVolumes',
    '13Statistics',
    '14Probability'
];

let fixedCount = 0;

chapters.forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${chapter}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if 30-5 Paper Set exists
    if (!content.includes('30-5 Paper Set')) {
        console.log(`No 30-5 content: ${chapter}`);
        return;
    }

    // Fix Pattern 1: Missing </div> before 30-5 comment
    // Look for </div> without the closing card tag before <!-- 30-5 Paper Set -->
    const brokenPattern1 = /(<\/div>\s*)\n(\s*<!-- 30-5 Paper Set -->)/g;
    const hasIssue1 = content.match(brokenPattern1);

    if (hasIssue1) {
        // Check if just single </div> before 30-5 comment (should be </div></div>)
        content = content.replace(brokenPattern1, (match, div, comment) => {
            // Count the indentation
            const indent = '            ';
            return `</div>\n${indent}</div>\n${comment}`;
        });
        console.log(`Fixed pattern1 in: ${chapter}`);
        fixedCount++;
    }

    // Fix Pattern 2: </div> tag inside solution div instead of after it
    // This happens when content looks like </div><!-- 30-5 near solution content

    // Let's look for the actual broken structure and fix it
    // The issue is: <div class="solution">...</div> is NOT closed before <!-- 30-5 Paper Set -->

    // Check for proper structure: each card should have its own container
    // If <!-- 30-5 Paper Set --> appears inside a solution div, we need to add </div></div>

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Fixed ${fixedCount} chapters.`);
console.log('Now checking each file manually...');

// Detailed check for each chapter
chapters.forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<!-- 30-5 Paper Set -->')) {
            // Check previous line
            const prev = lines[i - 1] ? lines[i - 1].trim() : '';
            const prev2 = lines[i - 2] ? lines[i - 2].trim() : '';

            // If previous line is </div> followed by whitespace line, we need another </div>
            // If previous line is solution content (not </div>), we need </div></div>

            if (prev === '</div>') {
                // Check if prev2 is also </div> (card properly closed)
                if (prev2 !== '</div>') {
                    console.log(`${chapter}: Line ${i + 1} - Missing card closing div. Prev2: "${prev2}"`);
                }
            } else if (prev !== '') {
                console.log(`${chapter}: Line ${i + 1} - Previous line is NOT </div>: "${prev}"`);
            }
        }
    }
});

console.log('Done checking!');
