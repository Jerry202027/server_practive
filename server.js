// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });

var express = require('express');

var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});