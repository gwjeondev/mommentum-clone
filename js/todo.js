const info_todo = document.querySelector('.info__todoset');
const in_todoname = info_todo.querySelector('.info__inlist');
const todo_list = document.querySelector('.info__todolist');


const toDoitem = 'toDoitem';
let toDoAry = [];

function savetoDo() {
    localStorage.setItem(toDoitem, JSON.stringify(toDoAry));
}

function delTodo(event) {
    const e = event.target;
    const li = e.parentNode;
    todo_list.removeChild(li);
    const clear = toDoAry.filter(function(todo) {
        console.log(todo.number, li.className);

        return todo.number !== li.className;
    })
    toDoAry = clear;
    savetoDo(toDoAry);
}

function createTodo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const del_btn = document.createElement("button");
    span.innerText = text;
    del_btn.innerText = 'del';
    del_btn.addEventListener("click", delTodo);
    li.appendChild(span);
    li.appendChild(del_btn);
    todo_list.appendChild(li);
    li.classList.add(`todolist--${toDoAry.length + 1}`);
    const toDoObj = {
        number: `todolist--${toDoAry.length + 1}`,
        text: text
    };
    toDoAry.push(toDoObj);
    savetoDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const toDocurrentValue = in_todoname.value;
    in_todoname.value = "";
    createTodo(toDocurrentValue);
}

function loadTodo() {
    const TODOITEM_CHECK = localStorage.getItem(toDoitem);

    if (TODOITEM_CHECK !== null) {
        const parsedTodo = JSON.parse(TODOITEM_CHECK);
        parsedTodo.forEach(function(text) {
            createTodo(text.text);
        })
    }
}

function init() {
    loadTodo();
    info_todo.addEventListener("submit", handleSubmit);
}
// info_todo.addEventListener("submit", handleSubmit);
init();
