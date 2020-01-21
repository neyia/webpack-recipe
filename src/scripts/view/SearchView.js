import {elements} from './BasicElements';

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    return elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
    elements.searchResultsPages.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 30) => {
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
        <a class="results__link" href="${recipe.recipe.url}" target="_blank">
            <figure class="results__img">
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" />
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.recipe.label)}</h4>
                <p class="results__author">${recipe.recipe.source}</p>
            </div>
        </a>
    </li>
   `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};


const createButtons = (page, type) => {
   return ( `
    <button type="button" class="btn btn__pagination btn-${type}" data-attr="${type === 'prev' ? page - 1 : page + 1}">
        <svg class="icon-pagination icon-pagination--${type}">
            <use href="./../icons/icons.svg#arrow"></use>
        </svg> 
        go to page ${type === 'prev' ? page - 1 : page + 1}
    </button>`)
};

const renderButtons = (page, numberResults, resultsPerPage) => {
    const pages = Math.ceil(numberResults / resultsPerPage);
    let button;

    if (page === 1 && pages > 1) {
        button = createButtons(page, 'next');
    } else if (page < pages) {
        button = `
            ${createButtons(page, 'prev')}
            ${createButtons(page, 'next')}
        `;

    } else if (page === pages && pages > 1) {
        button = createButtons(page, 'prev');
    }
    else {
        button = 'error here'
    }

    elements.searchResultsPages.insertAdjacentHTML('afterbegin', button);

};

export const renderResults = (recipes, page = 1, resultsPerPage = 3) => {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    renderButtons(page, recipes.length, resultsPerPage);
};