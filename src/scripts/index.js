import styles from './../styles/styles.css';
import SearchView from './view/SearchView';
import Search from './models/Search';


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

const controlSearch = async () =>{

    // - get query from the view
    const query = 'pizza'; //TODO

    if(query){
        // new search object and add to state
        state.search = new Search(query);

        // loader


        //search for the recipes
        await state.search.getResults();

        // render results on ui
        console.log(state.search.result);
    }
};


document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();

    controlSearch();
});




