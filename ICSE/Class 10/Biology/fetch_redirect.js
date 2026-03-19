const https = require('https');

const options = {
  hostname: 'www.studiestoday.com',
  port: 443,
  path: '/node/502921/download',
  method: 'HEAD',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
    'Referer': 'https://www.studiestoday.com/node/502921/viewfile.html'
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.headers.location) {
      console.log(`Location: ${res.headers.location}`);
  }
});
req.on('error', (e) => {
  console.error(`problem: ${e.message}`);
});
req.end();
