var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var util=require('util');
var formidable=require('formidable');
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            goUpload(req,res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('the page is gone');
    }
}).listen(3000);
console.log('server start port 3000');
function goIndex(res){
    var pathname=path.parse(__dirname).dir+'/static/'+url.parse('index.html').pathname;
    var readfile=fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(readfile);
};
function goUpload(req,res){
    var form = new formidable.IncomingForm();
    form.uploadDir = '/my/dir';
    form.parse(req,function(err,fields,files){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields:fields,files:files}));
    });
    return;
}