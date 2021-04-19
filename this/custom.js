//상황 1.
let someone = {
    name: 'hyejin',
    whoAmI: function () {
        console.log(this);
    }
}

someone.whoAmI();
//console.log : {name: "hyejin", whoAmI: ƒ}


let myWhoAmI = someone.whoAmI;
myWhoAmI();

//console.log : 
//Window { window: Window, self: Window, document: document, name: "", location: Location, … }

//분명 같은 것을 호출한 것 같은데 값이 달라졌다.
//이것이 바로 호출하는 방법이 달라진 것.
//호출을 '누가' 했는가 ?

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', someone.whoAmI);

//console.log: (<button>...</button>)

//호출을 무관하게 하려면 bind를 써라

let bindedWhoAmI = myWhoAmI.bind(someone);
//someone을 this로 무조건 받겠다.
bindedWhoAmI();
let btn = document.querySelector('#btn');
btn.addEventListener('click', bindedWhoAmI);
// console.log : {name: "hyejin", whoAmI: ƒ}

// anather example
var value = 100;

var myObject = {
    value : 1,
    func1 : function() {
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function() {
            this.value += 1; 
            console.log('func2() called. this.value : ' + this.value);

            func3 = function() {
                this.value += 1; 
                console.log('func3() called. this.value : ' + this.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();

// 브라우저의 글로벌 객체는 window 객체이며 myObject.fun1() 처럼 객체의 속성으로 접근한 것이 아니라 함수 이름으로만 호출하게 되면 함수 실행 컨텍스트의 this에 글로벌 객체(windows)가 지정됩니다.