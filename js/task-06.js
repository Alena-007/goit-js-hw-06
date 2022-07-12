const inputEl = document.querySelector('#validation-input');
const valueLength = parseInt(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', borderChange);

// console.log(valueLength);

function borderChange(event) {
    if (event.currentTarget.value.length === valueLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}
