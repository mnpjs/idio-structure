const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const clone = (file) => {
  const from = join(__dirname, '../structure', file)
  const to = join(__dirname, '../structure', `_${file}`)

  const rs = createReadStream(from)
  const ws = createWriteStream(to)

  rs.pipe(ws)

  rs.on('close', () => {
    console.log('cloned file _%s', file)
  })
}

clone('yarn.lock')
clone('.env')
