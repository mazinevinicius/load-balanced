var http = require('http');
const { networkInterfaces } = require('os');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>${networkInterfaces().eth0[0].address}</h1>`);
}).listen(8080);