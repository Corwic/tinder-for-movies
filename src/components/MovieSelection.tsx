import { useSwipe } from "../common";
import { Movie } from "../types";

interface SelecionProps {
    movie: Movie;
    accept: () => void;
    reject: () => void;
}

const MovieSelection = ({movie, accept, reject}: SelecionProps) => {
    const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe({action: reject, data: movie.id})

    return (
        <div 
            className = "movieFrame"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
            <div className = "movieData">
                <span>{ movie.title }</span>{ ` (${ movie.rating }/10)` }
            </div>
            <img className = "movieImg"
                src = { movie.imageURL } alt = {`${ movie.title } poster`} />
            <div className = "buttons">
                <button 
                    className = "accept"
                    onClick = {accept}
                    ><span> ✓ </span> Accept 
                </button>
                <button 
                    className = "reject"
                    onClick = {reject}
                    > Reject <span>×</span>
                </button>
            </div>
        </div>
    )
}
export default MovieSelection