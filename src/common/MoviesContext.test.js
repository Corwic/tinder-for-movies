import { render, screen } from '@testing-library/react'
import { MoviesContext } from '.'

describe('MoviesContext. Testing provider', () => {
  const MovieConsumer = () => (
    <MoviesContext.Consumer>
      {value => value.movies && value.movies.length === 0 
        ? <div>The value is empty array</div> 
        : <div>The value is {value.movies[0].title}</div>
      }
    </MoviesContext.Consumer>
  )

  test('Context shows default value', () => {
    render(<MovieConsumer />)

    expect(screen.getByText(/^The value is/)).toHaveTextContent(
      'The value is empty array'
    )
  })

  test('Context shows set value', () => {
    render(
      <MoviesContext.Provider value={{
        movies: [{ title: 'op' }],
        isLoading: true,
        error: ''
      }}>
        <MovieConsumer />
      </MoviesContext.Provider>
    )

    expect(screen.getByText(/^The value is/)).toHaveTextContent(
      'The value is op'
    )
  })
})
