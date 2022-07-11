const inputEl = document.querySelector('input');
const btnCreateBtn = document.querySelector('button[data-create]');
const btnDestroyBtn = document.querySelector('button[data-destroy]');

// console.log(btnCreateBtn);

inputEl.addEventListener('input', inputChange);
btnCreateBtn.addEventListener('click', createBoxes);
btnDestroyBtn.addEventListener('click', destroyBoxes);

function inputChange(amount) {
    inputEl.setAttribute('count', Number(amount.currentTarget.value));
}

let startBoxSize = 30;

function createBoxes() {
    let countBox = Number(inputEl.getAttribute('count'));
    for (let i = 0; i < countBox; i += 1) {
        startBoxSize += 10;
        const newBox = document.createElement('div');
        newBox.style.background = getRandomHexColor();
        newBox.style.height = startBoxSize + 'px';
        newBox.style.width = startBoxSize + 'px';
        newBox.style.margin = '10px';
        newBox.classList.add('new-box');
        boxes.append(newBox);
    }
}

function destroyBoxes() {
    const allNewBoxes = document.querySelectorAll('.new-box');
    for (let allNewBoxe of allNewBoxes) {
        boxes.removeChild(allNewBoxe);
    }
    startBoxSize = 30;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
