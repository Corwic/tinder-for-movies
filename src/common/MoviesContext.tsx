import { createContext } from 'react'
import { Movie } from '../types/Movie'

interface Context {
  movies: Movie[],
  isLoading: boolean,
  error: any
}

const MoviesContext = createContext< Context >({
  movies: [],
  isLoading: true,
  error: '',
})

export default MoviesContext
