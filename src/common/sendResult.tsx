import { Movie } from '../types'

export const sendResult = async (movie: Movie, result: "accept" | "reject") => {
    const url = process.env.REACT_APP_SERVER_URL
    const body = { ...movie, accepted: result === 'accept' ? 'true' : 'false' }
    const putOptions = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    try {
        await fetch(`${url}/recommendations/${movie.id}/${result}`, putOptions)
    } catch (err) {
        console.log('Problem with sending results', err);
    }

}