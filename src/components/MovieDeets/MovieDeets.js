import React, { useEffect } from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'

const MovieDeets = ( {selectedMovie, getData, match} ) => {
  // console.log('ln 6 deets', selectedMovie)
  console.log('match', match.params.movieID)
  // if (selectedMovie) {
  //   console.log(selectedMovie)
  // } else {
  //   console.log('no selection yet')
  // }
  useEffect(() => {
    console.log('deets useEffect')
    if (match.params.movieID !== selectedMovie.id) {
      getData(match.params.movieID);
    }
  }, [])

  const { id, backdrop_path, title, overview} = selectedMovie.selectedMovie

  return (
    <Link to={`/movies/${id}`}>
    <div className='movie-detail-view'>
      <img src={backdrop_path} alt={title}/>
      <h2 className='selected-title'>{title}</h2>
      <p>{overview}</p>
    </div>
    </Link>
  )
}

export default MovieDeets;