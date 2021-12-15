import { createContext } from 'react'
import { Movie } from '../types'

interface Context {
  movies: Movie[],
  isLoading: boolean,
  error: any
}

export const MoviesContext = createContext< Context >( {
  movies: [],
  isLoading: true,
  error: ''
} )