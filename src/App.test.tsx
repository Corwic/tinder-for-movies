import { render, fireEvent, screen } from '@testing-library/react'
import { rest } from 'msw';
import { server } from './mocks/server';
import App from './App';

describe('Integration tests around GET request ', () => {

    test('shows the message if there\'s no movies fetched', async () => {
        server.use(rest.get(`/recommendations`, (req, res, ctx) => res(ctx.status(500))))
        render(<App/>)
        await screen.findByText('Nothing to show')
        
        expect(screen.getByText('Nothing to show')).toBeInTheDocument()
    })

    test('loads and display first movie from the list', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        
        expect(screen.getByText('Star Wars: Episode VII - The Force Awakens')).toBeInTheDocument()
    })

})

describe('Integration tests of GET request ', () => {

    test('shows a next movie after a click', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        fireEvent.click(screen.getByText('Accept'))

        expect(screen.getByText('Clifford')).toBeInTheDocument()
    })

    test('shows the message after the last movie', async () => {
        render(<App/>)
        await screen.findByText('Accept')
        fireEvent.click(screen.getByText('Accept'))
        fireEvent.click(screen.getByText('Accept'))
        fireEvent.click(screen.getByText('Accept'))
        fireEvent.click(screen.getByText('Accept'))
        fireEvent.click(screen.getByText('Accept'))
        fireEvent.click(screen.getByText('Accept'))

        expect(screen.getByText('No more movies in your list')).toBeInTheDocument()
    })
})
