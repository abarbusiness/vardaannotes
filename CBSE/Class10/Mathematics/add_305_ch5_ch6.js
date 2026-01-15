const fs = require('fs');
const path = require('path');

// 30-5 Questions for Chapters 4, 5, 6
const questionsToAdd = {
    '04QuadraticEquations': {
        search: /(\s*<\/div>\s*\r?\n\s*<\/div>\s*\r?\n\r?\n\s*<!-- 2024 -->)/,
        insert: `
            <!-- 30-5 Expansion - Already added, updating Q13 solution -->
        </div>
        </div>

        <!-- 2024 -->`
    },

    '05ArithmeticProgressions': {
        search: /(\s*<\/div>\s*\r?\n\r?\n\s*<!-- 2024 -->)/,
        insert: `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q20.</span> <strong>Assertion (A):</strong> For an A.P. 3, 6, 9, ..., 198, 10th term from the end is 168.<br>
                    <strong>Reason (R):</strong> If 'a' and 'l' are the first term and last term of an A.P. with common difference 'd', then nth term from the end of the given A.P. is \\(l - (n-1)d\\).
                    <ul class="options">
                        <li>(A) Both A and R are true and R is correct explanation of A</li>
                        <li>(B) Both A and R are true, but R is not correct explanation of A</li>
                        <li>(C) A is true, but R is false</li>
                        <li>(D) A is false, but R is true</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(l = 198, d = 3\\).<br>10th term from end = \\(198 - (10-1)(3) = 198 - 27 = 171\\).<br>Assertion states 168, which is incorrect. Reason formula is correct.<br><strong>Correct Option: (D) A is false, but R is true.</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q38.</span> In an equilateral triangle of side 10 cm, equilateral triangles of side 1 cm are formed as shown in the figure below, such that there is one triangle in the first row, three triangles in the second row, five triangles in the third row and so on.
                    <div class="image-placeholder">[Image: 2025-30-5-38]</div>
                    Based on given information, answer the following questions using Arithmetic Progression.<br>
                    (i) How many triangles will be there in bottom most row?<br>
                    (ii) How many triangles will be there in fourth row from the bottom?<br>
                    (iii) (a) Find the total number of triangles of side 1 cm each till 8th row.
                    <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                    (iii) (b) How many more number of triangles are there from 5th row to 10th row than in first 4 rows? Show working.
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Sequence of triangles: 1, 3, 5... This is an AP with \\(a = 1, d = 2\\).<br>Since side is 10cm and small triangles are 1cm, there are 10 rows.<br><br><strong>(i) Bottom row is 10th row:</strong> \\(a_{10} = 1 + (10-1)2 = 1 + 18 = 19\\).<br><br><strong>(ii) 4th row from bottom means 7th row:</strong> (Rows: 10, 9, 8, 7). \\(a_7 = 1 + 6(2) = 13\\).<br><br><strong>(iii)(a) Total triangles in first 8 rows:</strong> \\(S_n = n^2\\) for odd numbers. \\(S_8 = 8^2 = 64\\).<br><br><strong>(iii)(b) Triangles in 5th to 10th row:</strong> \\(S_{10} - S_4 = 10^2 - 4^2 = 100 - 16 = 84\\).<br>Triangles in first 4 rows = \\(S_4 = 16\\).<br>Difference = \\(84 - 16 = 68\\).</div>
            </div>
        </div>

        <!-- 2024 -->`
    },

    '06Triangles': {
        search: /(\s*<\/div>\s*\r?\n\r?\n\s*<!-- 2024 -->)/,
        insert: `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q17.</span> Which of the following statements is false?
                    <ul class="options">
                        <li>(A) Two right triangles are always similar</li>
                        <li>(B) Two squares are always similar</li>
                        <li>(C) Two equilateral triangles are always similar</li>
                        <li>(D) Two circles are always similar</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Right triangles are only similar if corresponding sides are proportional or acute angles are equal. An isosceles right triangle is not similar to a scalene right triangle.<br><strong>Correct Option: (A)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q18.</span> In the adjoining figure, ABCD is a trapezium in which \\(XY \\parallel AB \\parallel CD\\). If \\(AX = \\frac{2}{3}AD\\) then \\(CY : YB =\\)
                    <div class="image-placeholder">[Image: 2025-30-5-18]</div>
                    <ul class="options">
                        <li>(A) 2:3</li>
                        <li>(B) 3:2</li>
                        <li>(C) 1:3</li>
                        <li>(D) 1:2</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">By the property of parallel lines cutting transversals proportionally: \\(\\frac{AX}{XD} = \\frac{BY}{YC}\\).<br>Given \\(AX = \\frac{2}{3}AD \\Rightarrow AX = 2k, AD = 3k \\Rightarrow XD = k\\).<br>Ratio \\(\\frac{AX}{XD} = \\frac{2}{1}\\). So \\(\\frac{BY}{YC} = \\frac{2}{1}\\).<br>The question asks for \\(CY : YB\\), which is the reciprocal \\(1 : 2\\).<br><strong>Correct Option: (D) 1:2</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q23.</span> In triangles ABC and PQR, AD and PS are altitudes such that \\(\\Delta ABD \\sim \\Delta PQS\\) and \\(\\Delta ACD \\sim \\Delta PRS\\). Prove that \\(\\Delta ABC \\sim \\Delta PQR\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">From \\(\\Delta ABD \\sim \\Delta PQS\\): \\(\\frac{AB}{PQ} = \\frac{AD}{PS}\\) and \\(\\angle B = \\angle Q\\).<br>From \\(\\Delta ACD \\sim \\Delta PRS\\): \\(\\frac{AC}{PR} = \\frac{AD}{PS}\\) and \\(\\angle C = \\angle R\\).<br>Combining, \\(\\frac{AB}{PQ} = \\frac{AC}{PR}\\).<br>Also, from \\(\\angle B = \\angle Q\\) and \\(\\angle C = \\angle R\\), \\(\\angle A = \\angle P\\) (Angle sum property).<br>Thus, \\(\\Delta ABC \\sim \\Delta PQR\\) by AAA (or SSS using altitude ratios).</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q32.</span> State the basic proportionality theorem.<br>Use the theorem to do the following:<br>In a triangle ABC, AD is the angle bisector of angle A. BA is produced to E such that \\(CE \\parallel AD\\). Prove that \\(\\frac{BD}{DC} = \\frac{BA}{AC}\\).
                    <div class="image-placeholder">[Image: 2025-30-5-32]</div>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Theorem:</strong> If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.<br><br><strong>Proof:</strong> Since \\(AD \\parallel CE\\) and AC is transversal, \\(\\angle DAC = \\angle ACE\\) (Alternate angles).<br>Since \\(AD \\parallel CE\\) and BE is transversal, \\(\\angle BAD = \\angle AEC\\) (Corresponding angles).<br>Given AD bisects \\(\\angle A\\), so \\(\\angle BAD = \\angle DAC\\).<br>Therefore, \\(\\angle ACE = \\angle AEC\\). In \\(\\Delta ACE\\), sides opposite equal angles are equal, so \\(AC = AE\\).<br>In \\(\\Delta BCE\\), since \\(AD \\parallel CE\\), by BPT: \\(\\frac{BD}{DC} = \\frac{BA}{AE}\\).<br>Substituting \\(AE = AC\\), we get \\(\\frac{BD}{DC} = \\frac{BA}{AC}\\).</div>
            </div>
        </div>

        <!-- 2024 -->`
    }
};

// Process each chapter
Object.keys(questionsToAdd).forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${chapter}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if 30-5 already added
    if (content.includes('30-5 Paper Set') && chapter !== '04QuadraticEquations') {
        console.log(`Already has 30-5: ${chapter}`);
        return;
    }

    const match = content.match(questionsToAdd[chapter].search);
    if (match) {
        const insertPoint = content.indexOf(match[0]);
        const newContent = content.slice(0, insertPoint) + questionsToAdd[chapter].insert + content.slice(insertPoint + match[0].length);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${chapter}`);
    } else {
        console.log(`Pattern not found: ${chapter}`);
    }
});

console.log('Done!');
