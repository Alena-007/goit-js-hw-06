const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createLi = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.class = 'item';
    itemEl.textContent = ingredient;

    return itemEl;
});

const listEl = document.querySelector('ul');

listEl.append(...createLi);
