import React from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'

const MovieDeets = ({ selectedMovie }) => {
  const { id, poster_path, title, overview, backdrop_path, tagline} = selectedMovie

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