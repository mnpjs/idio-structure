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

## Structure

The project will have the minimal structure to start the webserver.

```m
structure
├── CHANGELOG.md
├── Dockerfile
├── README.md
├── build
│   └── bin
│       └── app.js
├── package.json
├── src
│   └── bin
│       ├── app.js
│       └── index.js
└── yarn.lock
```

## Using With MNP

This structure is cloned with appropriate parameters (i.e., copyright links and license placeholders) using the `mnp` package bootstrapper.

```sh
mnp new-website -s idio
```

## Dockerfile

The webserver is meant to be deployed on a docker conatiner (e.g., on a Dokku host is optimal). The following `Dockerfile` based off `node:alpine` is used.

```
FROM node:10-alpine

COPY package*.json .
COPY yarn.lock .
RUN yarn

COPY build build

ENV NODE_ENV production

ENTRYPOINT ["node", "build/bin/app.js"]
```

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artd.eco