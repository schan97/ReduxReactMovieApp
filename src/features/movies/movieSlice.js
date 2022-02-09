import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async () => {
        const movieSearch = "Harry";

        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${movieSearch}&type=movie`
        );

         return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    'shows/fetchAsyncShows', 
    async () => {
        const showsSearch = "Friends";

        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${showsSearch}&type=series`
        );

         return response.data;
    }
);

export const fetchAsyncTitleDetails = createAsyncThunk(
    'title/fetchAsyncTitleDetails', 
    async (id) => {

        const response = await movieApi.get(
          `?apiKey=${APIKey}&i=${id}&Plot=full`
        );

         return response.data;
    }
);

const initialState = {
    movies:{},
    shows:{},
    titleDetails:{},
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
        // Movies
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
        
        //Shows
        [fetchAsyncShows.pending] : () => {
            console.log("Pending")
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfull");
            return {...state, shows: payload};
        },
        [fetchAsyncShows.rejected] : () => {
            console.log("Rejected")
        },


        //Details
        [fetchAsyncTitleDetails.pending] : () => {
            console.log("Pending")
        },
        [fetchAsyncTitleDetails.fulfilled] : (state, {payload}) => {
            console.log("Fetched Successfull");
            return {...state, titleDetails: payload};
        },
        [fetchAsyncTitleDetails.rejected] : () => {
            console.log("Rejected")
        },
    },
});

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getTitleDetails = (state) => state.movies.titleDetails;

export default movieSlice.reducer;