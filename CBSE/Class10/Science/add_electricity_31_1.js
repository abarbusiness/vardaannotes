
const fs = require('fs');
const path = require('path');

// Configuration
const baseDir = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Science";
const electricityFile = path.join(baseDir, "11Electricity\\PYQ.html");
const imageDestDir = path.join(baseDir, "PYQ Images for Science");

// Source Images (User Uploads - verifying paths from metadata)
// Q28 Image (Circuit Diagram)
const q28Src = "C:\\Users\\Ankit Raj Sharma\\.gemini\\antigravity\\brain\\fc92249b-881d-4e7f-a4b1-71ce1bbd274f\\uploaded_image_2_1768897932488.png";
const q28DestName = "2025-31-1-QuestionNumber28.png";

// Copy Image
try {
    if (fs.existsSync(q28Src)) {
        fs.copyFileSync(q28Src, path.join(imageDestDir, q28DestName));
        console.log(`Copied Q28 Image to ${q28DestName}`);
    } else {
        console.log("Warning: Q28 Source Image not found!");
    }
} catch (e) {
    console.log("Error copying image:", e.message);
}

// Question HTML Content
const html31_1 = `
        <!-- 31/1 Series -->
        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/1 &middot; Q22</span>
            </div>
            <div class="question"><span class="question-number">Q22.</span> (a) Consider two lamps A and B of rating 50 W; 220 V and 25 W; 220 V respectively. Find the ratio of the resistances of the two lamps (i.e. \\(R_A : R_B\\)).<br>
                <strong>OR</strong><br>
                (b) Heat produced per second due to a current in a resistor of 4 \\(\\Omega\\) is 400 joules. Calculate the potential difference across the resistor.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a) Ratio of Resistances:</strong><br>
                    Power \\(P = \\frac{V^2}{R} \\Rightarrow R = \\frac{V^2}{P}\\).<br>
                    \\(R_A = \\frac{220^2}{50}\\), \\(R_B = \\frac{220^2}{25}\\).<br>
                    Ratio \\(\\frac{R_A}{R_B} = \\frac{220^2/50}{220^2/25} = \\frac{25}{50} = \\frac{1}{2}\\).<br>
                    <strong>Ratio is 1:2.</strong><br>
                    <hr>
                    <strong>(b) Potential Difference:</strong><br>
                    Heat per second (Power) \\(P = 400\\) J/s = 400 W.<br>
                    \\(R = 4 \\ \\Omega\\).<br>
                    \\(P = \\frac{V^2}{R} \\Rightarrow V^2 = P \\times R = 400 \\times 4 = 1600\\).<br>
                    \\(V = \\sqrt{1600} = 40\\) V.<br>
                    <strong>Potential Difference = 40 V.</strong>
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/1 &middot; Q27</span>
            </div>
            <div class="question"><span class="question-number">Q27.</span> (a) Define one volt potential difference between two points in an electric field.<br>
                (b) Draw a schematic diagram of an electric circuit of a cell of 1.5 V, 5 \\(\\Omega\\) and 10 \\(\\Omega\\) resistor and a plug key, all connected in series. Calculate the current drawn from the cell when the key is closed.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a) One Volt:</strong> Potential difference between two points is said to be 1 volt if 1 joule of work is done in moving a positive charge of 1 coulomb from one point to the other.<br>
                    <strong>(b) Schematic Diagram:</strong><br>
                    <div class="image-placeholder">Solution Diagram</div>
                    <strong>Calculation:</strong><br>
                    Total Resistance \\(R = R_1 + R_2 = 5 + 10 = 15 \\ \\Omega\\).<br>
                    Voltage \\(V = 1.5\\) V.<br>
                    Current \\(I = \\frac{V}{R} = \\frac{1.5}{15} = 0.1\\) A.
                </div>
            </div>
        </div>

        <div class="card" data-marks="3">
            <div class="card-top">
                <span class="badge badge-3">3 Marks</span>
                <span class="card-meta">31/1 &middot; Q28</span>
            </div>
            <div class="question"><span class="question-number">Q28.</span> Consider the following electric circuit :<br>
                <img src="../../PYQ Images for Science/2025-31-1-QuestionNumber28.png" class="question-image" alt="Circuit Diagram" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">
                Calculate the values of the following :<br>
                (a) The total resistance of the circuit<br>
                (b) The total current drawn from the source<br>
                (c) Potential difference across the parallel combination of 10 \\(\\Omega\\) and 15 \\(\\Omega\\) resistors.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(a) Total Resistance:</strong><br>
                    Upper Parallel Group \\(R_{p1}\\): \\(10 \\parallel 15\\).<br>
                    \\(\\frac{1}{R_{p1}} = \\frac{1}{10} + \\frac{1}{15} = \\frac{3+2}{30} = \\frac{5}{30} = \\frac{1}{6} \\Rightarrow R_{p1} = 6 \\ \\Omega\\).<br>
                    Lower Parallel Group \\(R_{p2}\\): \\(60 \\parallel 40\\).<br>
                    \\(\\frac{1}{R_{p2}} = \\frac{1}{60} + \\frac{1}{40} = \\frac{2+3}{120} = \\frac{5}{120} = \\frac{1}{24} \\Rightarrow R_{p2} = 24 \\ \\Omega\\).<br>
                    Groups are in series.<br>
                    \\(R_{total} = R_{p1} + R_{p2} = 6 + 24 = 30 \\ \\Omega\\).<br>
                    <strong>(b) Total Current:</strong><br>
                    \\(V = 15\\) V.<br>
                    \\(I = \\frac{V}{R_{total}} = \\frac{15}{30} = 0.5\\) A.<br>
                    <strong>(c) PD across 10 \\(\\Omega\\) and 15 \\(\\Omega\\):</strong><br>
                    This is \\(V_{p1}\\) across the upper group.<br>
                    \\(V_{p1} = I \\times R_{p1} = 0.5 \\times 6 = 3\\) V.
                </div>
            </div>
        </div>

        <div class="card" data-marks="2">
            <div class="card-top">
                <span class="badge badge-2">2 Marks</span>
                <span class="card-meta">31/1 &middot; Q34(Part)</span>
            </div>
            <div class="question"><span class="question-number">Q34(c).</span> (i) What is the function of the earth wire ? State the advantage of the earth wire in domestic electric appliances such as electric iron.<br>
                <strong>OR</strong><br>
                (ii) List two precautions to be taken to avoid electrical accidents. State how these precautions prevent possible damage to the circuit/appliance.
                <button class="sol-toggle" onclick="toggleSolution(this)">
                    <i class="fas fa-eye"></i> View Solution
                </button>
                <div class="solution">
                    <strong>(i) Earth Wire:</strong><br>
                    <strong>Function:</strong> It provides a low-resistance conducting path for the current.<br>
                    <strong>Advantage:</strong> If there is any leakage of current to the metallic body of the appliance, the current flows to the earth, preventing severe electric shock to the user and operating the fuse.<br>
                    <hr>
                    <strong>(ii) Precautions:</strong><br>
                    1. <strong>Use of Fuse/MCB:</strong> Prevents damage due to overloading/short-circuit by breaking the circuit.<br>
                    2. <strong>Proper Earthing:</strong> Prevents electric shock from metallic appliances.<br>
                    (Alternatively: Use of good quality wires/insulation to prevent short circuits).
                </div>
            </div>
        </div>
`;

if (fs.existsSync(electricityFile)) {
    let content = fs.readFileSync(electricityFile, 'utf8');

    // Check if 31/1 already exists
    if (!content.includes('31/1 &middot; Q22')) {
        // Insert before 31/2 Series
        if (content.includes('<!-- 31/2 Series -->')) {
            content = content.replace('<!-- 31/2 Series -->', html31_1 + '\n\n        <!-- 31/2 Series -->');
            fs.writeFileSync(electricityFile, content, 'utf8');
            console.log("Successfully inserted 31/1 Series questions.");
        } else {
            console.log("Could not find insertion point (31/2 Series). Appending to appropriate location?");
            // Fallback: Insert after 2024 Content? No, before 2024. 
            // Look for "<!-- 31/3 Series -->" or just insert at start of questions
            // ...
        }
    } else {
        console.log("31/1 Series (Q22) already exists.");
    }
} else {
    console.log("Electricity PYQ file not found.");
}
