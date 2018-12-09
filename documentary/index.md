# @mnpjs/idio

The [Idio Web Server](https://github.com/idiocc/core) [MNP](https://mnpjs.org) Structure For Easy Node.js Backend Website Building.

%EXAMPLE: structure/src/bin/app.js%

## Structure

The project will have the minimal structure to start the webserver.

%TREE structure -I node_modules%

## Using With MNP

This structure is cloned with appropriate parameters (i.e., copyright links and license placeholders) using the `mnp` package bootstrapper.

```sh
mnp new-website -s idio
```

## Dockerfile

The webserver is meant to be deployed on a docker conatiner (e.g., on a Dokku host is optimal). The following `Dockerfile` based off `node:alpine` is used.

%EXAMPLE: structure/Dockerfile%