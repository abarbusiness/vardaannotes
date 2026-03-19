const https = require('https');
const fs = require('fs');
const path = require('path');

const map = [
    { name: "01CellCycleAndDivision", id: 502950},
    { name: "02Genetics",             id: 502951},
    { name: "03AbsorptionByRoots",    id: 502952},
    { name: "04Transpiration",        id: 502954},
    { name: "05Photosynthesis",       id: 502957},
    { name: "06CirculatorySystem",    id: 502959},
    { name: "07ExcretorySystem",      id: 502960},
    { name: "08NervousSystem",        id: 502961},
    { name: "09EndocrineGlands",      id: 502962},
    { name: "10ReproductiveSystem",   id: 502964},
    { name: "11Population",           id: 502967},
    { name: "12AidsToHealth",         id: 502969},
    { name: "13HealthOrganisations",  id: 502971},
    { name: "14Pollution",            id: 502972}
];

function downloadChapter(item, chapNum, callback) {
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
    const dest = path.join("c:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Biology", item.name, `Biology_Chapter_${chapNum}.pdf`);
    const file = fs.createWriteStream(dest);
    const req = https.request(options, function(response) {
      if(response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', function() {
            file.close();
            console.log(`Downloaded Chapter ${chapNum} to ${item.name}`);
            callback(null);
          });
      } else {
          console.error(`Failed Chapter ${chapNum}. Status: ${response.statusCode}`);
          callback(new Error("Status " + response.statusCode));
      }
    });
    req.on('error', function(err) {
      fs.unlink(dest, () => {});
      console.error(`Error downloading Chapter ${chapNum}: ${err.message}`);
      callback(err);
    });
    req.end();
}

function runSequential(index) {
    if(index >= map.length) {
        console.log("All complete!");
        return;
    }
    const item = map[index];
    const chapNum = index + 2;
    downloadChapter(item, chapNum, (err) => {
        runSequential(index + 1);
    });
}

runSequential(0);
