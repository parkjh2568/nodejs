//호이스팅(hoisting)은 사전적인 의미로 끌어 올리기라는뜻
//js의 특징으로 함수안에서 변수를 선언할때
//어느위치에 있어도 항상 함수의 시작위치로 끌어올림.
//단 선언부분반 위로 끌어올리고 값을 대입하는부분은 그위치에있으므로
//순서에 신경써야하는건 마찬가지.

function foo() {
	console.log(a);  // undefined
	var a = 100;
	console.log(a);  // 100
}

foo();
//위와같은경우도 a선언이 안되어있지만 js에서는
//호이스팅을 통해 var a라는 선언을 함수 제일위에서 해주기때문에
//에러없이 작성이되며 위내용은 사실

// function foo() {
// 	var a;  <<호이스팅에의해 함수선언이 생성된것과 같다.
// 	console.log(a);  // undefined
// 	var a = 100;
// 	console.log(a);  // 100
// }

// foo();

// 위의 내용과 같은 코드임