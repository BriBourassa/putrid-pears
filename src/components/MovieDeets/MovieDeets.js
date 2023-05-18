import React from 'react';
import './MovieDeets.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieDeets = ({ selectedMovie }) => {

  const { id, poster_path, title, overview, backdrop_path, tagline, average_rating, runtime, release_date} = selectedMovie

  const backdrop = {
    'backgroundImage': `linear-gradient(rgb(0 0 0 / 17%) 0%, #000 100%), url(${backdrop_path})`
  }

  return (
    <Link to={`/movies/${id}`} className='router-link' style={backdrop}>
      <h2 className='selected-title'>{title}</h2>
      <h3 className='selected-tagline'>{tagline}</h3>
      <div className='movie-detail-main'>
        <img src={poster_path} alt={title} className='poster'/>
        <span className='detail'>Rating: {average_rating} / 10</span>
        <span className='detail'>Runtime: {runtime} minutes</span>
        <span className='detail'>Release Date: {release_date}</span>
        <span className='movie-overview'>{overview}</span>
      </div>
    </Link>
  )
} 

export default MovieDeets;

MovieDeets.propTypes = {
  selectedMovie : PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired
  }) 
}