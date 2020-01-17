import styles from './../styles/styles.css';
import axios from 'axios'
import SearchView from './view/SearchView';

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./../icons/', true, /\.svg$/));

console.log(SearchView);

async function getResults(query) {
    const ID = '0b4f11dd';
    const KEY = '51a2d8bad09a42a5663f92fe7d234c29';
    const PROXY = '';

    try{
        const res = await axios(`${PROXY}https://api.edamam.com/search?app_key=${KEY}app_id=${ID}&q=${query}`);
        const result = res.data.hits;
        console.log(result);
    }
    catch (error) {
        alert(error);
    }

}

getResults('tomato pasta');

