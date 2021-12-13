import { render, screen } from '@testing-library/react'
import { useMovies } from "."

test('returns the array of movies', async () => {

    const Test = () => {       
        const { data } = useMovies()
        return data[0] ? <div>{data[0].title}</div> : ''
    }

    render(<Test />)
    await screen.findByText('Star Wars: Episode VII - The Force Awakens')

    expect(screen.getByText('Star Wars: Episode VII - The Force Awakens')).toBeInTheDocument()
        
})