import Fastify from 'fastify'
import Next from 'next'
import routes from './routes'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = Next({ dev })

app.prepare()
  .then(() => {
    const fastify = Fastify({
      logger: dev
    })

    fastify.use(routes.getRequestHandler(app))

    fastify.listen(port, (err, address) => {
      if (err) throw err
      console.log(`> Ready on ${address}`)
    })
  })
