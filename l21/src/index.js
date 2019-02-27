// FETCH!

const SEARCH_QUERY = 'Javascript';
const SEARCH_URL = `http://openlibrary.org/search.json?q=`;
const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

fetch(API_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
});
