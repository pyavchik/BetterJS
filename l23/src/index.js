import greeting, { SEARCH_URL, SEARCH_QUERY } from "./consts ";

(async () => {
    try {
        console.log(greeting);
        const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
})();
