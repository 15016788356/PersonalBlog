var DBUtil = require('./DBUtil.js');

function queryHotBlog(size, success){
    var querySql = 'select * from blog order by views desc limit ?;';
    var params = [size];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(err, result){
        if (err == null) {
            success(result);
        } else {
            console.log(err);
        }
    })
}


function addViews(id, success){
    var addSql = 'update blog set views = views + 1 where id = ?;';
    var params = [id];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(addSql, params, function(err, result){
        if (err == null) {
            success(result);
        } else {
            console.log(err)
        }
    })
    connection.end();
}


function queryAllBog(success){
    var querySql = 'select * from blog;';
    var params = [];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(err, result){
        if (err == null) {
            success(result)
        } else {
            console.log(err);
        }
    })
    connection.end();
}

function queryBlogById(id, success){
    var querySql = 'select * from blog where id = ?;'
    var params = [id];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(err, result){
        if (err == null) {
            success(result)
        } else {
            console.log(err)
        }
    })
    connection.end();
}

function queryBlogCount(success){
    var querySql = 'select count(1) from blog;';
    var params = [];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}


function queryBlogByPage(page, pageSize, success){
    var insertSql = 'select * from blog order by id desc limit ?, ?;';
    var params = [page * pageSize, pageSize];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result){
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function insertBlog(title, content, tags, views, ctime, utime, success){
    var insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
    var params = [title, content, tags, views, ctime, utime];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(err, result){
        if (err == null) {
            success(result)
        } else {
            console.log(error);
        }
    })
    connection.end();
}
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.insertBlog = insertBlog;
module.exports.queryBlogCount = queryBlogCount;
module.exports.queryBlogById = queryBlogById;
module.exports.queryAllBog = queryAllBog;
module.exports.addViews = addViews; 
module.exports.queryHotBlog = queryHotBlog;