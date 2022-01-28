import React from 'react';
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss"
import homeIcon from "../../images/popcorn.png"

const Home = () => {
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
