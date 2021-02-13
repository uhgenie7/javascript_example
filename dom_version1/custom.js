let firstWord = document.querySelector(".startWord");
let innerText = document.querySelector(".text");
let button = document.querySelector("button");
let result = document.querySelector(".result");
 
function callBack() {
    if (firstWord.textContent[firstWord.textContent.length - 1] === innerText.value[0]) {
        result.textContent = '딩동댕';
        firstWord.textContent = innerText.value;
        innerText.value = '';
    } else {
        result.textContent = '땡';
        
    }
}

button.addEventListener('click', callBack);
