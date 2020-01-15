import styles from './../styles/styles.css';

import SearchView from './view/SearchView';

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./../icons/', true, /\.svg$/));

console.log(SearchView);