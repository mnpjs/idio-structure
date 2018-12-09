# @mnpjs/idio

The [Idio Web Server](https://github.com/idiocc/core) [MNP](https://mnpjs.org) Structure For Easy Node.js Backend Website Building.

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

## Using With MNP

This structure is cloned with appropriate parameters (i.e., copyright links and license placeholders) using the `mnp` package bootstrapper.

```sh
mnp new-website -s idio
```

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artd.eco