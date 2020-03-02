var DBUtil = require('./DBUtil.js');

function queryNewComments(size, success){
    var querySql = 'select * from conmments order by id desc limit ?;';
    var params = [size];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result){
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}


function queryCommentsCountByBlogId(blogId, success){
    var querySql = 'select count(1) as count from conmments where blog_id = ?;';
    var params = [blogId];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result){
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryCommentsByBlogId(blogId, success){
    var querySql = 'select * from conmments where blog_id = ?;';
    var params = [blogId];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result){
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}


function insertComment(blogId, parent, userName, parentName, email, comments, ctime, utime, success){
    var insertSql = 'insert into conmments (`blog_id`, `parent`, `parent_name`, `user_name`, `email`, `comments`, `ctime`, `utime`) values (?,?,?,?,?, ?,?,?);';
    var params = [blogId, parent, userName, parentName, email, comments, ctime, utime];
    
    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(error, result){
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}


module.exports.queryCommentsCountByBlogId = queryCommentsCountByBlogId;
module.exports.queryCommentsByBlogId = queryCommentsByBlogId;
module.exports.insertComment = insertComment;
module.exports.queryNewComments = queryNewComments;