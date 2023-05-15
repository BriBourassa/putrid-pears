import React from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'

const MovieDeets = ( {selectedMovie} ) => {
  const { title, id, backdrop_path, overview } = selectedMovie.selectedMovie
  return (
    <Link to={'/movies/'+`${id}`}>
    <div className='movie-detail-view'>
      <h2 className='selected-title'>{title}</h2>
      <p>{overview}</p>
    </div>
    </Link>
  )
}

export default MovieDeets;