import { useState, useEffect } from 'react'
import { Movie } from '../types'

export const useMovies = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ movies, setMovies ] = useState<Movie[]>([])
    const [ error, setError ] = useState<any>('')

    useEffect(() => {
        (async function() {
            const url = process.env.REACT_APP_SERVER_URL
            try {
                const response = await fetch(`${url}/recommendations/`)
                if (response.status !== 200) {
                    console.log('Error', response.status, response.statusText)
                    throw new Error(response.statusText) 
                }
                const data: Movie[] = await response.json()
                setMovies(data)
            } catch (err: any) {
                setError(err)
            }
            setIsLoading(false)
        })()

    }, [])

    return { movies, isLoading, error }
}