function one() {
    return 1;
  }
  
  var two = function () {
    return 2;
  }
  function invoke_and_add(a, b) {
    return a() + b();
  }
  
  console.log(invoke_and_add(one, two));
  // 함수의 인자로 함수를 사용