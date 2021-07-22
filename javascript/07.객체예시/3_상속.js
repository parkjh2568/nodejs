function Man() {
	this.name = "Anonymous";
	this.gender = "Man";
	this.Run = function () {
		return this.name + " is running!";
	}
	this.Sleep = function () {
		return this.name + " is sleeping!";
} }

function SoccerPlayer () { 
	this.base = new Man();
	this.name = "Anonymous Soccer Player"; 
	this.Run = function () {
		return this.base.Run();
	}
	this.Pass = function () {
		return this.name + "is passing to other player!";
} }

//이 SoccerPlayer클래스는 Man을 상속받아 생성
SoccerPlayer.prototype = new Man();

//player는 그 SoccerPlayer를 상속받아 생성
var player = new SoccerPlayer ();

//man과 soccerPlayer에 있던 모든 변수, 함수 사용가능
//중복시 최상단꺼로 사용되는느낌
console.log(player.name);
// "Anonymous Soccer Player"

console.log(player. gender);
// "Man"

console.log(player.Run());
// "Anonymous is running!"

console.log(player.Pass());
// "Anonymous Soccer Player is passing to other player!"

console.log(player.Sleep());
// "Anonymous Soccer Player is sleeping!"

console.log(player.base);
