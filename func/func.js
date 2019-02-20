//http请求
var http = require('http');
var Fun = require('./module/funs.js')
var Student = require('./module/student.js')
//http 服务
http.createServer(function (request, response) {
    //http协议头
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    //清除二次访问
    if(request.url!=='/favicon.ico'){
        var student = new Student('1','Daming');
        student.enter();
        student.study(response);
        Fun['fun'](response,request);
        Fun.funs(response,request);
        //http协议尾
        response.end('');
    }
    //监听8000
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000')