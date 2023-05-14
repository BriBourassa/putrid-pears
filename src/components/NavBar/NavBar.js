import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
// import pearshadow from "../../assets/pearshadow.png";

const NavBar = () => {
  // need NavLink for home button

  const goHome = (e) => {};

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
          <button className="home-btn">HOME</button>
        </NavLink>

        {/* <button className="back-btn">BACK</button> */}

        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
