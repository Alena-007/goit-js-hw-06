const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputChange);

function inputChange(event) {
    spanEl.textContent = event.currentTarget.value;
}
