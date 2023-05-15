import React, { useState, useEffect } from 'react';
// import getMovies from '../../APIcalls';
import TileBucket from '../TileBucket/TileBucket';
import MovieDeets from '../MovieDeets/MovieDeets';
import NavBar from '../NavBar/NavBar';
import Error from '../Error/Error';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <TileBucket allMovies={allMovieTiles} getData={getData} />
        </Route>

        <Route path="/movies/">
          <MovieDeets selectedMovie={selectedMovie} />
        </Route>
        
        {/* <Route>
          <Error message={error}/>
        </Route> */}


        {/* <MovieDeets singleFilm={selectedMovie}/> */}

      </Switch> 

    </div>
  );
}

export default App;
