import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import './TileBucket.css'

const TileBucket = ({allMovies}) => {
  const movieData = allMovies.allMovieTiles
  let mappedFilms = [];
  movieData ? mappedFilms = movieData.map((movie)=>{
      return (
        <MovieTile movieDetails={movie} key={movie.id}/>
      )}) 
      : console.log('no movieData')
      
  console.log('ln 14', mappedFilms)

  return (
    <section className="tile-bucket">
      {mappedFilms}
    </section>
  )

}

export default TileBucket