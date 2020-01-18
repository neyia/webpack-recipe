import styles from './../styles/styles.css';
import Search from './models/Search';
import * as searchView from './view/SearchView'
import {elements} from './view/base';

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./../icons/', true, /\.svg$/));


//the global state
// - search object
// - current recipe object
// - shopping list object
// - liked recipes

const state = {};

const controlSearch = async () => {

    // - get query from the view
    const query = searchView.getInput();

    if (query) {
        // new search object and add to state
        state.search = new Search(query);

        // loader
        searchView.clearInput();
        searchView.clearResults();

        //search for the recipes
        await state.search.getResults();

        // render results on ui
        searchView.renderResults(state.search.result);
    }
};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    controlSearch();
});




