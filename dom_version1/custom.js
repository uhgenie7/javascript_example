let firstWord = document.querySelector(".startWord");
let form = document.querySelector("form");
let innerText = form.querySelector(".text");
let button = form.querySelector("button");
let result = document.querySelector(".result");
 
function callBack(e) {
    e.preventDefault();
    if (firstWord.textContent[firstWord.textContent.length - 1] === innerText.value[0]) {
        result.textContent = '딩동댕';
        firstWord.textContent = innerText.value;
        innerText.value = '';
        innerText.focus();
    } else {
        result.textContent = '땡';
        innerText.focus();
        
    }
}

form.addEventListener('submit', callBack);
