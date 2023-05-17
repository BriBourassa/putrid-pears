import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ( {allMovieTiles, setDisplayedMovies} ) => {
  return (
    <div className="navbar">
      <div className="title-container">
        <div className="title">
          <h1>(PUTRID_PEARS)</h1>
        </div>
      </div>
      <div className="btn-container">
        <NavLink to="/">
          <button className="home-btn" onClick={() => setDisplayedMovies(allMovieTiles)}>HOME</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
