import { useState, useContext } from 'react'
import MovieSelection from './MovieSelection'
import { MoviesContext, sendResult } from '../common'

const MovieWrapper = () => {
    const { movies, isLoading } = useContext( MoviesContext )
    const [ num, setNum ] = useState( 0 )
    const increase = (): void => setNum( num + 1 ) 

    const accept = (): void => {
        // console.log(movies[num].title, 'is accepted');
        sendResult(movies[num], 'accept')
        increase()
    }
    const reject = (): void => {
        // console.log(movies[num].title, 'is rejected');
        sendResult(movies[num], 'reject')
        increase()
    }
    
    if (isLoading) {
        return (
            <div className="movie-frame no-movies">
                <span>Loading...</span>
            </div>
        )
    }

    if (movies.length === 0) {
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
    );
}

export default MovieWrapper