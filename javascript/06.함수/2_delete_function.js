function sum(a, b) { 
	var c = a + b;
	return c; 
}

var add = sum;
typeof add;
//"function"
//함수포인터마냥 할당해서 사용가능

console.log(add(1,2));
// 3

var student = {
	name : 'goorm',
	age : 20
}

console.log(student.name);

delete student.name;
// true

console.log(student.name);
//undefined

delete student;
// false -->객체 자체를 삭제 불가

delete not_exist;
// true

console.log(student.age);

//delete를 통해 메모리에 할당된 객체의 속성 삭제 가능
// 객체 자체는 삭제할수 없다.