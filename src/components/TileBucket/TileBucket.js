import React from "react";
import MovieTile from "../MovieTile/MovieTile";

const TileBucket = ({allMovies}) => {
  console.log(allMovies.allMovieTiles)
  const movieData = allMovies.allMovieTiles
  console.log(movieData)
  // const mappedFilms = movieData.map((movie)=> {
  //   return (
  //     <MovieTile info={movie}/>
  //   )
  // })

  return (
    <p>Something</p>
  )
}

export default TileBucket