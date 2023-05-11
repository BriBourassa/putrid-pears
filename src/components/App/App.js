import React, { useState, useEffect } from 'react';
// import getMovies from '../../APIcalls';
import './App.css';


const App = () => {
  const [allMovieTiles, setAllMovieTiles] = useState([])

  useEffect(() => {
    getMovies()
  }, [])
  
  const getMovies = (path = "") => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`)
    .then(response => response.json())
    .then(data => setAllMovieTiles({ allMovieTiles: data.movies}))
  }
  
  
  
  return (
    <div className="App">
      {console.log(allMovieTiles)}
      <h1>(PUTRID_PEARS)</h1>
      

    </div>
  );
}

export default App;
