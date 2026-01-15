const fs = require('fs');
const path = require('path');

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

chapters.forEach(ch => {
    const filePath = path.join(ch, 'pyq.html');
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${ch}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace card-meta with "2025" in y2025 section to "30-6"
    // Only within the y2025 section, replace <span class="card-meta">2025</span>
    // Also handle variations like 2025 (OR), 2025 (Case Study), etc.
    content = content.replace(/<span class="card-meta">2025<\/span>/g, '<span class="card-meta">30-6</span>');
    content = content.replace(/<span class="card-meta">2025 \(OR\)<\/span>/g, '<span class="card-meta">30-6 (OR)</span>');
    content = content.replace(/<span class="card-meta">2025 \(Case Study\)<\/span>/g, '<span class="card-meta">30-6 (Case Study)</span>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${ch}`);
});

console.log('Done!');
