const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

// console.dir(inputEl);

// console.dir(spanEl);

inputEl.addEventListener('input', inputChange);

function inputChange(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
