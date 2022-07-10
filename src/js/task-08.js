const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (formElements.email.value === '' || formElements.password.value === '') {
        return alert('All fields must be filled');
    }
    const formData = {
        email,
        password,
    };

    formEl.reset();

    console.dir(formData);
}
