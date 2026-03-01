const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class10\\Hindi';

const filesToUpdate = [
    'Kshitij Part-2.html',
    'Kritika Part-2.html',
    'Sparsh Part-2.html',
    'Sanchayan Part-2.html'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if it already has the practice button to avoid duplication
        if (!content.includes('Practice</a>') && !content.includes('PracticeQuestions.html')) {
            // Regex to find the Chapter Notes <a> tag
            // Using a resilient pattern
            const regex = /(<a href="\.\/([^"]+)\/ChapterNotes\.html"\s+class="resource-btn">[\s\S]*?<\/a>)/g;

            content = content.replace(regex, (match, p1, p2) => {
                // p1 is the full <a> tag
                // p2 is the path part before /ChapterNotes.html, e.g., "Kritika Part-2/01 Mata Ka Aanchal"
                const practiceBtn = `\n                        <a href="./${p2}/PracticeQuestions.html" class="resource-btn"><i class="lucide-edit-3" data-lucide="edit-3"></i> Practice</a>`;
                return p1 + practiceBtn;
            });

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`Skipped ${file} (already contains practice button)`);
        }
    } else {
        console.log(`File not found: ${file}`);
    }
});
