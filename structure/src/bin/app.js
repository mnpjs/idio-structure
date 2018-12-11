import core from '@idio/core'
import facebook from '@idio/facebook'

(async () => {
  const { app, router, url } = await core({
    session: { use: true,
      keys: [process.env.SESSION_KEY || 'dev'],
    },
    logger: { use: process.env != 'production' },
    static: { use: true, root: 'static' },

  }, { port: process.env.PORT || 5000 })
  router.get('/', async (ctx, next) => {
    ctx.body = 'hello world'
    await next()
  })
  facebook(router, {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.SECRET,
  })
  app.use(router.routes())
  console.log('Started on %s', url)
})()