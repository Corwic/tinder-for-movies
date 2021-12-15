import { createContext } from 'react'
import { Movie } from '../types'

interface Context {
  movies: Movie[],
  isLoading: boolean
}

export const MoviesContext = createContext< Context >( {
  movies: [],
  isLoading: false
} )