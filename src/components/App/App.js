import React, { useState, useEffect } from 'react';
// import getMovies from '../../APIcalls';
import TileBucket from '../TileBucket/TileBucket';
import MovieDeets from '../MovieDeets/MovieDeets';
import NavBar from '../NavBar/NavBar';
import './App.css';


const App = () => {
  const [allMovieTiles, setAllMovieTiles] = useState([])
  const [selectedMovie, setSelectedMovie] = useState('')
  const [error, setError] = useState("")

  useEffect(() => {
    getData();
  }, [])
  
  const getData = async (path = '') => {
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`
    if (path ==='') {
    try {
      const response = await fetch(url)
        if(!response.ok) {
          throw new Error('All Movie call - Task Failed successfully!')
        }
      const data = await response.json()
      setAllMovieTiles({ allMovieTiles: data.movies})
    } catch(errorOb) {
      setError(errorOb.message)
    }
  } else {
    try {
      const response = await fetch(url)
        if(!response.ok) {
          throw new Error('Single Movie call - Task Failed successfully!')
        }
      const data = await response.json()
      setSelectedMovie( { selectedMovie: data.movie})
    } catch(errorOb) {
      setError(errorOb.message)
    }
  }
  }

  return (
    <div className="App">
      <NavBar />
      {/* <MovieDeets singleFilm={selectedMovie}/> */}
      {error.length > 0 && error}
      <TileBucket allMovies={allMovieTiles} getData={getData}/>
    </div>
  );
}

export default App;
