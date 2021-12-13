import { rest } from "msw"
import { setupServer } from "msw/node"
import movies from "./db.json"

// Testing the REST API using msw. There was a chance to use it instead of json-server too, but I decided not to rewrite the code. In real life I would rewritee it so as not multiply dependencies in the project.

const selectedMovie = (req) => movies.recommendations.find( movie => movie.id === req.params.id )

export const server = setupServer(
    rest.get(`/recommendations`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json( movies.recommendations ))
    }),
    rest.put(`/recommendations/:id/accept`, (req, res, ctx) => res(ctx.status(200), ctx.json( {
        ...selectedMovie(req),
        accepted: true
    } ))),
    rest.put(`/recommendations/:id/reject`, (req, res, ctx) => res(ctx.status(200), ctx.json( {
        ...selectedMovie(req),
        accepted: false
    } ))),
)
