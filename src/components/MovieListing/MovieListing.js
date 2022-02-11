import React from 'react';
import Slider from 'react-slick';
import { SlickSettings } from '../../common/SlickSettings';
import {useSelector} from "react-redux";
import {getAllMovies, getAllShows} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

const MovieListing = () => {

  // React Slick Slider Settings


  // use selectors allows you to get the state from the slice
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies, renderShows = "";

  //console.log(movies.Response);
    
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}/>
    ))
  ):(
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );


  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}/>
    ))
  ):(
    <div className="movies-error">
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <div className='movie-wrapper'>
      {/* Movies */}
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...SlickSettings}>
            {renderMovies}
          </Slider> 
        </div>
      </div>

      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          <Slider {...SlickSettings}>
            {renderShows}
          </Slider>  
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
