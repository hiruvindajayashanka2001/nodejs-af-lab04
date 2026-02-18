console.log("Node is working!");


const fs = require("fs");
const http = require('http');


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


