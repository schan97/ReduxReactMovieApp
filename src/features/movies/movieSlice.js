import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies:{},
}

const movieSlice = createSlice({

    // Reducer named movies
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload}) => {
            state.movies = payload;
        }
    },
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;