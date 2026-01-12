const fs = require('fs');
const path = require('path');

const basePath = __dirname;
const chapters = [
    "01RealNumbers", "02Polynomials", "03PairofLinearEquationsinTwoVariables",
    "04QuadraticEquations", "05ArithmeticProgressions", "06Triangles",
    "07CoordinateGeometry", "08IntroductiontoTrigonometry",
    "09SomeApplicationsofTrigonometry", "10Circles", "11AreasRelatedtoCircles",
    "12SurfaceAreasandVolumes", "13Statistics", "14Probability"
];

chapters.forEach(folder => {
    const filePath = path.join(basePath, folder, 'pyq.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix 2025 year content active state
        if (content.includes('id="y2025" class="year-content"')) {
            content = content.replace(
                'id="y2025" class="year-content"',
                'id="y2025" class="year-content active"'
            );
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Activated 2025 content in ${folder}/pyq.html`);
        } else if (content.includes('id="y2025" class="year-content active"')) {
            console.log(`Already active in ${folder}/pyq.html`);
        } else {
            console.log(`Could not find y2025 div in ${folder}/pyq.html`);
        }
    }
});
