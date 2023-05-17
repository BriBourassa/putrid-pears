import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
// import pearshadow from "../../assets/pearshadow.png";

const NavBar = ( {allMovieTiles, setDisplayedMovies} ) => {

  return (
    <div className="navbar">
      {/* <img className="pear-logo" src={pearshadow}/> */}
      <div className="title-container">
        <div className="title">
          <h1>(PUTRID_PEARS)</h1>
        </div>
      </div>
      <div className="btn-container">
        <NavLink to="/">
          <button className="home-btn" onClick={() => setDisplayedMovies(allMovieTiles)}>HOME</button>
        </NavLink>

        {/* <button className="back-btn">BACK</button> */}

      
      </div>
    </div>
  );
};

export default NavBar;
