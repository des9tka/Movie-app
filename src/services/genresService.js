import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genresService = {
    getAll: () => axiosService.get(urls.genres)
}

export {
    genresService
}