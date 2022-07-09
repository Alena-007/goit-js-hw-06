const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const itemEl = document.createElement('li');
itemEl.class = 'item';

const createLi = array => array.map(el => `<li>${el}</li>`).join('');
// console.log(createLi(ingredients));

const list = createLi(ingredients);
// console.log(list);

const listEl = document.querySelector('ul');

listEl.insertAdjacentHTML('beforeend', list);
