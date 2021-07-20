var int_data = 1;
var float_data1 = Number('1.0');
var float_data2 = new Number('4.1254');
//c++의 Number라는 클래스가 있는것과 비슷하게 생각하면 될듯
//숫자에 관련한 모든 자료형을 가진다는듯 10,8,16진수, 소수점, 실수,지수등...

console.log(typeof int_data);
 console.log(typeof float_data1);
 console.log(typeof float_data2);

console.log((255).toString(10));//255를 10진수로
console.log((255).toString(16));//255를 16진수로

console.log((255).toString(8));//255를 8진수로

console.log((255).toString(2));//255를 2진수로

