import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss"
import homeIcon from "../../images/popcorn.png"
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {

  
  const movieSearch = "Harry";
  const dispatch = useDispatch();

  // Get the Movies
  useEffect( () => {
    // Gets the movies based on the movie search
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieSearch}&type=movie`
      ).catch((error) => {
        console.log("Error: ", error);
      });

      dispatch(addMovies(response.data));
    };

    fetchMovies()

  },[]);



  
  return (
    <div>
      <div className='banner-img'>
        <img src={homeIcon}></img>
      </div>
      <MovieListing/>
    </div>
    
  );
};

export default Home;
