//함수호이스팅도 변수호이스팅과 마찬가지로 함수선언이 
//가장위로 끌어올려지기대문에 제대로 동작한다.

foo();

function foo() {
	console.log('출력');
}

//다만 아래와 같은 방식은 작동이 제대로 안됨

foo2();  // foo is not a function

var foo2 = function() {
	console.log('출력');
};

//왜냐하면 밑에서 익명함수를 선언해서 foo2라는 변수에 선언한것과 같고
//foo2라는 '변수'가 선언이 안된것이므로 함수호이스팅이아니라 변수호이스팅이작동

// var foo2;

// foo2();  // foo is not a function

// foo2 = function() {
// 	console.log('출력');
// };

// 위와같은 코드와 같은상황이므로 foo2는 함수가 아닌 변수다보니 foo2()부분에서 에러발생