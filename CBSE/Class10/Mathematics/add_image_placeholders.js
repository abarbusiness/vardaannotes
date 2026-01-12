const fs = require('fs');
const path = require('path');

const basePath = __dirname;

// Map of questions requiring images: [chapterFolder, questionNumberPattern]
const questionsWithImages = {
    "04QuadraticEquations": ["Q35"],
    "05ArithmeticProgressions": ["Q38"],
    "06Triangles": ["Q15", "Q23", "Q32"],
    "09SomeApplicationsofTrigonometry": ["Q36"],
    "10Circles": ["Q2", "Q18", "Q29"],
    "11AreasRelatedtoCircles": ["Q37"],
    "12SurfaceAreasandVolumes": ["Q33"]
};

Object.keys(questionsWithImages).forEach(folder => {
    const filePath = path.join(basePath, folder, 'pyq.html');
    const printPath = path.join(basePath, folder, 'pyq_print.html');
    const solPath = path.join(basePath, folder, 'pyq_solutions_print.html');

    const questions = questionsWithImages[folder];

    [filePath, printPath, solPath].forEach(file => {
        if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');

            questions.forEach(qNum => {
                // Look for the question span and add image placeholder after it
                // Match pattern: >Q35 (a).</span> or >Q15.</span> followed by text
                const regex = new RegExp(`(<span class="question-number">${qNum}[^<]*<\\/span>[^<]*?)(<\\/div>\\s*<button|<\\/div>\\s*<span class='marks')`, 'g');

                const replacement = `$1
                    <div class="question-image">
                        <img src="images/${qNum.replace(/[^a-zA-Z0-9]/g, '')}.png" alt="Question ${qNum} Figure" class="pyq-image">
                    </div>$2`;

                // Check if image placeholder already exists for this question
                if (!content.includes(`images/${qNum.replace(/[^a-zA-Z0-9]/g, '')}.png`)) {
                    content = content.replace(regex, replacement);
                }
            });

            fs.writeFileSync(file, content, 'utf8');
            console.log(`Added image placeholders in ${folder}/${path.basename(file)}`);
        }
    });

    // Create images folder if needed
    const imagesDir = path.join(basePath, folder, 'images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
        console.log(`Created images folder in ${folder}`);
    }
});

console.log('Image placeholders added! Please add your images to the respective images/ folders.');
