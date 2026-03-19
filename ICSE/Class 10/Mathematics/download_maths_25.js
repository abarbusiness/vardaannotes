const https = require('https');
const fs = require('fs');
const path = require('path');

const map = [
    { name: "01ValueAddedTax", id: 503045 },
    { name: "02Banking", id: 503046 },
    { name: "03SharesAndDividend", id: 503047 },
    { name: "04LinearInequations", id: 503048 },
    { name: "05QuadraticEquations", id: 503049 },
    { name: "06SolvingProblemsOnQuadraticEquations", id: 503050 },
    { name: "07RatioAndProportion", id: 503051 },
    { name: "08RemainderAndFactorTheorems", id: 503052 },
    { name: "09Matrices", id: 503053 },
    { name: "10ArithmeticProgression", id: 503054 },
    { name: "11GeometricProgression", id: 503055 },
    { name: "12Reflection", id: 503057 },
    { name: "13SectionAndMidPointFormula", id: 503058 },
    { name: "14EquationOfALine", id: 503059 },
    { name: "15Similarity", id: 503061 },
    { name: "16Loci", id: 503064 },
    { name: "17Circles", id: 503065 },
    { name: "18TangentsAndIntersectingChords", id: 503066 },
    { name: "19Constructions", id: 503067 },
    { name: "20CylinderConeAndSphere", id: 503069 },
    { name: "21TrigonometricalIdentities", id: 503070 },
    { name: "22HeightsAndDistances", id: 503071 },
    { name: "23GraphicalRepresentation", id: 503072 },
    { name: "24MeasuresOfCentralTendency", id: 503073 },
    { name: "25Probability", id: 503074 }
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
    
    // Determine the full destination path
    const folderPath = path.join("c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Mathematics", item.name);
    const dest = path.join(folderPath, `Maths_Chapter_${item.id}.pdf`);
    
    // Create new directory if it doesn't already exist
    fs.mkdirSync(folderPath, { recursive: true });

    const file = fs.createWriteStream(dest);
    const req = https.request(options, function(response) {
      if(response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', function() {
            file.close();
            console.log(`Downloaded ${item.name} correctly`);
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
        console.log("All 25 Maths chapters reconfigured and downloaded successfully!");
        return;
    }
    const item = map[index];
    downloadChapter(item, (err) => {
        runSequential(index + 1);
    });
}

runSequential(0);
