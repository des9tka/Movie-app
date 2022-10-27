import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genresService} from "../../services";

export const showGenres =  createAsyncThunk(
    'genresSlice/showGenres',


    async (_, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await genresService.getAll()
            dispatch(SET_GENRES(data.genres));
            return data;
        } catch (e) {
            const err = e;
            return rejectWithValue(err.response?.data);
        }
    }
)

const initialState = {
    genres: [],
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        SET_GENRES: (state,action) => {
            state.genres = action.payload
        }
    },
    extraReducers: {
        [showGenres.pending]: () => console.log('pending'),
        [showGenres.fulfilled]: () => console.log('fulfilled'),
        [showGenres.rejected]: (e) => console.log(e)
    }
});

const genreReducer = genresSlice.reducer;
export const {SET_GENRES} = genresSlice.actions;

export {
    genreReducer
}