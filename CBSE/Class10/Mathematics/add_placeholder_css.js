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

const placeholderCSS = `
        /* === IMAGE PLACEHOLDER (HIGHLIGHTED) === */
        .image-placeholder {
            border: 3px dashed #ff6b6b;
            background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
            color: #c92a2a;
            padding: 20px;
            text-align: center;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-weight: 700;
            font-size: 0.9rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
            animation: pulse-placeholder 2s ease-in-out infinite;
        }
        
        [data-theme="dark"] .image-placeholder {
            background: linear-gradient(135deg, #2d1f1f 0%, #3d2a2a 100%);
            color: #ff8787;
            border-color: #ff6b6b;
        }
        
        @keyframes pulse-placeholder {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.01); opacity: 0.9; }
        }
`;

chapters.forEach(ch => {
    const filePath = path.join(ch, 'pyq.html');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has the placeholder CSS
    if (content.includes('.image-placeholder {')) {
        console.log(`Already has CSS: ${ch}`);
        return;
    }

    // Find position after [data-theme="dark"] .pyq-image rule or .options
    const insertPoint = content.indexOf('.options {');
    if (insertPoint === -1) {
        console.log(`No insert point found: ${ch}`);
        return;
    }

    content = content.slice(0, insertPoint) + placeholderCSS + '\n        ' + content.slice(insertPoint);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added CSS to ${ch}`);
});

console.log('Done!');
