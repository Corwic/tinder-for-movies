
export const sendResult = async (movieID: string, result: "accept" | "reject") => {
    const url = process.env.REACT_APP_SERVER_URL
    const body = { accepted: result === 'accept' ? 'true' : 'false' }
    const putOptions = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    const res = await fetch(`${url}/recommendations/${movieID}/${result}`, putOptions)
    const updatedMovie = await res.json()
    console.log(`${movieID} is updated`, updatedMovie)        

}