const https = require('https');
const fs = require('fs');
const path = require('path');

const map = [
    { name: "01GST", id: 503045 },
    { name: "02Banking", id: 503046 },
    { name: "03LinearInequations", id: 503048 },
    { name: "04QuadraticEquations", id: 503049 },
    { name: "04QuadraticEquations", id: 503050 },
    { name: "05RatioandProportion", id: 503051 },
    { name: "06Factorisation", id: 503052 },
    { name: "07Matrices", id: 503053 },
    { name: "08ArithmeticGeometricProgression", id: 503054 },
    { name: "08ArithmeticGeometricProgression", id: 503055 },
    { name: "09CoordinateGeometry", id: 503057 },
    { name: "09CoordinateGeometry", id: 503058 },
    { name: "09CoordinateGeometry", id: 503059 },
    { name: "10Similarity", id: 503061 },
    { name: "10Similarity", id: 503064 },
    { name: "11Circles", id: 503065 },
    { name: "11Circles", id: 503066 },
    { name: "11Circles", id: 503067 },
    { name: "12Mensuration", id: 503069 },
    { name: "13Trigonometry", id: 503070 },
    { name: "13Trigonometry", id: 503071 },
    { name: "14Statistics", id: 503072 },
    { name: "14Statistics", id: 503073 },
    { name: "15Probability", id: 503074 }
];

function downloadChapter(item, callback) {
    const base64Id = Buffer.from(item.id.toString()).toString('base64');
    const options = {
      hostname: 'www.studiestoday.com',
      port: 443,
      path: '/securefile/' + base64Id,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
        }
    };
    
    // Some folders may receive multiple files, we name them by their Node ID to prevent conflicts.
    const dest = path.join("c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Mathematics", item.name, `Maths_Chapter_${item.id}.pdf`);
    
    // Ensure dir exists
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const file = fs.createWriteStream(dest);
    const req = https.request(options, function(response) {
      if(response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', function() {
            file.close();
            console.log(`Downloaded ${item.id} to ${item.name}`);
            callback(null);
          });
      } else {
          console.error(`Failed ${item.id}. Status: ${response.statusCode}`);
          callback(new Error("Status " + response.statusCode));
      }
    });
    req.on('error', function(err) {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${item.id}: ${err.message}`);
      callback(err);
    });
    req.end();
}

function runSequential(index) {
    if(index >= map.length) {
        console.log("All Maths complete!");
        return;
    }
    const item = map[index];
    downloadChapter(item, (err) => {
        runSequential(index + 1);
    });
}

runSequential(0);
