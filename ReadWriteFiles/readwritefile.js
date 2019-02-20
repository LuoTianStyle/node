//http请求
var http = require('http');
//url
var url = require('url');
var router = require('./module/router.js')
//http 服务
http.createServer(function(request, response) {
    //http协议头
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    //清除二次访问
    if (request.url !== '/favicon.ico') {
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        router[pathname](request, response);
        console.log('主程序运行结束')
    }
    //监听8000
}).listen(8000);
console.log('this is running')