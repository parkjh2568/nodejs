//  main.js

var fs = require("fs"); 
//fs라는 파일 모듈을 가지고와서 readfile로 읽어오기
fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data + " Node.js!");
});