import { rest } from 'msw'
import movies from './db.json'

const selectedMovie = (req) => movies.recommendations.find(movie => movie.id === req.params.id)

export const handlers = [
  rest.get('/recommendations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movies.recommendations))
  }),
  rest.put('/recommendations/:id/accept', (req, res, ctx) => res(ctx.status(200), ctx.json({
    ...selectedMovie(req),
    accepted: true
  }))),
  rest.put('/recommendations/:id/reject', (req, res, ctx) => res(ctx.status(200), ctx.json({
    ...selectedMovie(req),
    accepted: false
  })))
]
