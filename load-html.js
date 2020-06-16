//htmlの読み込み
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //ファイルの読み込みなど時間のかかる処理は、コールバック関数を使う=>ノンブロッキング処理
    fs.readFile(__dirname + '/html/hello.html','utf-8',function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write('page not found');
            return res.end();
        }
        res.writeHead(200,{'Countent-Type':'text/html'});
        res.write(data);
        res.end();
    })
});
const port = 8080;
server.listen(port);

console.log('server listening ...')
