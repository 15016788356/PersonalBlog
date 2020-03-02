function removeHTMLTag(str) {
    if (str.replace(/img/g, str)) {

        return str.split('<p>')[1].split('</p>')[0];
    }
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/ /ig,'');//去掉 
    return str;
}

function escape2Html(str) { 
    var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
} 

module.exports = {
    removeHTMLTag,
    escape2Html
}