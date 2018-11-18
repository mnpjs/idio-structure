const { resolve } = require('path')
const { unlink } = require('fs')

const file = resolve(__dirname, '../structure/_yarn.lock')
unlink(file, () => {
  console.log('removed file _yarn.lock')
})
