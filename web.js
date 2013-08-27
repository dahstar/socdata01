<<<<<<< HEAD
 var http = require('http');
 var fs = require('fs');
 var path = require('path');

 http.createServer(function (request, response) {

    console.log('request starting for ');
    console.log(request);

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    console.log(filePath);
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    path.exists(filePath, function(exists) {

        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });

 }).listen(process.env.PORT || 8080);

 console.log('Server running at http://127.0.0.1:5000/');
=======
var express=require('express');
var fs=require('fs');
var htmlfile="index.html";
var app=express.createServer(express.logger());
app.get('/',function(request,response){
var html=fs.readFileSync(htmlfile).toString();
response.send(html);
});
var port=process.env.PORT ||8080;
app.listen(port,function(){
console.log("Listening on"+port);
});
>>>>>>> 096b9254b0019f39c3cc5bbd06b867ff5d9ed019
