import { useState, useContext } from 'react'
import MovieSelection from './MovieSelection'
import { MoviesContext, sendResult } from '../common'

const MovieWrapper = () => {
    const { movies, isLoading, error } = useContext( MoviesContext )
    const [ num, setNum ] = useState( 0 )
    const increase = (): void => setNum( num + 1 ) 

    const accept = (): void => {
        sendResult(movies[num].id, 'accept')
        increase()
    }
    const reject = (): void => {
        sendResult(movies[num].id, 'reject')
        increase()
    }
    
    if (isLoading) {
        return (
            <div className="movie-frame no-movies">
                <span>Loading...</span>
            </div>
        )
    }

    if (!isLoading && movies.length === 0 && error) {
        return (
            <div className="movie-frame no-movies">
                <span>{error.toString()}</span>
            </div>
        )
    }

    if (!isLoading && movies.length === 0 && !error) {
        return (
            <div className="movie-frame no-movies">
                <span>Nothing to show</span>
            </div>
        )
    }

    if (movies.length <= num) {
        return (
            <div className="movie-frame no-movies"> 
                <span>No more movies in your list</span>
            </div> 
        )
    }

    return (
        <MovieSelection
            movie={ movies[num] }
            accept={ accept }
            reject={ reject }
        />
    )
}

export default MovieWrapper