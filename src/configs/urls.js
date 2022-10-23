const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500/'

const urls = {
    movies:(query) =>  `/discover/movie?page=${query}`,
    genres: '/genre/movie/list',
    search:(params) =>  `/search/keyword?query=${params}`,
    id: (id) => `https://api.themoviedb.org/3/movie/${id}`
}



export {
    baseURL,
    posterURL,
    urls
}