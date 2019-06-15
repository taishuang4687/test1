var User_model = require('../models/user_model.js');
var async = require('async');
exports.index = function(rq,res,next){
    res.render('index.ejs',{'title':'taishuang'});
}
exports.reg = function(req,res,next){
    res.render('reg.ejs');
}
exports.login = function(req,res,next){
    res.render('login.ejs');
}
exports.do_reg = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    async.waterfall([
        function(callback){
            callback(null,'one','two');
        },
        function(arg1,arg2,callback){
            callback(null,'three');
        }
    ],function(err,result){

    });
    User_model.checkName(name,function(err,data){
         console.log(data);
         if(data.length>0){
             res.redirect('/login');
         }else{
            User_model.insert_data(name,pass,function(err,data){
                if(data.affectedRows>0){
                    res.redirect('/login');
                }
            });
         }
    })
    
}