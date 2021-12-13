import { createContext } from 'react'
import { Movie } from '../types'

export const MoviesContext = createContext< Movie[] >( [] )