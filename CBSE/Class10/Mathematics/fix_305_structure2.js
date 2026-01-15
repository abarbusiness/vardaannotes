const fs = require('fs');
const path = require('path');

// Chapters that still need fixing - the card div is not closed before 30-5 Paper Set
const chaptersToFix = [
    '07CoordinateGeometry',
    '08IntroductiontoTrigonometry',
    '10Circles',
    '14Probability'
];

chaptersToFix.forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${chapter}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // The issue: </div> appears once before <!-- 30-5 Paper Set --> but needs to appear twice
    // Pattern: </div>\n            </div>\n<!-- 30-5 Paper Set -->
    // Currently: </div>\n            <!-- 30-5 Paper Set --> (missing the card closing </div>)

    // Fix by adding the missing </div> before <!-- 30-5 Paper Set -->
    // Look for: </div>\n</div>\n<!-- 30-5 (already one </div> added by previous fix, need another)

    const pattern = /(<\/div>\r?\n\s*<\/div>\r?\n)(<!-- 30-5 Paper Set -->)/g;

    if (pattern.test(content)) {
        content = content.replace(pattern, (match, divs, comment) => {
            // Add one more </div> to close the card
            return divs + '            </div>\n            ' + comment;
        });
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${chapter}`);
    } else {
        console.log(`Pattern not matched in: ${chapter}`);

        // Try alternative pattern - the solution div ends with </div> immediately before the comment
        const altPattern = /(<\/div>\r?\n)(\s*<!-- 30-5 Paper Set -->)/g;
        content = fs.readFileSync(filePath, 'utf8'); // Re-read

        if (altPattern.test(content)) {
            content = content.replace(altPattern, (match, div, comment) => {
                // Add two </div> tags - one for solution, one for card
                return '</div>\n            </div>\n            ' + comment.trim();
            });
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed with alt pattern: ${chapter}`);
        } else {
            console.log(`Alt pattern also not matched in: ${chapter}`);
        }
    }
});

// Now verify all chapters
const allChapters = [
    '01RealNumbers', '02Polynomials', '03PairofLinearEquationsinTwoVariables',
    '04QuadraticEquations', '05ArithmeticProgressions', '06Triangles',
    '07CoordinateGeometry', '08IntroductiontoTrigonometry',
    '09SomeApplicationsofTrigonometry', '10Circles',
    '11AreasRelatedtoCircles', '12SurfaceAreasandVolumes',
    '13Statistics', '14Probability'
];

console.log('\n=== VERIFICATION ===');
allChapters.forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');

    let issues = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<!-- 30-5 Paper Set -->')) {
            // Count </div> tags in the 3 lines before
            let closingDivCount = 0;
            for (let j = Math.max(0, i - 3); j < i; j++) {
                const matches = lines[j].match(/<\/div>/g);
                if (matches) closingDivCount += matches.length;
            }

            if (closingDivCount < 2) {
                issues.push(`Line ${i + 1}: Only ${closingDivCount} </div> tags before 30-5 comment`);
            }
        }
    }

    if (issues.length > 0) {
        console.log(`${chapter}: ISSUES FOUND`);
        issues.forEach(issue => console.log(`  - ${issue}`));
    } else {
        console.log(`${chapter}: OK`);
    }
});

console.log('\nDone!');
