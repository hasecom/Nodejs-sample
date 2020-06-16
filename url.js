//パスの割分け
const http = require('http');
var msg = "";
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Context-Type':'text/html;charset=utf-8'});
    //リクエストされたURL
    switch(req.url){
        case '/':
            msg = "home";
            break;
        case '/about':
            msg = 'about';
            break;
        default :
            msg = 'not page found';
            break;
    }
    //res.write('request from :' + req.url);
    res.write(msg);
    res.end();
});
const port = 8080;
server.listen(port);

console.log("server listening...");
console.log("On port " + port);
console.log("To stop [ctrl + c ]");