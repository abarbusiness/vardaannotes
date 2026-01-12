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

const cssRule = `
        .options {
            list-style: none;
            padding-left: 0;
            margin-top: 0.5rem;
        }
        .options li {
            margin-bottom: 0.25rem;
        }
`;

chapters.forEach(folder => {
    const filePath = path.join(basePath, folder, 'pyq.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if rule already exists to avoid duplication
        if (content.includes('.options {')) {
            console.log(`CSS already present in ${folder}`);
            // Optional: Update it if needed, but for now assuming missing means add.
            // If the user says it's showing discs, it means either it's missing or set to disc.
            // Let's force update if it's there? No, safer to just append if missing.
            // But wait, if it's NOT there (which I suspect), we append.

            // Actually, if it IS there but wrong, we might need to replace. 
            // Previous view_file didn't show it. So it likely doesn't exist.
        } else {
            // Inject before </style>
            content = content.replace('</style>', `${cssRule}\n    </style>`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated CSS in ${folder}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});
