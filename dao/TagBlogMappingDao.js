var DBUtil = require('./DBUtil.js');

function insertTagBlogMapping(tagId, blogId, ctime, utime, success) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`, `blog_id`, `ctime`, `utime`) values (?, ?, ?, ?)";
    var params = [tagId, blogId, ctime, utime];

    var connection = DBUtil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (err, result) {
        if (err == null) {
            success(result);
        } else {
            console.log(err);
        }
    })
    connection.end();
}

module.exports.insertTagBlogMapping = insertTagBlogMapping;