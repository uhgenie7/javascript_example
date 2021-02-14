let mainResult = document.querySelector("h1");
let form = document.querySelector(".gameForm");
let input = form.querySelector(".gameInput");
let button = form.querySelector(".gameButton");

let numCandidate;
let numArray;
let wrongNumber = 0;
input.maxLength = 4;


function drawNum() {
    numCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArray = [];
    for (let i = 0; i < 4; i++){
        let takeNumCandi = numCandidate.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        numArray.push(takeNumCandi);
    } 
}

drawNum();

form.addEventListener("submit", function (e) {
    e.preventDefault;
    let answer = input.value;
    if (answer === numArray.join('')) {
        console.log("맞았어");
        mainResult.innerText = "홈런";
        input.value = ""
        input.focus();
        drawNum();
        wrongNumber = 0;
    } else {
        let answerArray = answer.split('');
        let correct = numArray.join(', ');
        let strike = 0;
        let ball = 0;
        wrongNumber += 1;
        if (wrongNumber > 3) {
            mainResult.innerText = `3번 이상 틀리셨습니다. 정답은 ${correct}였습니다.`;
            input.value = ""
            input.focus();
            drawNum();
            wrongNumber = 0;
        } else {
        for (let i = 0; i < 3; i++){
            if (Number(answerArray[i]) === numArray[i]) {
                strike += 1;
            } else if (numArray.indexOf(Number(answerArray[i])) > -1){
                ball += 1;
            }
        }
        mainResult.innerText = `${strike}스트라이크 ${ball}볼입니다.`;
        input.value = ""
            input.focus();
        }
    }
})

// 배열.join(구분자) -> 문자로 변환시켜줌
// 문자.split(구분자) -> 배열로 바꿔줌. 단 배열 안에 들어가는 것은 문자임.
// 배열.indexOf(값) -> 값의 위치를 알 수 있다. 없으면 -1 출력.