var fs = require('fs');

var globalConfig = {};

var conf = fs.readFileSync('./serve.conf');

var configArr = conf.toString().split('\n');

for (let i = 0; i < configArr.length; i++) {
    globalConfig[configArr[i].split('=')[0]] = configArr[i].split('=')[1];    
}


var obj = {
    a: 1,
    b: 2,
    length: 2,
    push: Array.prototype.push
}

// obj.push(8);
// obj.push(0);
// obj[1] = 'c';

// console.log(obj);

module.exports = globalConfig;