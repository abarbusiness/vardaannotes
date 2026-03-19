const https = require('https');
const fs = require('fs');
const options = {
  hostname: 'www.studiestoday.com',
  port: 443,
  path: '/node/502921/viewfile.html',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
  }
};
const req = https.request(options, (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    fs.writeFileSync('view.html', body);
    console.log("Saved to view.html");
  });
});
req.end();
