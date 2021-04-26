// 화살표 함수에는 없는 것: 함수 이름, this, arguments

// function myFun() {
    
// }


// () => {

// }

//AF는 이름이 없다. 그럼 어떻게 핸들링 하는가?
// 변수에 담아 썼던 기존 함수처럼 쓴다.

// const myFun = function () {
    
// }

// const myFun = () => {

// }

// 

// 함수가 실행될 때는 자신만의 this가 생긴다.
// 그러나 AF는 자신만의 this가 없다.
// 그럼 그 안의 this는? 자기 안에 스코프에 없으면 다음 this를 찾는다.

// const btn = document.getElementById('btn');
// var myObj = {
//     count: 0,
//     setCounter: function () {
//         console.log(this.count);
//         btn.addEventListener('click', (function () {
//             console.log(this);
//         }).bind(this));
//     }
// };

// myObj.setCounter();

// 3

// 화살표 함수를 쓰면 bind를 쓸 필요가 없다.
// 왜? 화살표 함수엔 this가 없으니까 바로 다음 스코프를 찾아 가기 때문.


const btn = document.getElementById('btn');
var myObj = {
    count: 0,
    setCounter: function () {
        console.log(this.count);
        btn.addEventListener('click', () => {
            console.log(this.count++);
        });
    }
};

myObj.setCounter();

// 

const Myclass = function () {
    
}

new Myclass();

// 이건 가능하지만,

const Myclass = () => {
    
}

new Myclass();

// AF는 this가 없으므로 constructor로 쓸 수 없다. 즉, 프로토타입도 존재하지 않음.

const myFun = function () {
    console.log(arguments);
    // 배열은 아닌데 배열같이 접근이 가능하다.
}

const myFun2 = () => {
    console.log(arguments);
}

myFun(1, 2, 3, 4);
myFun2(1, 2, 3, 4);
// arguments가 존재하지 않는다고 에러 나옴.

function outter() {
    const myFun2 = () => {
        console.log(arguments);
    }
    myFun2();
}

outter(1, 2, 3, 4);

// 스코프 때문에 출력이 가능함.
// 그럼 화살표 함수에서 arguments를 받는 방법은 없을까?

const myFun2 = (...args) => {
    console.log(args);
}

myFun2(1, 2, 3);

// ... 이라는 뜻은 파라미터를 배열로 묶어서 args로 받을게, 라는 뜻.
// 이것은 실제 배열이다.