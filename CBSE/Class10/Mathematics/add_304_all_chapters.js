const fs = require('fs');
const path = require('path');

// 30-4 Questions for all chapters
const questionsToAdd = {
    '01RealNumbers': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q10.</span> If \\(x = ab^3\\) and \\(y = a^3b\\), where a and b are prime numbers, then \\([HCF(x, y) - LCM(x, y)]\\) is equal to:
                    <ul class="options">
                        <li>(a) \\(1 - a^3b^3\\)</li>
                        <li>(b) \\(ab(1 - ab)\\)</li>
                        <li>(c) \\(ab - a^4b^4\\)</li>
                        <li>(d) \\(ab(1 - ab)(1 + ab)\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(x = a^1b^3\\), \\(y = a^3b^1\\).<br>HCF = \\(a^1b^1 = ab\\). LCM = \\(a^3b^3\\).<br>Value = \\(ab - a^3b^3 = ab(1 - a^2b^2)\\).<br>Using \\(x^2 - y^2\\): \\(ab(1 - ab)(1 + ab)\\).<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q11.</span> \\((1 + \\sqrt{3})^2 - (1 - \\sqrt{3})^2\\) is:
                    <ul class="options">
                        <li>(a) a positive rational number</li>
                        <li>(b) a negative integer</li>
                        <li>(c) a positive irrational number</li>
                        <li>(d) a negative irrational number</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Using \\((a+b)^2 - (a-b)^2 = 4ab\\):<br>Here \\(a=1, b=\\sqrt{3}\\).<br>Expression = \\(4(1)(\\sqrt{3}) = 4\\sqrt{3}\\).<br>This is a positive irrational number.<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q20.</span> <strong>Assertion (A):</strong> Unit digit of \\(3^n\\) cannot be an even number for any natural number n.<br><strong>Reason (R):</strong> 2 is not a prime factor of \\(3^n\\) for any natural number n.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Powers of 3 end in 3, 9, 7, 1. None are even, so A is true.<br>For a number to be even, it must have 2 as a prime factor. \\(3^n\\) only has prime factor 3. Thus R is true and explains A.<br><strong>Answer: (a)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q30 (A).</span> Prove that \\(\\sqrt{2}\\) is an irrational number.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q30 (B).</span> Let x and y be two distinct prime numbers and \\(p = x^2y^3, q = xy^4, r = x^5y^2\\). Find the HCF and LCM of p, q and r. Further check if \\(HCF(p, q, r) \\times LCM(p, q, r) = p \\times q \\times r\\) or not.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong> Standard proof by contradiction.<br><br><strong>(B):</strong> \\(p=x^2y^3, q=xy^4, r=x^5y^2\\).<br>HCF = \\(xy^2\\). LCM = \\(x^5y^4\\).<br>HCF \\(\\times\\) LCM = \\(x^6y^6\\).<br>Product \\(pqr = (x^2y^3)(xy^4)(x^5y^2) = x^{2+1+5}y^{3+4+2} = x^8y^9\\).<br>Thus, HCF \\(\\times\\) LCM \\(\\neq pqr\\).</div>
            </div>`,

    '02Polynomials': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q8.</span> Which of the following statements is true for a polynomial \\(p(x)\\) of degree 3?
                    <ul class="options">
                        <li>(a) \\(p(x)\\) has at most two distinct zeroes.</li>
                        <li>(b) \\(p(x)\\) has at least two distinct zeroes.</li>
                        <li>(c) \\(p(x)\\) has exactly three distinct zeroes.</li>
                        <li>(d) \\(p(x)\\) has at most three distinct zeroes.</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">A polynomial of degree n has at most n real zeroes.<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q28.</span> If \\(\\alpha\\) and \\(\\beta\\) are the zeroes of the polynomial \\(ax^2 - x + c\\). Obtain a polynomial whose zeroes are \\(\\alpha - 3\\) and \\(\\beta - 3\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(p(x) = ax^2 - x + c\\). Sum \\(\\alpha+\\beta = 1/a\\). Product \\(\\alpha\\beta = c/a\\).<br>New Sum \\(S = (\\alpha-3) + (\\beta-3) = (\\alpha+\\beta) - 6 = \\frac{1}{a} - 6 = \\frac{1-6a}{a}\\).<br>New Product \\(P = (\\alpha-3)(\\beta-3) = \\alpha\\beta - 3(\\alpha+\\beta) + 9 = \\frac{c}{a} - 3(\\frac{1}{a}) + 9 = \\frac{c-3+9a}{a}\\).<br>Polynomial \\(k[x^2 - Sx + P]\\): \\(a[x^2 - \\frac{1-6a}{a}x + \\frac{c-3+9a}{a}] = ax^2 - (1-6a)x + (c-3+9a)\\).</div>
            </div>`,

    '03PairofLinearEquationsinTwoVariables': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q15.</span> The value of 'p' for which the equations \\(px + 3y = p - 3, 12x + py = p\\) has infinitely many solutions is:
                    <ul class="options">
                        <li>(a) -6 only</li>
                        <li>(b) 6 only</li>
                        <li>(c) \\(\\pm 6\\)</li>
                        <li>(d) Any real number except \\(\\pm 6\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Condition: \\(a_1/a_2 = b_1/b_2 = c_1/c_2\\). \\(p/12 = 3/p = (p-3)/p\\).<br>\\(p^2 = 36 \\Rightarrow p = \\pm 6\\).<br>Also \\(3/p = (p-3)/p \\Rightarrow 3 = p-3 \\Rightarrow p = 6\\).<br>Common value is 6.<br><strong>Answer: (b)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q25.</span> Solve algebraically:<br>\\(73x - 37y = 109\\)<br>\\(37x - 73y = 1\\)</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Add equations: \\(110x - 110y = 110 \\Rightarrow x - y = 1\\) (i).<br>Subtract eq2 from eq1: \\(36x + 36y = 108 \\Rightarrow x + y = 3\\) (ii).<br>Add (i) & (ii): \\(2x = 4 \\Rightarrow x = 2\\).<br>Sub in (ii): \\(2 + y = 3 \\Rightarrow y = 1\\).<br><strong>Solution: \\(x=2, y=1\\)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q31.</span> The perimeter of a rectangle is 70 cm. The length is 5 cm more than twice its breadth. Find dimensions.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(2(l+b) = 70 \\Rightarrow l+b=35\\).<br>\\(l = 2b+5\\).<br>Substitute: \\((2b+5)+b=35 \\Rightarrow 3b=30 \\Rightarrow b=10\\).<br>\\(l = 2(10)+5 = 25\\).<br><strong>Length = 25 cm, Breadth = 10 cm.</strong></div>
            </div>`,

    '04QuadraticEquations': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q12.</span> The value of 'a' for which \\(ax^2 + x + a = 0\\) has equal and positive roots is:
                    <ul class="options">
                        <li>(a) 2</li>
                        <li>(b) -2</li>
                        <li>(c) \\(1/2\\)</li>
                        <li>(d) \\(-1/2\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Equal roots \\(\\Rightarrow D = 0 \\Rightarrow 1^2 - 4(a)(a) = 0 \\Rightarrow 4a^2 = 1 \\Rightarrow a = \\pm 1/2\\).<br>Sum of roots \\(\\alpha+\\beta = -1/a\\). For positive roots, sum must be positive.<br>So \\(-1/a > 0 \\Rightarrow a\\) must be negative.<br>Hence \\(a = -1/2\\).<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q35 (A).</span> The sides of a right triangle are such that the longest side is 4 m more than the shortest side and the third side is 2 m less than the longest side. Find length of each side. Also find difference between numerical values of area and perimeter.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q35 (B).</span> Express \\(\\frac{x-2}{x-3} + \\frac{x-4}{x-5} = \\frac{10}{3} ; (x \\neq 3, 5)\\) as a quadratic equation. Hence find roots.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong> Shortest \\(x\\), Longest \\(x+4\\), Third \\(x+2\\).<br>\\(x^2 + (x+2)^2 = (x+4)^2 \\Rightarrow x^2 - 4x - 12 = 0\\).<br>\\((x-6)(x+2)=0 \\Rightarrow x=6\\).<br>Sides: 6, 8, 10. Area = 24. Perimeter = 24. Diff = 0.<br><br><strong>(B):</strong> Simplify to \\(2x^2 - 19x + 42 = 0\\).<br>Roots \\(x = 6, x = 3.5\\).</div>
            </div>`,

    '05ArithmeticProgressions': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q38.</span> Cable cars: Total length 5000 m. First pole at 200 m, subsequent at 150 m interval. Last pole 300 m from top.
                    <div class="image-placeholder">[Image: 2025-30-04-38]</div>
                    Answer:<br>(i) Distance of 10th pole?<br>(ii) Distance between 15th and 25th pole?<br>(iii)(a) Time to reach 15th pole from top at 5 m/s?<br>OR (iii)(b) Total number of poles?</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i)</strong> \\(a_{10} = 200 + 9(150) = 1550\\) m.<br><strong>(ii)</strong> \\(10d = 1500\\) m.<br><strong>(iii)(b)</strong> Last pole pos = \\(5000-300=4700\\). \\(200+(n-1)150=4700 \\Rightarrow n=31\\).<br><strong>(iii)(a)</strong> 15th from top corresponds to 17th from base. Pos = 2600. Dist from top = 2400. Time = 480s.</div>
            </div>`,

    '06Triangles': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q7.</span> E and F are points on sides AB and AC of \\(\\Delta ABC\\) such that \\(\\frac{AE}{EB} = \\frac{AF}{FC} = \\frac{1}{2}\\). True relation is:
                    <ul class="options">
                        <li>(a) \\(EF = 2BC\\)</li>
                        <li>(b) \\(BC = 2EF\\)</li>
                        <li>(c) \\(EF = 3BC\\)</li>
                        <li>(d) \\(BC = 3EF\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">By BPT, \\(EF||BC\\). \\(\\Delta AEF \\sim \\Delta ABC\\).<br>Ratio \\(AE/AB = 1/(1+2) = 1/3\\).<br>So \\(EF/BC = 1/3 \\Rightarrow BC = 3EF\\).<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q16.</span> \\(\\Delta ABC \\sim \\Delta RQP\\). \\(\\angle A = 80°, \\angle B = 60°\\). \\(\\angle C\\) is:
                    <div class="image-placeholder">[Image: 2025-30-04-16]</div>
                    <ul class="options">
                        <li>(a) 140°</li>
                        <li>(b) 80°</li>
                        <li>(c) 60°</li>
                        <li>(d) 40°</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\angle C = 180 - (80+60) = 40°\\).<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q32 (A).</span> (i) Prove \\(\\Delta ADC \\sim \\Delta PSR\\). (ii) Find PS if AD=4. (iii) Ratio of areas.</div>
                <div style="text-align: center; font-weight: bold; margin: 1rem 0; color: var(--accent-primary);">OR</div>
                <div class="question"><span class="question-number">Q32 (B).</span> State BPT. Use it to prove \\(\\frac{AB}{BC} = \\frac{DE}{EF}\\) for three parallel lines cut by transversals.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong> Ratio of altitudes = Ratio of sides = 3:5. PS = 20/3. Area ratio = 9:25.</div>
            </div>`,

    '07CoordinateGeometry': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q13.</span> The distance of point \\(P(1, -1)\\) from x-axis is:
                    <ul class="options">
                        <li>(a) 1</li>
                        <li>(b) -1</li>
                        <li>(c) 0</li>
                        <li>(d) \\(\\sqrt{2}\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Distance is \\(|y| = |-1| = 1\\).<br><strong>Answer: (a)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q22.</span> Find coordinates of C on line AB produced such that \\(AC = 2BC\\). A(-1, 7), B(4, -3).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">C is outside AB. B is midpoint of AC. \\(4 = (-1+x)/2 \\Rightarrow x=9\\). \\(-3 = (7+y)/2 \\Rightarrow y=-13\\).<br><strong>C = (9, -13)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q26.</span> P(x, y), Q(-2, 3), R(2, 3) are vertices of right triangle at P. Find relation between x and y. If y=2, find x.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(PQ^2 + PR^2 = QR^2\\). \\(QR = 4\\).<br>Result: \\(x^2 + (y-3)^2 = 4\\).<br>If \\(y=2\\): \\(x^2 + 1 = 4 \\Rightarrow x = \\pm \\sqrt{3}\\).</div>
            </div>`,

    '08IntroductiontoTrigonometry': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q17.</span> \\(\\sec A = 2 \\cos A\\) is true for A =
                    <ul class="options">
                        <li>(a) 0°</li>
                        <li>(b) 30°</li>
                        <li>(c) 45°</li>
                        <li>(d) 60°</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(1/\\cos A = 2\\cos A \\Rightarrow \\cos^2 A = 1/2 \\Rightarrow \\cos A = 1/\\sqrt{2}\\).<br>A = 45°.<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q18.</span> Which statement is true?
                    <ul class="options">
                        <li>(a) \\(\\sin 20° > \\sin 70°\\)</li>
                        <li>(b) \\(\\sin 20° > \\cos 20°\\)</li>
                        <li>(c) \\(\\cos 20° > \\cos 70°\\)</li>
                        <li>(d) \\(\\tan 20° > \\tan 70°\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Cosine decreases as angle increases. 20 < 70, so \\(\\cos 20 > \\cos 70\\).<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q23.</span> (A) Find x: \\((\\sin A + \\csc A)^2 + (\\cos A + \\sec A)^2 = x + \\tan^2 A + \\cot^2 A\\). OR (B) Evaluate expression.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(A):</strong> Expand: \\(1 + \\csc^2 A + 2 + 1 + \\sec^2 A + 2 = 6 + (1+\\cot^2) + (1+\\tan^2) = 8 + \\tan^2 + \\cot^2\\). Wait, \\(\\sin^2+\\cos^2=1\\), \\(2\\sin\\csc=2\\), \\(2\\cos\\sec=2\\). Sum = \\(1 + 2 + \\csc^2 + 2 + \\sec^2\\). \\(5 + (1+\\cot^2) + (1+\\tan^2) = 7 + \\tan^2 + \\cot^2\\). x = 7.<br><strong>(B):</strong> Result = 1/2.</div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q27.</span> (A) Prove \\(\\frac{\\cos A+\\sin A-1}{\\cos A-\\sin A+1} = \\csc A - \\cot A\\). OR (B) If \\(\\cot\\theta+\\cos\\theta=p, \\cot\\theta-\\cos\\theta=q\\), prove \\(p^2-q^2=4\\sqrt{pq}\\).</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Standard proofs. (B) \\(p^2-q^2 = 4\\cot\\theta\\cos\\theta\\). \\(pq = \\cot^2-\\cos^2 = \\cos^2(\\csc^2-1) = \\cos^2\\cot^2\\). \\(4\\sqrt{pq} = 4\\cos\\cot\\). Matches.</div>
            </div>`,

    '09SomeApplicationsofTrigonometry': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q1.</span> Rope 30m, angle 60°. Height of pole:
                    <ul class="options">
                        <li>(a) \\(10\\sqrt{3}\\)</li>
                        <li>(b) \\(30\\sqrt{3}\\)</li>
                        <li>(c) 15</li>
                        <li>(d) \\(15\\sqrt{3}\\)</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(\\sin 60° = h/30 \\Rightarrow h = 30(\\sqrt{3}/2) = 15\\sqrt{3}\\).<br><strong>Answer: (d)</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q36.</span> Drone ambulance. Drone at Q, 100m above P. Angle of depression to ambulance 30°.
                    <div class="image-placeholder">[Image: 2025-30-04-36]</div>
                    (ii) Distance ambulance to P?<br>(iii)(a) Time for angle 30 to 45?<br>OR (iii)(b) Time to P if T is where angle is 60?</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(ii)</strong> \\(\\tan 30 = 100/d \\Rightarrow d = 100\\sqrt{3} = 173\\) m.<br><strong>(iii)(a)</strong> \\(d_{45} = 100\\). Dist = 73m. Speed = 60km/h = 50/3 m/s. Time = 4.38s.</div>
            </div>`,

    '10Circles': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q5.</span> AC diameter. AB tangent. OD = r. BC equals:
                    <div class="image-placeholder">[Image: 2025-30-04-5]</div>
                    <ul class="options">
                        <li>(a) r</li>
                        <li>(b) 3r/2</li>
                        <li>(c) 2r</li>
                        <li>(d) 4r</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">O is midpoint of AC. OD || BC (both perp to AB). By Midpoint theorem, OD = 1/2 BC.<br>BC = 2r.<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q6.</span> Parallelogram side 5 cm circumscribes circle. Perimeter:
                    <ul class="options">
                        <li>(a) 20 cm</li>
                        <li>(b) < 20</li>
                        <li>(c) > 20 < 40</li>
                        <li>(d) 40</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">It must be a rhombus. All sides equal. \\(4 \\times 5 = 20\\).<br><strong>Answer: (a)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q19.</span> <strong>Assertion:</strong> Tangents at endpoints of diameter are parallel.<br><strong>Reason:</strong> Lengths of tangents from external point are equal.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Both true, but R is not correct explanation for A.<br><strong>Answer: (b)</strong></div>
            </div>
            <div class="card" data-marks="3">
                <div class="card-top">
                    <span class="badge badge-3">3 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q29.</span> Rectangle ABCD circumscribes circle radius 10. Prove square. Find perimeter.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Rectangle circumscribing circle is square. Side = Diameter = 20. Perimeter = 80 cm.</div>
            </div>`,

    '11AreasRelatedtoCircles': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4 (Case Study)</span>
                </div>
                <div class="question"><span class="question-number">Q37.</span> Olympic rings. Rope 44m. OAB equilateral.
                    <div class="image-placeholder">[Image: 2025-30-04-37]</div>
                    (i) Radius?<br>(ii) Angle AOB?<br>(iii) Area shaded or Length of rope around unshaded?</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>(i)</strong> \\(2\\pi r = 44 \\Rightarrow r = 7\\) m.<br><strong>(ii)</strong> 60° (Equilateral).<br><strong>(iii)</strong> Area involves sector - triangle calculation.</div>
            </div>`,

    '12SurfaceAreasandVolumes': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q2.</span> Top face of cube side 7cm, hemispherical depressions radius 0.35cm. Max number?
                    <ul class="options">
                        <li>(a) 400</li>
                        <li>(b) 100</li>
                        <li>(c) 20</li>
                        <li>(d) 10</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Diameter = 0.7cm. Number along side = 7/0.7 = 10. Total = 10x10=100.<br><strong>Answer: (b)</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q33.</span> Bat manufacturing. Cuboid 2m x 0.5m x 0.1m. Cylindrical handle diam 0.1m, height 0.7m. Find Volume and TSA.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Volume = Vol(Cuboid) + Vol(Cylinder) = 0.1 + 0.00175\\pi.<br>TSA calculation involves subtraction of base area of cylinder.</div>
            </div>`,

    '13Statistics': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q3.</span> Cumulative frequency for median is obtained by adding frequencies of:
                    <ul class="options">
                        <li>(a) classes up to median class</li>
                        <li>(b) following classes</li>
                        <li>(c) preceding classes</li>
                        <li>(d) all classes</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Preceding and including current. Answer states (a) classes up to median class.<br><strong>Answer: (a)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q4.</span> Mode=13, Median=11. Mean = ?
                    <ul class="options">
                        <li>(a) 17</li>
                        <li>(b) 7</li>
                        <li>(c) 10</li>
                        <li>(d) 28</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(3Median = Mode + 2Mean\\). \\(33 = 13 + 2M \\Rightarrow 20 = 2M \\Rightarrow M=10\\).<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="5">
                <div class="card-top">
                    <span class="badge badge-5">5 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q34.</span> Absentees record. Days: 2-6, 6-10... Find Mean and Mode.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution"><strong>Mode:</strong> Max freq 11 (2-6). Mode = 5.67.<br><strong>Mean:</strong> 11.3.</div>
            </div>`,

    '14Probability': `
            <!-- 30-4 Paper Set -->
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q9.</span> Letters A to F. Prob vowels on both dice?
                    <ul class="options">
                        <li>(a) 1/4</li>
                        <li>(b) 1/3</li>
                        <li>(c) 1/9</li>
                        <li>(d) 1/36</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">Vowels A, E (2). Prob = 2/6 = 1/3. Both = 1/9.<br><strong>Answer: (c)</strong></div>
            </div>
            <div class="card" data-marks="1">
                <div class="card-top">
                    <span class="badge badge-1">1 Mark</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q14.</span> Red = Black + 10. Prob(Red) = 3/5. Total?
                    <ul class="options">
                        <li>(a) 50</li>
                        <li>(b) 60</li>
                        <li>(c) 80</li>
                        <li>(d) 40</li>
                    </ul>
                </div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">\\(R = x+10, B=x\\). \\((x+10)/(2x+10) = 3/5 \\Rightarrow x=20\\). Total 50.<br><strong>Answer: (a)</strong></div>
            </div>
            <div class="card" data-marks="2">
                <div class="card-top">
                    <span class="badge badge-2">2 Marks</span>
                    <span class="card-meta">30-4</span>
                </div>
                <div class="question"><span class="question-number">Q24.</span> Leap year 2000. Prob: (i) Same birthday (ii) Different.</div>
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">(i) 1/366. (ii) 365/366.</div>
            </div>`
};

Object.keys(questionsToAdd).forEach(chapter => {
    const filePath = path.join(chapter, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${chapter}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('30-4 Paper Set')) {
        console.log(`Already has 30-4: ${chapter}`);
        return;
    }

    // Insert before 2024 section, ensuring we are outside any existing card
    // Look for </div> </div> <!-- 2024 --> or similar structure at year boundary

    const year2024Regex = /(\s*<\/div>\s*<\/div>\s*<!-- 2024 -->)/;

    // Alternative: find end of 30-5 section if it exists
    // But simplest is 'before 2024'

    if (year2024Regex.test(content)) {
        const replacement = '\n            ' + questionsToAdd[chapter].trim() + '\n$1';
        content = content.replace(year2024Regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${chapter}`);
    } else {
        // Try less strict matching if indentation varies
        const looseRegex = /(<!-- 2024 -->)/;
        if (looseRegex.test(content)) {
            // We need to be careful to insert AFTER the last closing div of 2025 section
            // This is risky without strict structure matching
            console.log(`Could not safely match insertion point for: ${chapter}`);
        }
    }
});

console.log('Done!');
