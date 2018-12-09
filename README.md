# @mnpjs/idio

The Idio Web Server [MNP](https://mnpjs.org) Structure For Easy Node.js Backend Website Building.

```js
import core from '@idio/core'

(async () => {
  const { app, router, url } = await core({

  }, { port: process.env.PORT || 5000 })
  router.get('/', async (ctx, next) => {
    ctx.body = 'hello world'
    await next()
  })
  app.use(router.routes())
  console.log('Started on %s', url)
})()
```


## Copyright

(c) [Art Deco][1] 2018

[1]: https://artd.eco