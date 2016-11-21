/* 
本地http服务器搭建步骤
  1: 安装node
  2: 控制台进入本文件所在目录
  3：运行 node http.js
  4：http://localhost:3000/index.html

  注：一定要在端口号后面加上自己文件路径才能运行成功；出错了请重启服务 （node http.js）
*/
var PORT = 3000;

var http = require('http');
var url = require('url');
var fs = require('fs');
var mine = require('./mine').types;
var path = require('path');

var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join("angularJSStudy", pathname);   // angularJSStudy：项目名
    // console.log(realPath);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
