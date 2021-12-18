import React from 'react'
import { useSwipe } from '../common'
import { Movie } from '../types/Movie'

interface SelecionProps {
  movie: Movie;
  accept: () => void;
  reject: () => void;
}

const MovieSelection = function ({ movie, accept, reject }: SelecionProps) {
  const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe({
    rightAction: reject,
    // leftAction: accept,
    data: movie.id,
  })

  return (
    <div
      className="movie-frame"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="movie-data">
        <span>{ movie.title }</span>
        { ` (${movie.rating}/10)` }
      </div>
      <img
        className="movie-img"
        src={movie.imageURL}
        alt={`${movie.title} poster`}
      />
      <div className="buttons">
        <button
          type="button"
          className="accept"
          onClick={accept}
        >
          <span> ✓ </span>
          {' '}
          Accept
        </button>
        <button
          type="button"
          className="reject"
          onClick={reject}
        >
          {' '}
          Reject
          {' '}
          <span>×</span>
        </button>
      </div>
    </div>
  )
}
export default MovieSelection
