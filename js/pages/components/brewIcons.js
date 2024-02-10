import { checkingredients } from '/js/tools/checkIngredients.js';

export function brewComponent (api, ingredient) {

    const brewingIndicators = document.querySelector('.brewing-indicators');

    const current = document.createElement('div');
    current.classList.add(`${ingredient}`);
    brewingIndicators.appendChild(current);

    const type = document.createElement('p');
    type.classList.add('brew-type');
    type.classList.add(`${ingredient}-type`);
    type.classList.add('small-title');
    const ingredientInfo = `${ingredient}_type`
    const info = api.acf[ingredientInfo];
    const checked = checkingredients(info, ingredient);
    type.textContent = checked;
    current.appendChild(type);

    const icon = document.createElement('img');
    icon.classList.add('ingredient-icon');
    switch (ingredient) {
        case 'hops':
            icon.src = '/media/icons/hops-green.png';
            icon.alt = 'Hop icon';
            break;
        case 'yeast':
            icon.src = '/media/icons/yeast-orange.png';
            icon.alt = 'Yeast icon';
            break;
        case 'malt':
            icon.src = '/media/icons/wheat-yellow.png';
            icon.alt = 'Malt icon';
            break;
        case 'water':
            icon.src = '/media/icons/water-blue.png';
            icon.alt = 'Water icon';
            break;    
    }
    
    current.appendChild(icon);
    
}