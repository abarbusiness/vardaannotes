const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = "c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\CBSE\\Class12\\Mathematics\\01RelationsandFunctions\\Relations and Functions #BB2.0.pdf";
const outputPath = path.join(__dirname, 'extracted_text.txt');

function render_page(pageData) {
    return pageData.getTextContent()
        .then(function(textContent) {
            let lastY, text = '';
            for (let item of textContent.items) {
                if (lastY == item.transform[5] || !lastY){
                    text += item.str;
                } else {
                    text += '\n' + item.str;
                }
                lastY = item.transform[5];
            }
            return `\n--- PAGE ${pageData.pageIndex} ---\n` + text;
        });
}

let options = {
    pagerender: render_page
};

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer, options).then(function(data) {
    fs.writeFileSync(outputPath, data.text);
    console.log(`Successfully extracted text to ${outputPath}`);
    console.log(`Total Pages: ${data.numpages}`);
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
