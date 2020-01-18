import {elements} from './base';

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    return elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};


const renderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe.yield}">
            <figure class="results__img">
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.recipe.label}</h4>
                <p class="results__author">The deeper</p>
            </div>
        </a>
    </li>
   `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};


export const renderResults = recipes => {

    recipes.forEach(renderRecipe);
};