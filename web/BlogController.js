var BlogDao = require('../dao/BlogDao.js');
var tagsDao = require('../dao/TagsDao.js');
var tagBlogMappingDao = require('../dao/TagBlogMappingDao.js');
var url = require('url');
var path = new Map();
var { removeHTMLTag, escape2Html } = require('../util/removeHTMLTag.js')

var timeUtil = require('../util/TimeUtil.js');
var respUtil = require('../util/RespUtil.js');


function queryHotBlog(request, response){
    BlogDao.queryHotBlog(5, function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();
    })
}

path.set('/queryHotBlog', queryHotBlog)

function queryAllBog(request, response){
    BlogDao.queryAllBog(function (result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();
    })
}

path.set('/queryAllBog', queryAllBog);

function queryBlogById(request, response){
    var params = url.parse(request.url, true).query;
    BlogDao.queryBlogById(parseInt(params.id), function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();
        BlogDao.addViews(parseInt(params.id), function(result){
            // console.log(result);
        });
    })
}

path.set('/queryBlogById', queryBlogById);

function queryBlogCount(request, response) {
    BlogDao.queryBlogCount(function (result){
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();
    })
}
path.set('/queryBlogCount', queryBlogCount);

function queryByPage(request, response){
    var params = url.parse(request.url, true).query;
    BlogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function(result){
        for (let i = 0; i < result.length; i++) {
            result[i].content = result[i].content.replace(/<img[\w\W]*">/g, "");   
            result[i].content = result[i].content.substring(0, 300);   
        }
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', result));
        response.end();
    });

}

path.set('/queryByPage', queryByPage);

function editorBlog(request, response){
    // console.log(request.url);
    var params = url.parse(request.url, true).query;
//3    9    26   39
// 4    40    49     51    1:12

    var tags = params.tags.replace(/ /g, '').replace('，', ',');
    // console.log(params.content);
    // request.on('data', function (data){
        BlogDao.insertBlog(params.title, params.content, tags, 0, timeUtil.getNow(), timeUtil.getNow(), function (res) {
            // console.log(params);

            response.writeHead(200);
            response.write(respUtil.writeResult('success', '添加成功', null));
            response.end();

            var blogId = res.insertId;
            var tagsList = tags.split('，');
            for (let i = 0; i < tagsList.length; i++) {
                if (tagsList[i] == "") {
                    continue;
                }            
                queryTag(tagsList[i], blogId)    
            }
        })
    // })
}

path.set('/editorBlog', editorBlog);
function queryTag(tag, blogId) {
    tagsDao.queryTag(tag, function (result)   {
        if (result == null || result.length == 0) {
            insertTag(tag, blogId);
        } else {
            tagBlogMappingDao.insertTagBlogMapping(result[0].id, blogId, timeUtil.getNow(), timeUtil.getNow(), function(result){

            });
        }
    })
}


function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        insertTagBlogMapping(result.insertId, blogId);
    })
}

function insertTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function(result){

    });
}

module.exports.path = path;