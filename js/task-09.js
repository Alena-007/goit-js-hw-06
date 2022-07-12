const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

// console.dir(bodyEl);

btnEl.addEventListener('click', changeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    spanEl.textContent = getRandomHexColor();
}
