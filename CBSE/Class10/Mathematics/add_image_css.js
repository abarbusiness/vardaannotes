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
        /* === QUESTION IMAGES === */
        .question-image {
            margin: 1rem 0;
            text-align: center;
        }
        .pyq-image {
            max-width: 280px;
            max-height: 200px;
            width: auto;
            height: auto;
            border-radius: 8px;
            border: none;
        }
        [data-theme="dark"] .pyq-image {
            filter: invert(1) hue-rotate(180deg);
        }

        .options {
            list-style: none;
            padding-left: 0;
            margin-top: 0.5rem;
        }
        .options li {
            margin-bottom: 0.25rem;
        }

        /* === TABLES === */
        .question table {
            width: auto;
            margin: 1rem 0;
            border-collapse: collapse;
            background: var(--bg-secondary);
        }
        .question table th,
        .question table td {
            border: 1px solid var(--border-subtle);
            padding: 8px 16px;
            text-align: center;
        }
        .question table th {
            background: var(--accent-glow);
            font-weight: 600;
        }
        .solution table {
            width: auto;
            margin: 0.5rem 0;
            border-collapse: collapse;
        }
        .solution table th,
        .solution table td {
            border: 1px solid var(--border-subtle);
            padding: 6px 12px;
            text-align: center;
        }
`;

chapters.forEach(folder => {
    const filePath = path.join(basePath, folder, 'pyq.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove old CSS rules if they exist
        content = content.replace(/\s*\/\* === QUESTION IMAGES === \*\/[\s\S]*?\.options li \{[^}]*\}\s*/g, '');
        content = content.replace(/\s*\/\* === TABLES === \*\/[\s\S]*?\.solution table td \{[^}]*\}\s*/g, '');

        // Inject new CSS before </style>
        content = content.replace('</style>', `${cssRule}\n    </style>`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated CSS in ${folder}/pyq.html`);
    }
});

// Also update print files
chapters.forEach(folder => {
    const pyqPrint = path.join(basePath, folder, 'pyq_print.html');
    const solPrint = path.join(basePath, folder, 'pyq_solutions_print.html');

    const printCSS = `
        /* === QUESTION IMAGES === */
        .question-image {
            margin: 10px 0;
            text-align: center;
        }
        .pyq-image {
            max-width: 200px;
            max-height: 150px;
            width: auto;
            height: auto;
        }
        html.dark-mode .pyq-image {
            filter: invert(1) hue-rotate(180deg);
        }

        /* === TABLES === */
        table {
            width: auto;
            margin: 10px 0;
            border-collapse: collapse;
        }
        table th, table td {
            border: 1px solid #333;
            padding: 6px 12px;
            text-align: center;
        }
        table th {
            background: #f0f0f0;
        }
        html.dark-mode table th {
            background: #333;
        }
`;

    [pyqPrint, solPrint].forEach(file => {
        if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');

            // Check if already has the CSS
            if (!content.includes('/* === QUESTION IMAGES === */')) {
                content = content.replace('</style>', `${printCSS}\n    </style>`);
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Updated CSS in ${folder}/${path.basename(file)}`);
            }
        }
    });
});

console.log('CSS update complete!');
