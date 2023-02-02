// var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });

const express = require('express');

const bodyParser = require('body-parser');

var app = express();

var PORT = 3000;

app.use(express.urlencoded({
    extended: false
}))

app.get('/', function (req, res) {
    res.send(`
<form action="/answer" method="POST">
    <p>晴天的天空是什麼顏色？</p>
    <input name="skyColor" autocomplete="off">
    <button>送出答案</button>
  </form>
  `);
});

app.post('/answer', function (req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
            <p>恭喜您，答對了。這是正確答案</p>
            <a href="/">回首頁</a>
        `)
    } else {
        res.send(`
           <p>真可惜，答錯了。</p>
           <a href="/">回首頁</a>
       `)
    }
});
// app.get('/answer', function (req, res) {
//     res.send("迷路了嗎? 這裡什麼都沒有")
// });

app.listen(PORT, function () {
    console.log('Server is running on PORT:', PORT);
});