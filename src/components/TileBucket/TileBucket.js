import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import './TileBucket.css'

const TileBucket = ({ allMovies }) => {
  const movieData = allMovies.allMovieTiles
  // let mappedFilms = [];
  const mappedFilms = movieData ? movieData.map((movie)=>{
      return (
        <MovieTile movieDetails={movie} key={movie.id}/>
      )}) 
      : <p>(Loading...)</p>
      // null = nothing rendered
      
  console.log('ln 14', movieData)

  return (
    <section className="tile-bucket">
      {mappedFilms}
    </section>
  )

}

export default TileBucket