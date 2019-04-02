'use strict';

// ========Top 100 фильмов=======================

const button = document.querySelector('.btn');
const api_key = '4ed79f0ffb937c1d8202a8af488a081b';
button.addEventListener('click', getObject);

function getObject(event) {
    event.stopPropagation();
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    .then(response => {
        if(response.ok) return response.json();

        throw new Error('error');
    })
    .then(data => {
        const films = data.results;
        return films;
    })
    .catch(err => console.error(err));
}