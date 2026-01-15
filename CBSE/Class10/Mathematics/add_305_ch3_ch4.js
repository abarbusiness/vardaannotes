const fs = require('fs');
const path = require('path');

// 30-5 Paper Set Questions
const questionsToAdd = {
    '03PairofLinearEquationsinTwoVariables': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q25 (a).</span> 2kg apples + 1kg grapes = ₹320. 4kg apples + 2kg grapes = ₹600. Check consistency.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q25 (b).</span> Solve: \\(\\sqrt{2}x + \\sqrt{3}y = 5\\) and \\(\\sqrt{3}x - \\sqrt{8}y = -\\sqrt{6}\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> Eq1: \\(2x + y = 320\\). Eq2: \\(4x + 2y = 600 \\Rightarrow 2x + y = 300\\).<br>Ratios: \\(a_1/a_2 = 1/2, b_1/b_2 = 1/2, c_1/c_2 = 320/600 \\neq 1/2\\).<br>Parallel lines. <strong>Inconsistent (No Solution)</strong>.<br><br><strong>(b):</strong> Note \\(\\sqrt{8} = 2\\sqrt{2}\\). Mult Eq1 by \\(\\sqrt{3}\\) and Eq2 by \\(\\sqrt{2}\\). Subtracting gives \\(y = \\sqrt{3}\\).<br>Substitute back: \\(x = \\sqrt{2}\\).<br><strong>Ans: \\(x = \\sqrt{2}, y = \\sqrt{3}\\)</strong>.</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q31.</span> Graph \\(2x + 3y = 6\\), \\(x + y - 1 = 0\\). Sum of ordinates where lines meet y-axis?</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Line 1 (\\(2x + 3y = 6\\)) cuts y-axis (\\(x = 0\\)) at \\(3y = 6 \\Rightarrow y = 2\\).<br>Line 2 (\\(x + y = 1\\)) cuts y-axis at \\(y = 1\\).<br><strong>Sum of ordinates = 2 + 1 = 3</strong>.<br>Intersection of lines: \\(x = -3, y = 4\\).</div>
            </div>`,

    '04QuadraticEquations': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q13.</span> Which is a Quadratic Equation?
                    <ul class="options">
                        <li>(A) \\((x + 1/x)^2 = 2\\)</li>
                        <li>(B) \\((x - \\sqrt{x})^2 + 2x\\sqrt{x} = 0\\)</li>
                        <li>(C) \\((x + 1)^3 = (1 - x)^3\\)</li>
                        <li>(D) \\((\\sqrt{x} + 1)^2 = x^2\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">(A) becomes \\(x^4 + ...\\) (Biquadratic).<br>(B) expands to \\(x^2 + x - 2x\\sqrt{x} + 2x\\sqrt{x} = 0 \\Rightarrow x^2 + x = 0\\). This is Quadratic.<br>(D) has \\(\\sqrt{x}\\) term upon expansion.<br><strong>Correct Option: (B)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q14.</span> \\(x^2 + bx + b = 0\\) has distinct real roots. \\(b\\) can be:
                    <ul class="options">
                        <li>(A) 0</li>
                        <li>(B) 4</li>
                        <li>(C) 3</li>
                        <li>(D) -3</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(D > 0 \\Rightarrow b^2 - 4(1)(b) > 0 \\Rightarrow b(b - 4) > 0\\).<br>\\(b\\) must be \\(< 0\\) or \\(> 4\\).<br>0, 4, 3 are not valid. -3 satisfies \\(b < 0\\).<br><strong>Correct Option: (D)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q35 (a).</span> Number is \\(7\\times\\)(sum of digits) and \\(5\\times\\)(product) + 2.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q35 (b).</span> Equal roots for \\((p + 4)x^2 - (p + 1)x + 1 = 0\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> Num \\(10x + y\\). \\(10x + y = 7(x + y) \\Rightarrow x = 2y\\).<br>\\(10x + y = 5xy + 2 \\Rightarrow 21y = 10y^2 + 2\\). \\(10y^2 - 21y + 2 = 0\\).<br>\\(y = 2\\) or \\(0.1\\). \\(y = 2 \\Rightarrow x = 4\\). <strong>Number: 42</strong>.<br><br><strong>(b):</strong> \\(D = 0 \\Rightarrow (p+1)^2 - 4(p+4) = 0 \\Rightarrow p^2 - 2p - 15 = 0\\).<br>\\((p-5)(p+3) = 0 \\Rightarrow p = 5\\) or \\(-3\\).<br>If \\(p = 5 \\Rightarrow x = 1/3\\). If \\(p = -3 \\Rightarrow x = -1\\).</div>
            </div>`
};

// Process each chapter
Object.keys(questionsToAdd).forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${chapter}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Find the pattern: </div>\r\n        </div>\r\n\r\n        <!-- 2024 -->
    const searchPattern = /(\s*<\/div>\r?\n\s*<\/div>\r?\n\r?\n\s*<!-- 2024 -->)/;
    const match = content.match(searchPattern);

    if (match) {
        const insertPoint = content.indexOf(match[0]);
        const newContent = content.slice(0, insertPoint) + questionsToAdd[chapter] + '\n            </div>\n        </div>\n\n        <!-- 2024 -->' + content.slice(insertPoint + match[0].length);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${chapter}`);
    } else {
        console.log(`Pattern not found: ${chapter}`);
    }
});

console.log('Done!');
