const fs = require('fs');
const path = require('path');

// 30-5 Questions for all remaining chapters (7-14)
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
                <div class="solution">Given \\(BP = \\frac{4}{7}AB\\). Thus \\(AP = \\frac{3}{7}AB\\).<br>Ratio \\(AP : PB = 3 : 4\\), so \\(m = 3, n = 4\\).<br>\\(x = \\frac{3(2) + 4(-2)}{7} = \\frac{-2}{7}\\), \\(y = \\frac{3(-4) + 4(-2)}{7} = \\frac{-20}{7}\\).<br><strong>\\(P\\left(-\\frac{2}{7}, -\\frac{20}{7}\\right)\\)</strong>.</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q27.</span> Find a relation between x and y such that point \\(P(x, y)\\) is equidistant from \\(A(3, 5)\\) and \\(B(7, 1)\\). Hence, write coordinates of points on x-axis and y-axis equidistant from A and B.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(PA^2 = PB^2\\): \\((x-3)^2 + (y-5)^2 = (x-7)^2 + (y-1)^2\\).<br>Simplifying: \\(8x - 8y = 16 \\Rightarrow x - y = 2\\). (Relation)<br>On x-axis (\\(y=0\\)): \\(x = 2\\). Point \\((2, 0)\\).<br>On y-axis (\\(x=0\\)): \\(y = -2\\). Point \\((0, -2)\\).</div>
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
                <div class="solution">\\(1 - 2(\\frac{\\sqrt{3}}{2})^2 = 1 - \\frac{3}{2} = -\\frac{1}{2} = -\\sin 30°\\).<br><strong>Correct Option: (B)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q19.</span> <strong>Assertion (A):</strong> For an acute angle \\(\\theta\\), \\(\\csc \\theta\\) cannot be \\(\\frac{1}{\\sqrt{2}}\\).<br><strong>Reason (R):</strong> \\(\\csc \\theta \\geq 1\\) for \\(0° < \\theta \\leq 90°\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\frac{1}{\\sqrt{2}} \\approx 0.707 < 1\\). Since \\(\\csc \\theta \\geq 1\\), it cannot be 0.707.<br>Both A and R are true, R explains A.<br><strong>Correct Option: (A)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q22 (a).</span> Given \\(\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B\\). Find \\(\\sin 15°\\).</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q22 (b).</span> If \\(\\sin A = y\\), express \\(\\cos A\\) and \\(\\tan A\\) in terms of y.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> \\(\\sin 15° = \\sin(45-30) = \\frac{1}{\\sqrt{2}}\\cdot\\frac{\\sqrt{3}}{2} - \\frac{1}{\\sqrt{2}}\\cdot\\frac{1}{2} = \\frac{\\sqrt{3}-1}{2\\sqrt{2}}\\).<br><br><strong>(b):</strong> \\(\\cos A = \\sqrt{1-y^2}\\), \\(\\tan A = \\frac{y}{\\sqrt{1-y^2}}\\).</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q28 (a).</span> Prove: \\(\\frac{1 + \\csc A}{\\csc A} = \\frac{\\cos^2 A}{1 - \\sin A}\\)</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q28 (b).</span> If \\(\\sin(2A + B) = \\frac{\\sqrt{3}}{2}\\) and \\(\\tan(A + 2B) = 1\\), find \\(\\cot(4A - 7B)\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> LHS = \\(\\sin A + 1\\). RHS = \\(\\frac{(1-\\sin A)(1+\\sin A)}{1-\\sin A} = 1 + \\sin A\\). LHS = RHS.<br><br><strong>(b):</strong> \\(2A+B=60°, A+2B=45°\\). Solving: \\(A=25°, B=10°\\). \\(4A-7B=30°\\). \\(\\cot 30° = \\sqrt{3}\\).</div>
            </div>`,

    '09SomeApplicationsofTrigonometry': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q4.</span> Observer 1.8 m tall at 38.2 m from chimney. Angle of elevation 45°. Height of chimney is:
                    <ul class="options">
                        <li>(A) 38.2 m</li>
                        <li>(B) 36.4 m</li>
                        <li>(C) 40 m</li>
                        <li>(D) \\(38.2\\sqrt{2}\\) m</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\tan 45° = h/38.2 \\Rightarrow h = 38.2\\) m above eye level.<br>Total = \\(38.2 + 1.8 = 40\\) m.<br><strong>Correct Option: (C) 40 m</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q36.</span> Passenger boarding stairs case study. Aircraft door at 15 ft, stair car at 15 ft horizontal distance.
                    <div class="image-placeholder">[Image: 2025-30-5-36]</div>
                    (i) Angle of stairs? (ii) Length of stairs? (iii)(a) Height if 20 ft stairs at 60°? OR (iii)(b) Shortest stairs for 20 ft height at max 30°?</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i)</strong> \\(\\tan \\theta = 15/15 = 1 \\Rightarrow \\theta = 45°\\).<br><strong>(ii)</strong> \\(H = 15\\sqrt{2}\\) ft.<br><strong>(iii)(a)</strong> \\(h = 20\\sin 60° = 10\\sqrt{3} \\approx 17.32\\) ft.<br><strong>(iii)(b)</strong> \\(L = 40\\) ft, \\(B = 20\\sqrt{3}\\) ft.</div>
            </div>`,

    '10Circles': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q1.</span> Which statement is false?
                    <ul class="options">
                        <li>(A) Infinite tangents can be drawn to a circle</li>
                        <li>(B) Infinite tangents from a point outside circle</li>
                        <li>(C) Infinite secants from a point outside circle</li>
                        <li>(D) Tangent and diameter at contact point are at 90°</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">From external point, exactly two tangents can be drawn, not infinite.<br><strong>Correct Option: (B)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q2.</span> PA and PB are tangents to circle with centre O. Angle APB is:
                    <div class="image-placeholder">[Image: 2025-30-5-2]</div>
                    <ul class="options">
                        <li>(A) 210°</li>
                        <li>(B) 150°</li>
                        <li>(C) 105°</li>
                        <li>(D) 30°</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">If major angle at center is 210°, internal \\(\\angle AOB = 150°\\). \\(\\angle APB = 180 - 150 = 30°\\).<br><strong>Correct Option: (D) 30°</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q5.</span> Two concentric circles with \\(R + r = 16\\) cm. Chord AB = 16 cm touches inner circle. \\(R - r = ?\\)
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
                <div class="solution">\\(AP = 8\\), \\(R^2 - r^2 = 64\\). \\((R+r)(R-r) = 64\\). \\(16(R-r) = 64 \\Rightarrow R - r = 4\\).<br><strong>Correct Option: (B) 4 cm</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q29.</span> XY and X'Y' are parallel tangents. AB touches at C. Prove \\(\\angle AOB = 90°\\).
                    <div class="image-placeholder">[Image: 2025-30-5-29]</div>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\angle POA = \\angle COA = x\\), \\(\\angle QOB = \\angle COB = y\\). POQ is diameter: \\(2x + 2y = 180°\\). \\(\\angle AOB = x + y = 90°\\).</div>
            </div>`,

    '11AreasRelatedtoCircles': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q37.</span> A farmer has a circular piece of land of radius 35 m. He wishes to construct his house in the form of largest possible square within the land.
                    <div class="image-placeholder">[Image: 2025-30-5-37]</div>
                    Based on given information, answer the following:<br>
                    (i) Find the length of wire needed to fence the entire land.<br>
                    (ii) Find the length of each side of the square land on which house will be constructed.<br>
                    (iii) (a) The farmer wishes to grow grass on the shaded region around the house. Find the cost of growing the grass at the rate of ₹50 per square metre.
                    <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                    (iii) (b) Find the ratio of area of land on which house is built to remaining area of circular piece of land.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i)</strong> Circumference \\(C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 35 = 220\\) m.<br><br><strong>(ii)</strong> Diagonal of square = Diameter = 70 m. Side \\(a = 70/\\sqrt{2} = 35\\sqrt{2}\\) m.<br><br><strong>(iii)(a)</strong> Area of circle = \\(\\frac{22}{7} \\times 35 \\times 35 = 3850\\) m².<br>Area of square = \\((35\\sqrt{2})^2 = 2450\\) m².<br>Shaded area = \\(3850 - 2450 = 1400\\) m².<br>Cost = \\(1400 \\times 50 = \\)₹70,000.<br><br><strong>(iii)(b)</strong> Ratio = \\(2450 : 1400 = 245 : 140 = 49 : 28 = 7 : 4\\).</div>
            </div>`,

    '12SurfaceAreasandVolumes': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q6.</span> A cone of height 12 cm and slant height 13 cm is surmounted on a hemisphere having radius equal to that of cone. The entire height of the solid is:
                    <ul class="options">
                        <li>(A) 17 cm</li>
                        <li>(B) 18 cm</li>
                        <li>(C) 22 cm</li>
                        <li>(D) 23 cm</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Radius \\(r = \\sqrt{l^2 - h^2} = \\sqrt{13^2 - 12^2} = \\sqrt{169-144} = 5\\) cm.<br>Height of hemisphere = Radius = 5 cm.<br>Total height = \\(12 + 5 = 17\\) cm.<br><strong>Correct Option: (A) 17 cm</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q33 (a).</span> From one face of a solid wooden cube of side 14 cm, maximum number of hemispheres of diameter 1.4 cm are scooped out. Find the total number of hemispheres and the total surface area of the remaining solid.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q33 (b).</span> From a solid cylinder of height 24 cm and radius 5 cm, two cones of height 12 cm and radius 5 cm are hollowed out. Find the volume and surface area of the remaining solid.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(a):</strong> Diameter = 1.4 cm. Side = 14 cm. Hemispheres along one side = \\(14/1.4 = 10\\).<br>Total hemispheres = \\(10 \\times 10 = 100\\).<br>SA = TSA of Cube - Area of 100 circles + CSA of 100 hemispheres.<br>= \\(6(196) - 100(\\pi r^2) + 100(2\\pi r^2) = 6(196) + 100(\\pi r^2)\\).<br>= \\(1176 + 100(22/7)(0.49) = 1176 + 154 = 1330\\) cm².<br><br><strong>(b):</strong> Volume = \\(\\pi r^2 H - 2(\\frac{1}{3}\\pi r^2 h) = \\pi(25)(24) - \\frac{2}{3}\\pi(25)(12) = 600\\pi - 200\\pi = 400\\pi \\approx 1256\\) cm³.<br>SA = \\(2\\pi rH + 2(\\pi rl) = 2\\pi(5)(24) + 2\\pi(5)(13) = 240\\pi + 130\\pi = 370\\pi \\approx 1162\\) cm².</div>
            </div>`,

    '13Statistics': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q7.</span> If x median + y mean = z mode is the empirical relationship between mean, median and mode, then \\(x + y + z =\\)
                    <ul class="options">
                        <li>(A) 6</li>
                        <li>(B) 3</li>
                        <li>(C) 2</li>
                        <li>(D) 1</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Empirical formula: 3Median = Mode + 2Mean. Rearranging: 3Median - 2Mean = 1Mode.<br>Here \\(x = 3, y = -2, z = 1\\). \\(x + y + z = 3 + (-2) + 1 = 2\\).<br><strong>Correct Option: (C) 2</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q8.</span> Following data shows marks obtained by 100 students. The median will be the average of which two observations?
                    <table class="data-table" style="width:100%; margin:10px 0; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;"><th style="border:1px solid #ddd; padding:5px;">Marks</th><th style="border:1px solid #ddd; padding:5px;">20</th><th style="border:1px solid #ddd; padding:5px;">29</th><th style="border:1px solid #ddd; padding:5px;">28</th><th style="border:1px solid #ddd; padding:5px;">33</th><th style="border:1px solid #ddd; padding:5px;">42</th><th style="border:1px solid #ddd; padding:5px;">38</th><th style="border:1px solid #ddd; padding:5px;">43</th><th style="border:1px solid #ddd; padding:5px;">25</th></tr>
                        <tr><th style="border:1px solid #ddd; padding:5px;">Students</th><td style="border:1px solid #ddd; padding:5px;">6</td><td style="border:1px solid #ddd; padding:5px;">28</td><td style="border:1px solid #ddd; padding:5px;">24</td><td style="border:1px solid #ddd; padding:5px;">15</td><td style="border:1px solid #ddd; padding:5px;">2</td><td style="border:1px solid #ddd; padding:5px;">4</td><td style="border:1px solid #ddd; padding:5px;">1</td><td style="border:1px solid #ddd; padding:5px;">20</td></tr>
                    </table>
                    <ul class="options">
                        <li>(A) 29 and 33</li>
                        <li>(B) 25 and 28</li>
                        <li>(C) 28 and 29</li>
                        <li>(D) 33 and 38</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Arrange in ascending order: 20(6), 25(20), 28(24), 29(28), 33(15)...<br>Cumulative freq: 6, 26, 50, 78...<br>N = 100. Median = avg of 50th and 51st observations.<br>50th observation is 28, 51st observation is 29.<br><strong>Correct Option: (C) 28 and 29</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q34.</span> The following table gives the daily income of 50 cab drivers:
                    <table class="data-table" style="width:100%; margin:10px 0; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;"><th style="border:1px solid #ddd; padding:5px;">Income (₹)</th><th style="border:1px solid #ddd; padding:5px;">500-600</th><th style="border:1px solid #ddd; padding:5px;">600-700</th><th style="border:1px solid #ddd; padding:5px;">700-800</th><th style="border:1px solid #ddd; padding:5px;">800-900</th><th style="border:1px solid #ddd; padding:5px;">900-1000</th></tr>
                        <tr><th style="border:1px solid #ddd; padding:5px;">No. of Drivers</th><td style="border:1px solid #ddd; padding:5px;">12</td><td style="border:1px solid #ddd; padding:5px;">14</td><td style="border:1px solid #ddd; padding:5px;">8</td><td style="border:1px solid #ddd; padding:5px;">6</td><td style="border:1px solid #ddd; padding:5px;">10</td></tr>
                    </table>
                    Find the mean income and the modal income.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Mean:</strong> Class marks: 550, 650, 750, 850, 950.<br>\\(\\Sigma f_i x_i = 12(550) + 14(650) + 8(750) + 6(850) + 10(950) = 36300\\).<br>Mean = \\(36300/50 = 726\\).<br><br><strong>Mode:</strong> Max freq is 14 (Class 600-700). \\(l = 600, h = 100, f_1 = 14, f_0 = 12, f_2 = 8\\).<br>Mode = \\(600 + \\frac{14-12}{28-12-8} \\times 100 = 600 + \\frac{2}{8} \\times 100 = 625\\).</div>
            </div>`,

    '14Probability': `
            <!-- 30-5 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q9.</span> The probability of getting a composite number greater than 3 on throwing a die is:
                    <ul class="options">
                        <li>(A) \\(\\frac{1}{6}\\)</li>
                        <li>(B) \\(\\frac{1}{3}\\)</li>
                        <li>(C) \\(\\frac{1}{2}\\)</li>
                        <li>(D) \\(\\frac{2}{3}\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Total outcomes = {1, 2, 3, 4, 5, 6}. Numbers > 3 are {4, 5, 6}.<br>Composite numbers in this set are {4, 6}. (5 is prime).<br>Favorable outcomes = 2. Probability = \\(2/6 = 1/3\\).<br><strong>Correct Option: (B) \\(\\frac{1}{3}\\)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q16.</span> A bag contains red, blue and green balls in ratio 2:3:4. Probability that ball drawn is not blue:
                    <ul class="options">
                        <li>(A) \\(\\frac{1}{9}\\)</li>
                        <li>(B) \\(\\frac{2}{3}\\)</li>
                        <li>(C) \\(\\frac{1}{3}\\)</li>
                        <li>(D) \\(\\frac{8}{9}\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Let balls be \\(2x, 3x, 4x\\). Total = \\(9x\\).<br>Blue = \\(3x\\). Not blue = \\(9x - 3x = 6x\\).<br>Probability = \\(6x/9x = 2/3\\).<br><strong>Correct Option: (B) \\(\\frac{2}{3}\\)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-5</span>
                </div>
                <div class="question"><span class="question-number">Q24.</span> From a pack of 52 cards, all aces and all kings are removed. A card is drawn at random from the remaining cards. Find the probability that the card so drawn is (i) a face card (ii) a card of red colour.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Removed: 4 Aces + 4 Kings = 8 cards. Remaining Total = \\(52 - 8 = 44\\).<br><br><strong>(i) Face cards:</strong> Originally 12 (4J, 4Q, 4K). Kings removed, so 8 remaining (4J, 4Q).<br>P(Face) = \\(8/44 = 2/11\\).<br><br><strong>(ii) Red cards:</strong> Originally 26. Removed 2 Red Aces + 2 Red Kings = 4.<br>Remaining Red = \\(26 - 4 = 22\\).<br>P(Red) = \\(22/44 = 1/2\\).</div>
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

    // Find the pattern for the end of y2025 section
    const patterns = [
        /(\s*<\/div>\r\n\s*<\/div>\r\n\r\n\r\n\s*<!-- 2025 -->\r\n\s*<!-- 2024 -->)/,
        /(\s*<\/div>\r\n        <\/div>\r\n\r\n\r\n        <!-- 2025 -->\r\n        <!-- 2024 -->)/,
        /(\s*<\/div>\r?\n\s*<\/div>\r?\n\r?\n\s*<!-- 2024 -->)/
    ];

    let matched = false;
    for (const pattern of patterns) {
        const match = content.match(pattern);
        if (match) {
            const insertPoint = content.indexOf(match[0]);
            const newContent = content.slice(0, insertPoint) + questionsToAdd[chapter] + '\n            </div>\n        </div>\n\n        <!-- 2024 -->' + content.slice(insertPoint + match[0].length);
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated: ${chapter}`);
            matched = true;
            break;
        }
    }

    if (!matched) {
        console.log(`Pattern not found: ${chapter}`);
    }
});

console.log('Done!');
