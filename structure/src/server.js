import idio from '@idio/core'
import initRoutes, { watchRoutes } from '@idio/router'

const PROD = process.env.NODE_ENV == 'production'

export default async ({
  port, watch = !PROD,
}) => {
  const { router, middleware, app, url } = await idio({
  }, { port })
  const w = await initRoutes(router, 'routes', {
    middleware,
  })
  if (watch) watchRoutes(w)
  app.use(router.routes())
  return { app, url }
}