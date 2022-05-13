const request = require("request");
const fs = require("fs");

console.log(process.argv);
const url = process.argv[2];
const path = process.argv[3];



const pageFetcherAndSave = function(url, path) {
  request(url, function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    fs.writeFile(path, body, error => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      }

    });

  });

};
if (!url || !path) {
  console.log('url or path does not exist');
} else {

  pageFetcherAndSave(url, path);

}


// // const process.argv[2] == http://www.example.edu/ ./index.html
// // // const process.argv[3] == 

// // const URL = require("url")

 
// // needs a command line argument that takes two arguments
// // a url and a local filel path are the arguments http://www.example.edu/ ./index.html

// // make an http request and wait for the response.

// //then need to take the data you receive and write it to a file in your local filesystem.
// // const fs = require('fs');

// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

// // Use the callback based approach we've been learning so far

