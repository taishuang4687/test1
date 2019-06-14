var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    passwrd:'',
    database:'newblog'
});
exports.insert_data = function(name,pass,callback){
    var sql = 'select * from user where name = ?'
    pool.query(sql,[name],function(error,results,fields){
        if (error) throw error;
        callback(error,results);
    });
}