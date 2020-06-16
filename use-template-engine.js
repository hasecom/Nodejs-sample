const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

var template = fs.readFileSync(__dirname + '/ejs/hello.ejs','utf-8');
var msg = "";

var n = 0;
const server = http.createServer((req,res) =>{
    n++;
    var data = ejs.render(template,{
        title : 'hello',
        content : '<b>world</b>',
        n: n
    });
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
    
});
const port = 8080;
server.listen(port);
console.log("server listening ...")