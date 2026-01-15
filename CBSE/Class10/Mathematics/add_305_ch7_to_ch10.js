const fs = require('fs');
const path = require('path');

// 30-5 Questions for Chapters 7-10
const questionsToAdd = {
    '07CoordinateGeometry': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q15.</span> In the following figure, P and Q are points of trisection of line segment AB. The value of \\(\\frac{AB}{PB} =\\)
                    <div class="image-placeholder">[Image: 2025-30-5-15]</div>
                    <ul class="options">
                        <li>(A) 1</li>
                        <li>(B) 1.5</li>
                        <li>(C) \\(\\frac{2}{3}\\)</li>
                        <li>(D) 2</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Since P, Q are points of trisection, \\(AP = PQ = QB\\).<br>Let each segment be \\(k\\). Then \\(AB = 3k\\) and \\(PB = PQ + QB = 2k\\).<br>Ratio \\(\\frac{AB}{PB} = \\frac{3k}{2k} = 1.5\\).<br><strong>Correct Option: (B) 1.5</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q21.</span> The coordinates of the end points of the line segment AB are \\(A(-2, -2)\\) and \\(B(2, -4)\\). P is the point on AB such that \\(BP = \\frac{4}{7}AB\\). Find the coordinates of point P.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Given \\(BP = \\frac{4}{7}AB\\). This means \\(\\frac{BP}{AB} = \\frac{4}{7}\\).<br>\\(AP = AB - BP = AB - \\frac{4}{7}AB = \\frac{3}{7}AB\\).<br>Ratio \\(AP : PB = 3 : 4\\), so \\(m = 3, n = 4\\).<br>Coordinates of P: \\(\\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)\\)<br>\\(x = \\frac{3(2) + 4(-2)}{3+4} = \\frac{6-8}{7} = \\frac{-2}{7}\\)<br>\\(y = \\frac{3(-4) + 4(-2)}{3+4} = \\frac{-12-8}{7} = \\frac{-20}{7}\\)<br><strong>\\(P\\left(-\\frac{2}{7}, -\\frac{20}{7}\\right)\\)</strong>.</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q27.</span> Find a relation between x and y such that point \\(P(x, y)\\) is equidistant from the points \\(A(3, 5)\\) and \\(B(7, 1)\\). Hence, write the coordinates of the points on x-axis and y-axis which are equidistant from points A and B.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(PA = PB \\Rightarrow PA^2 = PB^2\\).<br>\\((x-3)^2 + (y-5)^2 = (x-7)^2 + (y-1)^2\\).<br>\\(x^2 - 6x + 9 + y^2 - 10y + 25 = x^2 - 14x + 49 + y^2 - 2y + 1\\).<br>\\(-6x - 10y + 34 = -14x - 2y + 50\\).<br>\\(8x - 8y = 16 \\Rightarrow x - y = 2\\). (Relation)<br><br>On x-axis, \\(y = 0 \\Rightarrow x = 2\\). Point \\((2, 0)\\).<br>On y-axis, \\(x = 0 \\Rightarrow -y = 2 \\Rightarrow y = -2\\). Point \\((0, -2)\\).</div>
            </div>`,

    '08IntroductiontoTrigonometry': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q3.</span> The value of \\((1 - 2\\sin^2 60°)\\) is same as that of:
                    <ul class="options">
                        <li>(A) \\(\\sin 30°\\)</li>
                        <li>(B) \\(-\\sin 30°\\)</li>
                        <li>(C) \\(\\cos 60°\\)</li>
                        <li>(D) \\(-\\cos 30°\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(1 - 2\\sin^2 60° = 1 - 2\\left(\\frac{\\sqrt{3}}{2}\\right)^2 = 1 - 2\\left(\\frac{3}{4}\\right) = 1 - \\frac{3}{2} = -\\frac{1}{2}\\).<br>Check options: \\(-\\sin 30° = -\\frac{1}{2}\\).<br><strong>Correct Option: (B) \\(-\\sin 30°\\)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q19.</span> <strong>Assertion (A):</strong> For an acute angle \\(\\theta\\), value of \\(\\csc \\theta\\) cannot be \\(\\frac{1}{\\sqrt{2}}\\).<br>
                    <strong>Reason (R):</strong> \\(\\csc \\theta \\geq 1\\) for \\(0° < \\theta \\leq 90°\\).
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\frac{1}{\\sqrt{2}} \\approx 0.707\\).<br>Since \\(\\sin \\theta \\leq 1\\), \\(\\csc \\theta = 1/\\sin \\theta \\geq 1\\).<br>Thus \\(\\csc \\theta\\) cannot be 0.707.<br>Both A and R are true, and R explains A.<br><strong>Correct Option: (A) Both Assertion (A) and Reason (R) are true...</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q22 (a).</span> It is given that \\(\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B\\). Use it to find the value of \\(\\sin 15°\\).</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q22 (b).</span> If \\(\\sin A = y\\), then express \\(\\cos A\\) and \\(\\tan A\\) in terms of y.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> Let \\(A = 45°, B = 30°\\).<br>\\(\\sin(45 - 30) = \\sin 45 \\cos 30 - \\cos 45 \\sin 30\\).<br>\\(\\sin 15 = \\left(\\frac{1}{\\sqrt{2}}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) - \\left(\\frac{1}{\\sqrt{2}}\\right)\\left(\\frac{1}{2}\\right)\\).<br>\\(= \\frac{\\sqrt{3} - 1}{2\\sqrt{2}}\\).<br><br><strong>(b):</strong> \\(\\cos A = \\sqrt{1 - \\sin^2 A} = \\sqrt{1 - y^2}\\).<br>\\(\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{y}{\\sqrt{1-y^2}}\\).</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q28 (a).</span> Prove the following trigonometric identity:<br>\\(\\frac{1 + \\csc A}{\\csc A} = \\frac{\\cos^2 A}{1 - \\sin A}\\)</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q28 (b).</span> Let \\(2A + B\\) and \\(A + 2B\\) be acute angles such that \\(\\sin(2A + B) = \\frac{\\sqrt{3}}{2}\\) and \\(\\tan(A + 2B) = 1\\). Find the value of \\(\\cot(4A - 7B)\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> LHS = \\(\\frac{1}{\\csc A} + 1 = \\sin A + 1\\).<br>RHS = \\(\\frac{1 - \\sin^2 A}{1 - \\sin A} = \\frac{(1-\\sin A)(1+\\sin A)}{1-\\sin A} = 1 + \\sin A\\).<br>LHS = RHS.<br><br><strong>(b):</strong> \\(\\sin(2A+B) = \\sin 60° \\Rightarrow 2A + B = 60°\\).<br>\\(\\tan(A+2B) = \\tan 45° \\Rightarrow A + 2B = 45°\\).<br>Solving: \\(4A + 2B = 120°\\). Subtract \\(A + 2B = 45°\\): \\(3A = 75° \\Rightarrow A = 25°\\).<br>\\(B = 60 - 2(25) = 10°\\).<br>\\(4A - 7B = 4(25) - 7(10) = 100 - 70 = 30°\\).<br>\\(\\cot 30° = \\sqrt{3}\\).</div>
            </div>`,

    '09SomeApplicationsofTrigonometry': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q4.</span> An observer 1.8 m tall stands away from a chimney at a distance of 38.2 m along the ground. The angle of elevation of top of chimney from the eyes of observer is \\(45°\\). The height of chimney above the ground is:
                    <ul class="options">
                        <li>(A) 38.2 m</li>
                        <li>(B) 36.4 m</li>
                        <li>(C) 40 m</li>
                        <li>(D) \\((38.2)\\sqrt{2}\\) m</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Let height of chimney above eye level be \\(h\\).<br>\\(\\tan 45° = h/38.2 \\Rightarrow 1 = h/38.2 \\Rightarrow h = 38.2\\) m.<br>Total height = \\(h + \\text{observer height} = 38.2 + 1.8 = 40.0\\) m.<br><strong>Correct Option: (C) 40 m</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q36.</span> Passenger boarding stairs, sometimes referred to as boarding ramps, stair cars or aircraft steps, provide a mobile means to travel between the aircraft doors and the ground. Larger aircraft have door sills 5 to 20 feet (1 foot = 30 cm) high. Stairs facilitate safe boarding and de-boarding.<br><br>
                    An aircraft has a door sill at a height of 15 feet above the ground. A stair car is placed at a horizontal distance of 15 feet from the plane.
                    <div class="image-placeholder">[Image: 2025-30-5-36]</div>
                    Based on given information, answer the questions given in part (i) and (ii).<br>
                    (i) Find the angle at which stairs are inclined to reach the door sill 15 feet high above the ground.<br>
                    (ii) Find the length of stairs used to reach the door sill.<br>
                    Further, answer any one of the following questions:<br>
                    (iii) (a) If the 20 feet long stairs is inclined at an angle of \\(60°\\) to reach the door sill, then find the height of the door sill above the ground. (use \\(\\sqrt{3} = 1.732\\))
                    <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                    (iii) (b) What should be the shortest possible length of stairs to reach the door sill of the plane 20 feet above the ground, if the angle of elevation cannot exceed \\(30°\\)? Also, find the horizontal distance of base of stair car from the plane.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i)</strong> Height \\(P = 15\\), Base \\(B = 15\\). \\(\\tan \\theta = P/B = 15/15 = 1 \\Rightarrow \\theta = 45°\\).<br><br><strong>(ii)</strong> Length of stairs \\(H\\). \\(\\sin 45° = P/H \\Rightarrow 1/\\sqrt{2} = 15/H \\Rightarrow H = 15\\sqrt{2}\\) feet.<br><br><strong>(iii)(a)</strong> \\(H = 20, \\theta = 60°\\). Height \\(h = 20 \\sin 60° = 20(\\sqrt{3}/2) = 10\\sqrt{3} = 17.32\\) feet.<br><br><strong>(iii)(b)</strong> Height \\(P = 20, \\theta_{max} = 30°\\). For shortest stairs, use max angle.<br>\\(\\sin 30° = 20/L \\Rightarrow 1/2 = 20/L \\Rightarrow L = 40\\) feet.<br>Horizontal distance \\(B\\): \\(\\tan 30° = 20/B \\Rightarrow 1/\\sqrt{3} = 20/B \\Rightarrow B = 20\\sqrt{3}\\) feet.</div>
            </div>`,

    '10Circles': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q1.</span> Which of the following statements is false?
                    <ul class="options">
                        <li>(A) Infinite number of tangents can be drawn to a circle</li>
                        <li>(B) Infinite number of tangents can be drawn to a circle from a point outside the circle</li>
                        <li>(C) Infinite number of secants can be drawn to a circle from a point outside the circle</li>
                        <li>(D) Angle between tangent and diameter at point of contact is \\(90°\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">From an external point, exactly two tangents can be drawn to a circle, not infinite.<br><strong>Correct Option: (B)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q2.</span> In the adjoining figure, PA and PB are tangents to a circle with centre O. The measure of angle APB is:
                    <div class="image-placeholder">[Image: 2025-30-5-2]</div>
                    <ul class="options">
                        <li>(A) \\(210°\\)</li>
                        <li>(B) \\(150°\\)</li>
                        <li>(C) \\(105°\\)</li>
                        <li>(D) \\(30°\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Standard property: \\(\\angle APB + \\angle AOB = 180°\\).<br>Assuming the major angle at center is 210°, then internal \\(\\angle AOB = 360 - 210 = 150°\\).<br>Then \\(\\angle APB = 180 - 150 = 30°\\).<br><strong>Correct Option: (D) 30°</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q5.</span> In the adjoining figure, the sum of radii of two concentric circles is 16 cm. The length of chord AB which touches the inner circle at P is 16 cm. The difference of the radii of the given circles is:
                    <div class="image-placeholder">[Image: 2025-30-5-5]</div>
                    <ul class="options">
                        <li>(A) 8 cm</li>
                        <li>(B) 4 cm</li>
                        <li>(C) 2 cm</li>
                        <li>(D) 3 cm</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Let radii be \\(R\\) and \\(r\\). Given \\(R + r = 16\\).<br>Chord AB is tangent to inner circle at P, so \\(OP \\perp AB\\) and P bisects AB. \\(AP = 8\\).<br>In \\(\\Delta OPA\\): \\(R^2 = r^2 + 8^2 \\Rightarrow R^2 - r^2 = 64\\).<br>\\((R+r)(R-r) = 64\\).<br>\\(16(R-r) = 64 \\Rightarrow R - r = 4\\).<br><strong>Correct Option: (B) 4 cm</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q29.</span> In the adjoining figure, XY and \\(X'Y'\\) are parallel tangents to a circle with centre O. Another tangent AB touches the circle at C intersecting XY at A and \\(X'Y'\\) at B. Prove that AB subtends right angle at the centre of the circle; or \\(\\angle AOB = 90°\\).
                    <div class="image-placeholder">[Image: 2025-30-5-29]</div>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Join OC. In \\(\\Delta OPA\\) and \\(\\Delta OCA\\):<br>\\(OP = OC\\) (radii), \\(OA = OA\\) (common), \\(AP = AC\\) (tangents from A).<br>\\(\\Delta OPA \\cong \\Delta OCA \\Rightarrow \\angle POA = \\angle COA\\). Let this be \\(x\\).<br>Similarly, \\(\\Delta OQB \\cong \\Delta OCB \\Rightarrow \\angle QOB = \\angle COB\\). Let this be \\(y\\).<br>Line POQ is diameter (straight line), so \\(2x + 2y = 180°\\).<br>\\(x + y = 90°\\).<br>\\(\\angle AOB = \\angle COA + \\angle COB = x + y = 90°\\).</div>
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

    // Check if 30-5 already added
    if (content.includes('30-5 Paper Set')) {
        console.log(`Already has 30-5: ${chapter}`);
        return;
    }

    // Find the pattern: </div>\r\n        </div>\r\n\r?\n        <!-- 2024 --> or similar
    const searchPattern = /(\s*<\/div>\s*\r?\n\s*<\/div>\s*\r?\n\r?\n\s*<!-- 2024 -->)/;
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
