var express = require('express');
var router = express.Router();
var formidable=require('formidable');
var util=require('util');
var fs=require('fs');
var path=require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/parse',function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req,function(err,fields,files){
    var oldurl=files.sfile.path;
    var newurl=path.parse(__dirname).dir+'/upload/'+files.sfile.name;
    fs.rename(oldurl,newurl,function(err){
      if(err) throw err;
      res.writeHead(200,{'content-type':'text/plain'});
      res.end('文件上传成功');
    })
  });
  return ;
})
module.exports = router;
