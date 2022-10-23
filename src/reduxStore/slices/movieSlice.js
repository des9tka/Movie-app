import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";


export const showMovies =  createAsyncThunk(
    'movieSlice/showMovies',


    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await moviesService.getAll(page);

            dispatch(SET_MOVIES(data.results));
            dispatch(UPDATE_PAGES(data.total_pages));
            return data;
        } catch (e) {
            const err = e;
            return rejectWithValue(err.response?.data);
        }
    }
)

export const showMovie =  createAsyncThunk(
    'movieSlice/showMovie',

    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await moviesService.getById(id);
            dispatch(SET_MOVIE(data));
        } catch (e) {
            const err = e;
            return rejectWithValue(err.response?.data);
        }
    }
)

const initialState = {
    movies:[],
    page: 1,
    pages: null,
    movie: null
}

const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        SET_MOVIES: (state,action) => {
            state.movies = action.payload
        },
        CHANGE_PAGE: (state, action) => {
            state.page += action.payload
        },
        UPDATE_PAGES: (state, action) => {
            state.pages = action.payload
        },
        SET_MOVIE: (state,action) => {
            state.movie = action.payload
        }
    },
    extraReducers: {
        [showMovies.pending]: () => console.log('pending'),
        [showMovies.fulfilled]: () => console.log('fulfilled'),
        [showMovies.rejected]: (e) => console.log(e)
    }
});

const movieReducer = movieSlice.reducer;
export const {SET_MOVIES, CHANGE_PAGE, UPDATE_PAGES, SET_MOVIE} = movieSlice.actions;

export {
    movieReducer
}