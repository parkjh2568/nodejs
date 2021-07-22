var text = 'global';

function foo() {
	console.log(text);
}

function bar() {
	var text = 'bar';
    console.log(text);
	foo();
}

bar();

//위같은경우 bar, bar이 출력될것같이만 bar, global이출력됨
//각함수는 내부의 명령을 실행할때 그 변수스코프를
//선언이된 내부함수까지 찾아가서 찾는게아니라
//자기위치에서 찾고 아니면 상위부분에서 찾음.
//그렇다보니 bar에서는 text = 'bar'가 선언이되었기때문에
//console.log(text)에서 자기스코프에는 text = 'bar'가 선언이되어있으므로
//bar를 출력해줌.
//하지만 함수 foo에서 사용되는 console.log(text)는
//foo안에서 text변수를 찾지만 선언이 된것이없으므로
//상위함수인 global로 찾아나섬
//그리고 global에는 text = 'global'로 선언이 되어있어서 global이 출력이된다
//이런관계를 정적 범위라고 부름.
//--스코프를 찾는 작동원리--
//무조건 처음엔 자신의 스코프에서 선언된것을 찾고
//그후엔 상위로 올라가서 찾음 ->global까지 반복후 없으면 undefine 


var text2 = 'global';

function foo2() {
	console.log(text2);
}

function bar2() {
    text2 = 'bar2';
    console.log(text2);
    foo2();
}

bar2();
//위의 경우는 text2를 bar2에서 선언한것이아닌
//변수내용을 바꾼것이므로 bar2 bar2가 출력



var text3 = 'global';

function foo3() {
	console.log(text3);
}

function bar3() {
    text3 = 'bar3';
    console.log(text3);
    function bar4() {
        var text3 = 'bar4';
            console.log('bar4='+text3);
        function bar5() {
            console.log('bar5='+text3);
        };
        bar5();
    };
    bar4();
    foo3();
}

bar3();