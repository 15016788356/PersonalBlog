var everyDayDao = require('../dao/EveryDayDao.js');
var { removeHTMLTag, escape2Html } = require('../util/removeHTMLTag.js')
var path = new Map();
var timeUtil = require('../util/TimeUtil.js');
var respUtil = require('../util/RespUtil.js');

function editorEveryDay(request, response){
    request.on('data', function (data) {
        var content = removeHTMLTag(JSON.parse(data.toString()).params.content);
        content = escape2Html(content);
        everyDayDao.insertEveryDay(content, timeUtil.getNow(), function (res) {
            console.log(res);
            response.writeHead(200);
            response.write(respUtil.writeResult('success', '添加成功', null))
            response.end();
        });
        // console.log(content);
    })
}

path.set('/editorEveryDay', editorEveryDay);


function queryEveryDay(request, response){
    everyDayDao.queryEveryDay(function (res) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '查询成功', res))
        response.end();
    })
}

path.set('/queryEveryDay', queryEveryDay);

module.exports.path = path;