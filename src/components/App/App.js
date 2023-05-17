import React, { useState, useEffect } from 'react';
import TileBucket from '../TileBucket/TileBucket';
import MovieDeets from '../MovieDeets/MovieDeets';
import NavBar from '../NavBar/NavBar';
import Error from '../Error/Error';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { getAllMovieData, getSingleMovieData } from '../../apiCalls';

const App = () => {
  const [allMovieTiles, setAllMovieTiles] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    getAllMovieData(setAllMovieTiles, setError);
  }, [])

  if(error) {
    return <Error message={error}/> 
  } 
  // early return ^^

  return (
    <div className="App">
      <NavBar />
      <Switch>

        <Route exact path="/">
            <TileBucket allMovies={allMovieTiles} />
        </Route>

        <Route path="/movies/:id" render={({match})=> {
          if (selectedMovie?.id === +match.params.id) {
            return <MovieDeets selectedMovie={selectedMovie} />
            // if exists AND id  =
          } else {
            getSingleMovieData(setSelectedMovie, setError, match.params.id)
          }
        }}>
        </Route>
      </Switch> 

    </div>
  );
}

export default App;