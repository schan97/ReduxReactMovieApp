import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss"
import homeIcon from "../../images/popcorn.png"
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/movieApiKey";

const Home = () => {


  // Get the Movies
  useEffect( () => {
  
    const movieSearch = "Harry";
  
    // Gets the movies based on the movie search
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieSearch}&type=movie`
      ).catch((error) => {
        console.log("Error: ", error);
      });
      console.log("Reponse from API: ", response);
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
