import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


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
            console.log(data)
            dispatch(SET_MOVIE(data));
        } catch (e) {
            const err = e;
            return rejectWithValue(err.response?.data);
        }
    }
)

export const findMovie =  createAsyncThunk(
    'movieSlice/findMovie',

    async ({find : query}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await moviesService.find(query);
            dispatch(FIND_MOVIE(data));
        } catch (e) {
            const err = e;
            return rejectWithValue(err.response?.data);
        }
    }
)

export const showFindMovie =  createAsyncThunk(
    'movieSlice/showFindMovie',

    async ({id, find}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await moviesService.getById(id);
            dispatch(SET_FINDMOVIE({data, find}));
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
    movie: null,
    filtMovies: [],
    findMovies: [],
    allFindMovies: []
}


const movieSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        SET_MOVIES: (state,action) => {
            state.movies = action.payload;
        },
        CHANGE_PAGE: (state, action) => {
            state.page += action.payload;
        },
        UPDATE_PAGES: (state, action) => {
            state.pages = action.payload;
        },
        SET_MOVIE: (state,action) => {
            state.movie = action.payload;
        },
        SET_FINDMOVIE: (state,action) => {
                state.allFindMovies.push(action.payload.data);
        },
        SET_FILTMOVIES: (state,action) => {
            state.filtMovies.push(action.payload.movie);
        },
        DELETE_FILTMOVIES: (state,action) => {
            state.filtMovies.pop(action.payload);
        },
        FIND_MOVIE: (state,action) => {
            state.findMovies = [];
            state.findMovies = action.payload;
        },

    },
    extraReducers: {
        [showMovies.pending]: () => console.log('pending'),
        [showMovies.fulfilled]: () => console.log('fulfilled'),
        [showMovies.rejected]: (e) => console.log(e)
    }
});

const movieReducer = movieSlice.reducer;
export const {SET_MOVIES, CHANGE_PAGE, UPDATE_PAGES, SET_MOVIE, SET_FILTMOVIES, DELETE_FILTMOVIES, FIND_MOVIE, SET_FINDMOVIE} = movieSlice.actions;

export {
    movieReducer
}