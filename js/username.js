const info_name = document.querySelector('.info__nameset');
const in_name = info_name.querySelector('.info__inname');
const name_text = document.querySelector('.info__name_text');

const USER_NAME = 'currentUser';

function nameView(name) {
    info_name.classList.add('username--hide');
    name_text.classList.add('username--show');
    name_text.innerText = `Welcome to TodoList! Hello ${name}`;
}
function saveName(name) {
    localStorage.setItem(USER_NAME, name);
}
function addName(event) {
    event.preventDefault();
    const currentValue = in_name.value;
    nameView(currentValue);
    saveName(currentValue);
}

function notloadName() {
    info_name.addEventListener("submit", addName);
} 

function loadName() {
    
    const USER_NAME_CHECK = localStorage.getItem(USER_NAME);

    if (USER_NAME_CHECK === null) {
        notloadName();

    } else {
        nameView(USER_NAME_CHECK);
    }
}

function init() {
    loadName();
}

init();