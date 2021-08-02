// main.js
//events라는 모듈은 노드에서 비동기 이벤트를 생성,관리
var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str) {
  console.log("Hello! " + str );
});

//ms단위뒤에 특정함수를 콜백실행
setTimeout(function() {
  evt.emit("helloNode", "Node.js");
}, 3000);