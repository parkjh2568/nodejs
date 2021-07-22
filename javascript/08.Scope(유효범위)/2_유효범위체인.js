//위에서 말했지만 지역스코프는 선언한곳의 중괄호가 쌓인 모든영역에서 참조가능
//그렇다보니 함수내의 함수가 선언이 되었을경우
//상위함수에서 선언된 변수도 이 내부함수에서 참조가 가능하게됨
//이런 물고물리는 상태를 스코프 체인이라 부름


var a = 1;

function outer() {
	var b = 2;
	console.log(a); // 1
	
	function inner() {
		var c = 3;
		console.log(b);
		console.log(a); 
	}
	
	inner();  // 2 1
}
outer();

console.log(c);  // c is not defined