import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genreSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
});

export default store;