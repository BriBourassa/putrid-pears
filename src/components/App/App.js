import React, { useState, useEffect } from 'react';
// import getMovies from '../../APIcalls';
import TileBucket from '../TileBucket/TileBucket';
import NavBar from '../NavBar/NavBar';
import './App.css';


const App = () => {
  const [allMovieTiles, setAllMovieTiles] = useState([])
  const [selectedMovie, setSelectedMovie] = useState('')
  const [error, setError] = useState("")
  // const [loading, setLoading] = useState('')

  useEffect(() => {
    getMovies()
  }, [])
  
  const getMovies = async (path ="") => {
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setAllMovieTiles(({ allMovieTiles: data.movies}))
    } catch(errorOb) {
      setError(errorOb.message)
    }
  }

  return (
    <div className="App">
      <NavBar />
      {allMovieTiles.length > 0 ? <h2>GTFO</h2> : <TileBucket allMovies={allMovieTiles}/>}
    </div>
  );
}

export default App;
