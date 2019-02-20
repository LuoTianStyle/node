// 引入文件操作模块
var ofile = require('./file.js')
module.exports = {
    login: function(req,res) {
         function recall(data){
            res.write(data);
            res.end('');            
        }
        //路径问题，这里是指的readwritefile.js的相对路径
        ofile.readFileF('./html/login.html',recall)
    },
    register: function(req,res) {
        function recall(data){
            res.write(data);
            res.end('');            
        }
        //路径问题，这里是指的readwritefile.js的相对路径
        ofile.readFileF('./html/register.html',recall)
    },
    writefile: function(req,res){
        function recall(data){
            res.write(data);
            res.end('');
        }
        //路径问题，这里是指的readwritefile.js的相对路径
        ofile.writeFileF('./file/writed.txt','it is asunny day！',recall)
    }
}