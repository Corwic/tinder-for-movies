import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import App from './App';

describe('Integration tests of REST API', () => {

  test('loads and display movie', async () => {
      render(<App/>)
      await waitFor(() => screen.getByText('Accept'))
      
      expect(screen.getByText('Star Wars: Episode VII - The Force Awakens'))
  })

  test('after a click', async () => {
      render(<App/>)
      await waitFor(() => screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))

      expect(screen.getByText('Clifford'))
  })

  test('after the last movie', async () => {
      render(<App/>)
      await waitFor(() => screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))
      fireEvent.click(screen.getByText('Accept'))

      expect(screen.getByText('No more movies in your list'))
  })
})
