var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(4000);
console.log('Server running!');

function doRequest(req, res){
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write('Hello World\n');
	res.end();
}
