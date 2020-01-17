import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const ID = '0b4f11dd';
        const KEY = '51a2d8bad09a42a5663f92fe7d234c29';
        const PROXY = '';

        try{
            const res = await axios(`${PROXY}https://api.edamam.com/search?app_key=${KEY}app_id=${ID}&q=${this.query}`);
            this.result = res.data.hits;
        }
        catch (error) {
            alert(error);
        }

    }

}
