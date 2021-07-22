//객체 생성시 데이터를 받아와서 생성가능
function SoccerPlayer(name, position) { 
  this.name = name;
  this.position = position; 
  this.whatIsYourName = function () {
    return "My name is " + this.name;
  };
  this.whatIsYourPosition = function () { 
    return "My position is " + this.position;
}; 
}
  var UnKnown = new SoccerPlayer();
  var Junhypar = new SoccerPlayer('junhypar', 'wing forward');
  console.log(UnKnown.whatIsYourName());
  console.log(UnKnown.whatIsYourPosition());
  console.log(Junhypar.whatIsYourName());
  console.log(Junhypar.whatIsYourPosition());

  //새로운 객체를 만들면 이런식으로 contructor라는속성이 자동으로 생김.
  //이건 객체를 만들때 어떤객체를 참조했는지 확인가능.
  //생성된 객체의 constructor를 이런식으로 불러오기 가능
  Junhypar.constructor;

  var player2 = new Junhypar.constructor("이게", "되냐");
  console.log(player2.whatIsYourName());
  console.log(player2.whatIsYourPosition());
  // instanceof 연산자를 이용해 이 객체가 어떤 생성자를 이용했는지 테스트가능

  function Ttrash(){
    this.name = "trash";
  };
 console.log( Junhypar instanceof SoccerPlayer);
 console.log(Junhypar instanceof Object);
 console.log(player2 instanceof SoccerPlayer);
 //true

 console.log(player2 instanceof Ttrash);
//false

//그외에 내장된 객체로 
//Object, Number, Array, String, Boolean, Function
//RegExp, Math, Date, Error등이있다