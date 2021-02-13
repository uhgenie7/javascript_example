
    let numCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numArray = [];
    for (let i = 0; i < 4; i++){
        let takeNumCandi = numCandidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        numArray.push(takeNumCandi);
    }
    console.log(numArray);


// splice는 뒤에 배열[]을 붙혀주지 않으면 배열 그 자체로 하나씩 반환한다.

let mainResult = document.querySelector("h1");
let form = document.querySelector(".gameForm");
let input = form.querySelector(".gameInput");
let button = form.querySelector(".gameButton");

input.maxLength = 4;

form.addEventListener("submit", function (e) {
    e.preventDefault;
    let answer = input.value;
    if (answer === numArray.join('')) {
        console.log("맞았어");
        mainResult.innerText = "홈런";
        input.value = ""
        input.focus();
    } else {
        console.log("틀렸어");
        mainResult.innerText = "꽝";
    }
})

// 배열.join(구분자) -> 문자로 변환시켜줌
// 문자.split(구분자) -> 배열로 바꿔줌.