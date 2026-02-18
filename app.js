console.log("Node is working!");


const fs = require("fs");
const http = require('http');
const https = require('https');
const myModule = require('./my-module.js');


fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile('file.txt', 'Write this to file.txt', function (err) {
  if (err) throw err;
  console.log('File saved!');
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8083);

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});

console.log(myModule.myFunction());

//promises
/*
const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

*/

//promise with async and await
const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve("Success!");
  else reject("Failure!");
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();

