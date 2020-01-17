import styles from './../styles/styles.css';
import SearchView from './view/SearchView';
import Search from './models/Search';

function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('./../icons/', true, /\.svg$/));

//the global state

const state = {};


const search = new Search('pizza');
console.log(search);
search.getResults();