const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('ncert.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('ncert.txt', data.text);
    console.log('Successfully parsed PDF. Length:', data.text.length);
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
