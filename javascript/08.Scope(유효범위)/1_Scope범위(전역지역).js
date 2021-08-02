//유효범위(scope)는 크게 전역과 지역 스코프로 정의가능
//전역변수와 함수내의 변수와 비슷한느낌.
//전역스코프는 중괄호 밖에 선언된 변수로서 이프로그렘 어디서는 참조가능
//지역스코프는 중괄호 안에 쓰인 변수로 중괄호가 쓰인 영역에서만 유효함

//전역스코프에 변수선언은 변수이름의 충돌가능성때문에 하지 않는것이 좋다.

var global_scope = 'global';  // 전역 스코프

var local_function = function() {
    var local_scope = 'goorm';  // 지역 스코프
    console.log(global_scope);  // 전역 스코프 참조 가능. global 출력
    console.log(local_scope);  // 함수 내이기 때문에 지역 스코프 참조 가능. goorm 출력
};

console.log(local_scope);  // name은 지역스코프이기 때문에 에러 발생.