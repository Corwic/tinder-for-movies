import './App.css';
import { MoviesContext } from './common';
import MovieWrapper from './components/MovieWrapper'
import { useMovies } from './common'


function App() {
  const { data } = useMovies()

  return (
    // @ts-ignore
    <MoviesContext.Provider value={ data }>
      <div className="app">
        <h1 className="appTitle">Tinder for Movies</h1>
        <MovieWrapper />
      </div>
    </MoviesContext.Provider>
  )
}

export default App;