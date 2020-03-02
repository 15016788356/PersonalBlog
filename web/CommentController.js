var commentDao = require('../dao/CommentDao.js');
var url = require('url');
var path = new Map();
var timeUtil = require('../util/TimeUtil.js');
var respUtil = require('../util/RespUtil.js');
var captcha = require('svg-captcha');

function queryNewComments(request, response){
    commentDao.queryNewComments(5, function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();  
    })
}
path.set('/queryNewComments', queryNewComments);

function queryCommentsCountByBlogId(request, response){
    var params = url.parse(request.url, true).query;

    commentDao.queryCommentsCountByBlogId(parseInt(params.bid), function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '评论成功', result));
        response.end();        
    })
}

path.set('/queryCommentsCountByBlogId', queryCommentsCountByBlogId);
function queryCommentsByBlogId(request, response){
    var params = url.parse(request.url, true).query;
    commentDao.queryCommentsByBlogId(parseInt(params.bid), function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '评论成功', result));
        response.end();        
    })
}

path.set('/queryCommentsByBlogId', queryCommentsByBlogId);

function addComment(request, response){
    var params = url.parse(request.url, true).query;
    commentDao.insertComment(parseInt(params.bid), params.parent, params.reply_name, params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '评论成功', null));
        response.end();        
    } )
}

path.set('/addComment', addComment);


function queryRandomCode (request, response){
    var img = captcha.create({fontSize: 50, width: 100, height: 34});
    response.writeHead(200);
    response.write(respUtil.writeResult('success', '评论成功', img));
    response.end();  
}

path.set('/queryRandomCode', queryRandomCode);

module.exports.path = path;