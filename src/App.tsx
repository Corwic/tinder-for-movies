import './App.css'
import { MoviesContext } from './common'
import MovieWrapper from './components/MovieWrapper'
import { useMovies } from './common'

(async function () {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    await worker.start({
      serviceWorker: {
        url: '/tinder-for-movies/mockServiceWorker.js',
      },
    })
  }
})()

function App() {
  const { data } = useMovies()

  return (
    // @ts-ignore
    <MoviesContext.Provider value={ data }>
      <div className="app">
        <h1 className="app-title">Tinder for Movies</h1>
        <MovieWrapper />
      </div>
    </MoviesContext.Provider>
  )
}

export default App