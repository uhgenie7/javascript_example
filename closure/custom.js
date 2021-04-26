var d = 'X';

function outer() {
    var a = 1;
    var b = 'B';

    function inner() {
        var a = 2;
        console.log(b);
    }
    return inner;
}

var someFun = outer();
someFun();

//a 에 무슨 값이 들어있는지 찾는 '곳'이 스코프
//함수단위로 스코프가 생성된다.

//console.log(a)에서 a가 어떤 a 인지 찾을 때 들여다보는 곳이 '스코프'이다.
//inner에서 a를 찾는다.

//생성한 시점에 스코프 체인을 계속 들고 있는다. 들고 있기 때문에 일종의 클로저이다.
//클로저 때문에 outer()가 실행된 다음에도 inner가 살아있다.