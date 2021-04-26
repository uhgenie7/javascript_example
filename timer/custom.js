// function yo() {
//     setTimeout(function () {
//         console.log('1.5초 타이머 끝!')
//     }, 1500);

//     for (let i = 0; i < 3; i++){
//         doSomething(); //가정 : 매번 1초가 걸리는 일
//         console.log(i);
//     }
//     console.log('3초 걸리는 for 문 끝');
// }

// yo();

// console.log('main 끝!');



// function firstF() {
//   let s = new Date().getSeconds();
//   setTimeout(function() {
//     // prints out "10", meaning that the callback is not called immediately after 500 milliseconds.
//     console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
//   }, 500)
//   while (true) {
//     if (new Date().getSeconds() - s >= 5) {
//       console.log("Good, looped for 5 seconds")
//       break;
//     }
//   }
// }

// function secondF() {
//   let t = new Date().getSeconds();
//   while (true) {
//     if (new Date().getSeconds() - t >= 5) {
//       console.log('You waited 5 more seconds');
//       break;
//     }
//   }
// }

// firstF();
// secondF();

setTimeout(function() {
    console.log("Bye, World!");
}, 0);
console.log("Hello, World!")