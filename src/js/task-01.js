const itemsEl = document.querySelectorAll('.item');
// console.log(itemsEl);

const numberOfItemsEl = itemsEl.length;
console.log('Number of categories:', numberOfItemsEl);

itemsEl.forEach(function (el, index) {
    const numberOfElements = el.querySelectorAll('li');
    // console.log(numberOfElements);
    const nameOfElements = el.querySelector('h2');
    console.log('Category:', nameOfElements.textContent);
    console.log('Elements:', numberOfElements.length);
});
