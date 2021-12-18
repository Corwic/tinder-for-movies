import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import MovieSelection from './MovieSelection'

// Decided to test with Reat test-utils just out of interest. Would not use the way in real world.

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('renders movie data', async () => {
  const fakeMovie = {
    id: '123',
    imageURL: 'https://fwcdn.pl/fpo/02/04/720204/7735388.3.jpg',
    title: 'Captain Fantastic',
    summary: 'Lorem ipsum….',
    rating: 8.2,
    accepted: 'true',
  }

  await act(async () => {
    render(<MovieSelection movie={fakeMovie} />, container)
  })

  expect(container.querySelector('.movie-data span').textContent).toBe(fakeMovie.title)
})
