import React from 'react';

const MovieDeets = ( {selectedMovie} ) => {
  const { title, id, backdrop_path, overview } = selectedMovie
  console.log(selectedMovie)
  return (
    <div className='movie-detail-view'>
      <h2 className='selected-title'>{title}</h2>
      <p>{overview}</p>
    </div>
  )
}

export default MovieDeets;