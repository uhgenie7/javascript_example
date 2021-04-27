// ajax('http://a.com/api/book', (result) => {
    
// });

function delay(sec, callback) {
    setTimeout(() => {
            callback(new Date().toISOString());
        }, sec * 1000);
}

        
// console.log('start', new Date().toISOString());
    
// delay(1, (result) => {
//     console.log(1, result);
// });

// console.log('hello');



function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
    // resolve 할일을 다했을 때 호출
    // reject 할일을 하다가 에러, 예외가 일어났을 때 호출
}

delayP(1).then((result) => {
    console.log(1, result);
    return delayP(1);
}).then((result) => {
    console.log(2, result);
    return delayP(1);
}).then((result) => {
    console.log(3, result);
    return '끝'
}).then((result) => {
    console.log(result);
});
// 실행에 필요한 옵션을 파라미터로 넘기고, .then으로 결과를 받을 콜백을 넘김
// then 메소드는 promise의 인스턴스임.


