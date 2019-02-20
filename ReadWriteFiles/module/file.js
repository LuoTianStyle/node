//引入操作对象的类
var fs = require('fs');
module.exports = {
    // 同步读取
    readFileSyncF: function(path) {
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log('同步读取操作成功');
    },
    // 异步读取
    readFileF: function(path, recall) {
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
                recall(data)
            }
        })
        console.log('异步读取成功');
    },
    // 同步写入
    writeFileSyncF: function(path, data) {
        var data = fs.writeFileSync(path, data);
        console.log('同步写入成功');
    },
    // 异步写入
    writeFileF: function(path, data, recall) {
        fs.writeFile(path, data,
            function(err) {
                if (err) {
                    throw err;
                }
                console.log("It\’s saved!");
                recall('Write Successful！');
            })
        console.log('异步写入成功');
    }
}