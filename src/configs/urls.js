const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500/';

const urls = {
    movies:(query) =>  `/discover/movie?page=${query}`,
    genres: '/genre/movie/list',
    id: (id) => `/movie/${id}`,
    find: (name) => `/search/movie?query=${name}`
}

export {
    baseURL,
    posterURL,
    urls
}