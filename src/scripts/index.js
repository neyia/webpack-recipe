import styles from './../styles/styles.css';
import Search from './models/Search';
import Button from './models/Button';
import * as searchView from './view/SearchView';
import * as buttonTest from './view/ButtonView';
import {elements, renderLoader, clearLoader} from './view/BasicElements';


let buttonOnWEb = new Button(buttonTest);
buttonOnWEb.renderButton();


function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./../icons/', true, /\.svg$/));
const state = {};
const controlSearch = async () => {
    const query = searchView.getInput();


    if (query) {
        state.search = new Search(query);


        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResultLoader);

        await state.search.getResults();
        clearLoader();

        searchView.renderResults(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResultsPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn');

    if (btn) {
        const goToPage = parseInt(btn.dataset.attr, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
    }

});


