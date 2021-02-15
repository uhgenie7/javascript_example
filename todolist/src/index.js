
// DOM LIST
const form = document.querySelector(".todoList");
const input = form.querySelector("input");
const pendList = document.querySelector(".pending");
const FinishList = document.querySelector(".finished");

//LOCAL LIST
const TODOS_LS = "PENDING";
const FINISH_LS = "FINISHED";

//EMPTY ARRAY
let toDos = [];
let finishDos = [];

// INPUT ADD TASK FUNCTION
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintToDo(currentValue);
  input.value = "";
}

/**/ 

//PAINTTODO
function paintToDo(text) {
  const paintLi = document.createElement("li");
  const paintSpan = document.createElement("span");
  const paintDelBtn = document.createElement("button");
  const paintCheckBtn = document.createElement("button");
  paintDelBtn.addEventListener("click", deleteToDo);
  paintCheckBtn.addEventListener("click", checkToDo);

  paintDelBtn.innerHTML = "✖";
  paintCheckBtn.innerHTML = "✔";

  paintSpan.innerText = text;
  paintLi.appendChild(paintSpan);
  paintLi.appendChild(paintDelBtn);
  paintLi.appendChild(paintCheckBtn);

  // let newId = toDos.length + 1;
  let newId = Date.now();
  paintLi.id = newId;
  pendList.appendChild(paintLi);
  const toDoObj = {
    id: newId,
    text: text
  };

  toDos.push(toDoObj);
  saveToDos();
}

//FINISHPAINT TO DO
function finishPaint(text) {
  const finishLi = document.createElement("li");
  const finishDelBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const finishSpan = document.createElement("span");

  finishDelBtn.addEventListener("click", finishdeleteToDo);
  backBtn.addEventListener("click", backToDo);

  finishDelBtn.innerHTML = "✖";
  backBtn.innerHTML = "⏪";
  
  finishSpan.innerText = text;
  finishLi.appendChild(finishSpan);
  finishLi.appendChild(finishDelBtn);
  finishLi.appendChild(backBtn);

  FinishList.appendChild(finishLi);

  // const newId = toDos.length + 1;
  // finishLi.id = newId;
  // FinishList.appendChild(li);
  // const toDoObj = {
  //   text: text,
  //   id: newId
  // };
  // finishDos.push(toDoObj);
  // saveToDos2();
}

/*event section*/ 
//CHECKTODO EVENT
function checkToDo(event) {
  const checBtn = event.target;
  const checkLi = checBtn.parentNode;
  pendList.removeChild(checkLi);

  const finishTodo = FinishList.appendChild(checkLi);
  const backBtn = document.createElement("button");
  finishTodo.appendChild(backBtn);
  this.remove();

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(checkLi.id);
  });

  toDos = cleanToDos;
  saveToDos();

  FinishList.appendChild(checkLi);
  const finishId = parseInt(checkLi.id);
  const movetext = checkLi.firstChild.innerText;
  const finishObj = {
    text: movetext,
    id: finishId
  };
  finishDos.push(finishObj);
  saveToDos2();
  backBtn.innerHTML = "⏪";
  backBtn.addEventListener("click", backToDo);
}


//DELETETODO EVENT
function deleteToDo(event) {
  const delBtn = event.target;
  const delLi = delBtn.parentNode;
  const cchec = delLi.parentNode;
  console.log(delLi);
  console.log(cchec);
  if (cchec.className == "pending") {
    pendList.removeChild(delLi);
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(delLi.id);
    });

    toDos = cleanToDos;

    saveToDos();

  } else {
    FinishList.removeChild(delLi);
    const cleanToDoss = finishDos.filter(function (toDo) {
      return toDo.id !== parseInt(delLi.id);
    });

    finishDos = cleanToDoss;

    saveToDos2();
  }
}

function finishdeleteToDo(event) {
  const delBtn = event.target;
  const delLi = delBtn.parentNode;
  FinishList.removeChild(delLi);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(delLi.id);
  });

  finishDos = cleanToDos;

  saveToDos2();
}

// Backtodo EVENT
function backToDo(event) {
  const backBtn = event.target;
  const backLi = backBtn.parentNode;
  FinishList.removeChild(backLi);

  const backTodo = pendList.appendChild(backLi);
  const backBtnss = document.createElement("button");
  backTodo.appendChild(backBtnss);
  this.remove();
  
  const cleanToDoss = finishDos.filter(function (toDo) {
    return toDo.id !== parseInt(backLi.id);
  });
  
  finishDos = cleanToDoss;
  saveToDos2();

  pendList.appendChild(backLi);
  const backId = parseInt(backLi.id);
  const movetext = backLi.firstChild.innerText;
  const backObj = {
    text: movetext,
    id: backId
  };
  toDos.push(backObj);
  saveToDos();

  backBtnss.innerHTML = "✔";
  backBtnss.addEventListener("click", checkToDo);
}



// LOCALSAVETODO
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveToDos2() {
  localStorage.setItem(FINISH_LS, JSON.stringify(finishDos));
}


function loadTodo() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const reloadTodos = localStorage.getItem(FINISH_LS);

  if (loadedToDos !== null || reloadTodos !== null) {
    const parsedPending = JSON.parse(loadedToDos);
    const parsedFinished = JSON.parse(reloadTodos);

    parsedPending.forEach(function (todo) {
      paintToDo(todo.text);
    });

    parsedFinished.forEach(function (todo) {
      finishPaint(todo.text);
    });
  }
}


function init() {
  loadTodo();
  form.addEventListener("submit", handleSubmit);
}

init();
