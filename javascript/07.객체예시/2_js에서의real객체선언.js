
//js에서는 암묵적으로 함수의 첫글자를 대문자로 설정하면 객체로 선언한것임을 알림
//이렇게 생성된 클래스(객체)에는
//객체.prototype이 존제하는데 이곳에 객체의 밑바탕을 깔수있다.
//이 prototype은 c++클래스에서 우리가
//private:
//  int a;
//  char b;
//같은식으로 클래스에서 사용할 변수를 미리지정해주는것과 같은내용

var SoccerPlayer = function () { };

SoccerPlayer.prototype = { 
	name: String,
	age: Number,
	height: Number,
	weight: Number,
	position: String,
	team : String
};

//SoccerPlayer객체를 베이스로 park_ji_sung이라는 새로운 객체를 생성
// SoccerPlayer를 상속받은것과 같다.
var park_ji_sung = new SoccerPlayer(); 

park_ji_sung.name = "Park Ji Sung"; 
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung.weight = 70;

console.log(park_ji_sung);

//c++클래스와 마찬가지로 public, private, protected를 통해 접근성관리가능
//추상화, 상속 가능