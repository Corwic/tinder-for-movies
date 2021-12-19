import React from 'react'
import './App.css'
import { MoviesContext, useMovies } from './common'
import MovieWrapper from './components/MovieWrapper'

(async function runWorkerIf() {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const { worker } = require('./mocks/browser')
    await worker.start({
      serviceWorker: {
        url: '/tinder-for-movies/mockServiceWorker.js',
      },
    })
  }
}())

const App = function () {
  const data = useMovies()

  return (
    <MoviesContext.Provider value={data}>
      <div className="app">
        <h1 className="app-title">Tinder for Movies</h1>
        <MovieWrapper />
      </div>
    </MoviesContext.Provider>
  )
}

export default App
