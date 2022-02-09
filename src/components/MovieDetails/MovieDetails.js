import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncTitleDetails, getTitleDetails } from '../../features/movies/movieSlice';
import "./MovieDetails.scss"

const MovieDetails = () => {
  // useParams allows you to get a value from the url/route
  // imdbID is specified in App.js as a Route 
  // and the value is passed from the Link in MovieCard
  const {imdbID} = useParams();

  // dispatch allows you to get the methods in the reducers
  const dispatch = useDispatch();

  // use selectors allows you to get the state from the slice
  const data = useSelector(getTitleDetails);


  useEffect(() => {
    dispatch(fetchAsyncTitleDetails(imdbID));
  },[dispatch, imdbID]);
  return (
    <div className='title-section'>
      <div className='section-left'>
        <div className='title'>{data.Title}</div>
        <div className='title-rating'>
          <span>
            IMDB Rating <i className='fa-solid fa-star'></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa-solid fa-thumbs-up'></i> : {data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa-solid fa-film'></i> : {data.Runtime}
          </span>
          <span>
            Year <i className='fa-solid fa-calendar'></i> : {data.Year}
          </span>
        </div>

        <div className='title-plot'>
          {data.Plot}
        </div>

        <div className='title-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>

          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>

          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>



      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
    </div>
  );
};

export default MovieDetails;

