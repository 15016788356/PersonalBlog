var express = require('express');

var app = new express();

var globalConfig = require('./config.js');
var loader = require('./loader.js');
var url = require('url');
console.log(loader);
app.post('/editorEveryDay', loader.get('/editorEveryDay'));

app.get('/queryEveryDay', loader.get('/queryEveryDay'));

app.get('/editorBlog', loader.get('/editorBlog'));

app.get('/queryByPage', loader.get('/queryByPage'));

app.get('/queryBlogCount', loader.get('/queryBlogCount'));
app.get('/queryBlogById', loader.get('/queryBlogById'));

app.get('/addComment', loader.get('/addComment'));

app.get('/queryRandomCode', loader.get('/queryRandomCode'));

app.get('/queryCommentsByBlogId', loader.get('/queryCommentsByBlogId'));

app.get('/queryCommentsCountByBlogId', loader.get('/queryCommentsCountByBlogId'));

app.get('/queryAllBog', loader.get('/queryAllBog'))

app.get('/queryRandomTags', loader.get('/queryRandomTags'));

app.get('/queryHotBlog', loader.get('/queryHotBlog'));

app.get('/queryNewComments', loader.get('/queryNewComments'));

app.listen(globalConfig.port, () => {
    console.log('server run success port: ' + globalConfig.port);
})
