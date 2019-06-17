var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
        case '/parse':
            goUpload(req,res);
        default:
            res.writeHead(404,{'content-type':'text/plain'});
            res.end('the page is gone');
    }
}).listen(3000);
function goIndex(res){
    var pathname = __dirname + '/static/' + url.parse('index.html').pathname;
    var readfile = fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'content-type':'text/html'});
    res.end(readfile);
}
console.log('server start port 3000');