var express = require('express');

var app = express.createServer(express.logger());

var content=fs.readFileSync("index.html");
buf = new Buffer(content);
len=buf.write('\u00bd + \u00bc=\u00be',0);
respond.send(content);
app.get('/', function(request, response) {
	response.send('hi');
    });
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
