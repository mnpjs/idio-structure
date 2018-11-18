const { resolve } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const from = resolve(__dirname, '../structure/yarn.lock')
const to = resolve(__dirname, '../structure/_yarn.lock')

const rs = createReadStream(from)
const ws = createWriteStream(to)

rs.pipe(ws)

rs.on('close', () => {
  console.log('cloned file _yarn.lock')
})
