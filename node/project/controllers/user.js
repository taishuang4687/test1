var User_model = require('../models/user_model.js');
exports.index = function(rq,res,next){
    res.render('index.ejs',{'title':'taishuang'});
}
exports.reg = function(req,res,next){
    res.render('reg.ejs');
}
exports.do_reg = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    User_model.insert_data(name,pass,function(err,data){
        console.log(data);
    })
}