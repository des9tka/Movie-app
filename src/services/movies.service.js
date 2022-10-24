import {axiosService} from "./axios.service";

import {posterURL, urls} from "../configs";

const moviesService = {
    getAll: (page) => axiosService.get(urls.movies(page)),
    search: (params) => axiosService.get(urls.search(params)),
    getById: (id) => axiosService.get(urls.id(id)),
    getImg: (params) => axiosService.get(posterURL,params),
    find: (query) => axiosService.get(urls.search(query))
}

export {
    moviesService
}