const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');
const website = args[0];
const path = args[1];


request(website, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }

  fs.writeFile(`${path}`, body, function (error) {
    if (error) {
      console.log('error', error);
    } else {
      console.log(`downloaded and saved ${response.headers["content-length"]} bytes to ${path}.`);
    }
  });
});