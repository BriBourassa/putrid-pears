import React, { useEffect } from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'

const MovieDeets = ( {selectedMovie, getData, match} ) => {
  console.log('ln 6 deets', selectedMovie)
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

  const { id, poster_path, title, overview, backdrop_path, tagline} = selectedMovie.selectedMovie
  return (
    <Link to={`/movies/${id}`} className='router-link'>
      <h2 className='selected-title'>{title}</h2>
    <div className='movie-detail-view'>
      <h3 className='selected-tagline'>{tagline}</h3>
      <img src={poster_path} alt={title} className='poster'/>
      <p className='movie-overview'>{overview}</p>
    </div>
    </Link>
  )
}

export default MovieDeets;