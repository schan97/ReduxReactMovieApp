import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieSearch = "Harry";

    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieSearch}&type=movie`
      )

      return response.data;
});

const initialState = {
    movies:{},
}

const movieSlice = createSlice({

    // Slice named movies
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfull");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("Rejected")
        },
    },
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;