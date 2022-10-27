import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => axiosService.get(urls.movies(page)),
    getById: (id) => axiosService.get(urls.id(id)),
    search: (call) => axiosService.get(urls.find(call))
}

export {
    moviesService
}