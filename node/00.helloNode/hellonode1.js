// hellonode1.js
// localhost:3000 포트에 실행
var server = require('http');

server.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end("Hello node.js! \n");
}).listen(3000);
//localhost부분에 생성한 도메인으로 변환가능
console.log('Server is running at http://localhost:3000/');