//フォームの処理
const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const conf = require('config');
const ejs = require('ejs');
const server = http.createServer();
const port = conf.ENV.PORT;

var posts = [];

//フォームの表示
function renderForm(posts,res){
    var data = ejs.render(template,{
        posts:posts
    });
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
}
var template = fs.readFileSync(__dirname + '/ejs/form.ejs','utf-8');
server.on('request',function(req,res){
    if(req.method === "POST"){
        req.data = "";
        req.on('readable',function(){
            req.data += req.read() || '';
            console.log(req.data);
        });
        req.on("end",function(){
            var query = qs.parse(req.data);
            console.log(query);
            posts.push(query.user_name);
            renderForm(posts,res);
        });
    } else {
        renderForm(posts,res);
    }
});

server.listen(port);
console.log("server listening ...");
