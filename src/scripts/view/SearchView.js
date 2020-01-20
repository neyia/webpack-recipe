import {elements} from './BasicElements';

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    return elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};

// pasta with tomato and spinach

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];

    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')}...`;
    }
    return title;
};


const renderRecipe = recipe => {
    const markup = `
    <li class="results-item">
        <a class="results__link" href="#${recipe.recipe.yield}">
            <figure class="results__img">
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.recipe.label)}</h4>
                <p class="results__author">The deeper</p>
            </div>
        </a>
    </li>
   `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};


const createButtons = (page, type) => {
    `<button type="button" class="btn btn-${type}" data-attr="${type === 'prev' ? page - 1: page + 1}"> 
        left ${type === 'prev' ? page - 1: page + 1}
    </button>`
};

const renderButtons = (page, numberResults, resultsPerPage) => {
    const pages = Math.ceil(numberResults / resultsPerPage);

    if (page === 1 && pages > 1) {
        createButtons(page, 'next')
    } else if (page < pages) {
        //button next + prev
    } else if (page === pages && pages > 1) {
        createButtons(page, 'prev')
    }
    else{

    }
};

export const renderResults = (recipes, page = 1, resultsPerPage = 5) => {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;

    recipes.slice(start, end).forEach(renderRecipe);
};