function one() { 
	return 1;
}
function invoke_and_add(a, b) {
  return a() + b();
}
invoke_and_add(one, function() { 
  return 2; 
});

//함수의 인자로 함수를 쓰는데 그것은 익명함수를 곁들인