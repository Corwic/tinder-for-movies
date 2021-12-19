import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import server from '../mocks/server'
import { useMovies } from '.'

describe('useMovies', () => {
  test('returns the array of movies', async () => {
    const data = [
      {
        id: '2301abc',
        imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
        title: 'Star Wars: Episode VII - The Force Awakens',
        summary: 'Lorem ipsum….',
        rating: 8.2,
        accepted: 'false',
      },
      {
        id: 'ab1232c',
        imageURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQr52xgKbOq-XJuwQEknttmudqatCNYwXUIg3O4k02E6eNZmPXd',
        title: 'Clifford',
        summary: 'Lorem ipsum….',
        rating: 6.9,
        accepted: 'true',
      },
    ]

    server.use(rest.get('/recommendations', (req, res, ctx) => res(ctx.json(data))))
    const Test = function () {
      const { movies } = useMovies()
      return movies[0] ? <div>{movies[0].title}</div> : ''
    }

    render(<Test />)

    expect(await screen.findByText('Star Wars: Episode VII - The Force Awakens')).toBeInTheDocument()
  })
})
