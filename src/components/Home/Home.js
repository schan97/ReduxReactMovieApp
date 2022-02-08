import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss"
import homeIcon from "../../images/popcorn.png"

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {

  // dispatch allows you to get the methods in the reducers
  const dispatch = useDispatch();

  
  useEffect( () => {
    // Get the Movies
    dispatch(fetchAsyncMovies());

  },[dispatch]);



  
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
