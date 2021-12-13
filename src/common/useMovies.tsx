import { useState, useEffect } from 'react';
import { Movie } from '../types';

export const useMovies = () => {
    //const [isLoading, setIsLoading] = useState()
    const [data, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        (async function() {
            const url = process.env.REACT_APP_SERVER_URL
            //setIsLoading(true)
            try {
                const response = await fetch(`${url}/recommendations/`)
                const status = await response.status
                if (status !== 200) {
                    console.log(status);
                    return
                }
                const data = await response.json()
                setMovies(data)
                //setIsLoading(false)
            } catch (err) {
                console.log('GET request failed', err);
            }
        })();
    }, [])

    return { data }
}