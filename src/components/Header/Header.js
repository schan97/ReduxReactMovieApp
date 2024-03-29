import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png"
import "./Header.scss"

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if(term != "")
    {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm("");
  
      // navigate to home to display the new results
      navigate("/");
    }
    else
    {
      alert("Please enter a search term!");
    }

   
  };
  return (
    <div className='header'>

      <div className='logo'>
        <Link to="/">
          Movie App
        </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)}/>
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>

        
      </div>

      
      <div className='user-image'>
        <img src={user} alt="user"/>
      </div>
    </div>
  );
};

export default Header;
