const BG = document.querySelector('.bg-image');


function background(num) {
    BG.className = `bg-img${num}`;
    // const image = new Image();
    // image.src = `../img/img${num}.jpg`;
    // image.className = 'bgimg';
    // body.prepend(image);
}  
function randomnumber() {
    const num = Math.floor(Math.random(Math.floor()) * 4 + 1);
    return num;
}

function init() {
    const number = randomnumber();
    background(number);
}

init();