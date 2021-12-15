import App from './App'
import { render, fireEvent, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from './mocks/server'

describe('App. Integration tests around GET request', () => {

    test('shows the message if there\'s no movies fetched', async () => {
        server.use(rest.get(`/recommendations`, (req, res, ctx) => res(ctx.status(500))))
        render(<App/>)
        
        expect(await screen.findByText(/Error/)).toBeInTheDocument()
    })

    test('loads and display first movie from the list', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        
        expect(screen.getByText('Star Wars: Episode VII - The Force Awakens')).toBeInTheDocument()
    })

})

describe('App. Integration tests of GET request', () => {

    test('shows a next movie after a click', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        fireEvent.click(screen.getByText('Accept'))

        expect(screen.getByText('Clifford')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Reject'))

        expect(screen.getByText('Dune')).toBeInTheDocument()
    })

    test('shows the message after the last movie', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        for (let i=0; i<6; i++) {
            fireEvent.click(screen.getByText('Accept'))
        }

        expect(screen.getByText('No more movies in your list')).toBeInTheDocument()
    })
})
