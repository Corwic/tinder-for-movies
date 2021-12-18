import React from 'react'
import { render, screen } from '@testing-library/react'
import useMovies from '.'

describe('useMovies', () => {
  test('returns the array of movies', async () => {
    const Test = function () {
      const { movies } = useMovies()
      return movies[0] ? <div>{movies[0].title}</div> : ''
    }

    render(<Test />)

    expect(await screen.findByText('Star Wars: Episode VII - The Force Awakens')).toBeInTheDocument()
  })
})
