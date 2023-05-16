import React, { useEffect } from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'

const MovieDeets = ( {selectedMovie, getData, match} ) => {
  // console.log('ln 6 deets', selectedMovie)
  // console.log('match', match.params)
  // if (selectedMovie) {
  //   console.log(selectedMovie)
  // } else {
  //   console.log('no selection yet')
  // }
  useEffect(() => {
    console.log('selected, match', selectedMovie.selectedMovie.id, match.params.id)
    if (match.params.id !== selectedMovie.id) {
      getData(match.params.id);
    }
  }, [])

  const { id, poster_path, title, overview, backdrop_path, tagline} = selectedMovie.selectedMovie

  const backdrop = {
    'backgroundImage': `linear-gradient(rgb(0 0 0 / 17%) 0%, #000 100%), url(${backdrop_path})`
  }

  return (
    <Link to={`/movies/${id}`} className='router-link' style={backdrop}>
    <h2 className='selected-title'>{title}</h2>
    <h3 className='selected-tagline'>{tagline}</h3>
    <div className='movie-detail-main'>
      <img src={poster_path} alt={title} className='poster'/>
      <p className='movie-overview'>{overview}</p>
    </div>
    </Link>
  )
}

export default MovieDeets;