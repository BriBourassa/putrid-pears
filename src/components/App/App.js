import React, { useState, useEffect } from 'react';
import TileBucket from '../TileBucket/TileBucket';
import MovieDeets from '../MovieDeets/MovieDeets';
import NavBar from '../NavBar/NavBar';
import Error from '../Error/Error';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { getAllMovieData, getSingleMovieData } from '../../apiCalls';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  const [allMovieTiles, setAllMovieTiles] = useState([])
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    getAllMovieData(setAllMovieTiles, setDisplayedMovies, setError);
  }, [])

  if(error) {
    return <Error message={error}/> 
  } 

  return (
    <div className="App">
      <div className='nav-and-search'>
        <NavBar allMovieTiles={allMovieTiles} setDisplayedMovies={setDisplayedMovies} />

        <SearchBar allMovieTiles={allMovieTiles} setDisplayedMovies={setDisplayedMovies}/>
      </div>
      <Switch>
        <Route exact path="/">
            <TileBucket displayedMovies={displayedMovies} setError={setError}/>
        </Route>

        <Route path="/movies/:id" render={({match})=> {
          if (selectedMovie?.id === +match.params.id) {
            return <MovieDeets selectedMovie={selectedMovie} />
          } else {
            getSingleMovieData(setSelectedMovie, setError, match.params.id)
          }
        }}>
        </Route>
      </Switch> 
    </div>
  );
};

export default App;