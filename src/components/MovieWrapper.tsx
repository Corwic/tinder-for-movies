import { useState, useContext } from "react";
import MovieSelection from "./MovieSelection";
import { MoviesContext, sendResult } from "../common"

const MovieWrapper = () => {
    const movies = useContext( MoviesContext )
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
    
    return movies.length === 0                  
            // no movies in array
            ?   <div className="movieFrame noMovies">
                    <span>Nothing to show</span>
                </div>
            : movies?.length > num              
            // there are movies in array
            ? <MovieSelection movie={ movies[num] } accept={ accept } reject={ reject }/>
            // the list of movies is exhausted
            :   <div className="movieFrame noMovies"> 
                    <span>No more movies in your list</span>
                </div>                          
}

export default MovieWrapper