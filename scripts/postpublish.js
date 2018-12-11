const { join } = require('path')
const { unlink } = require('fs')

const file = join(__dirname, '../structure/_yarn.lock')
unlink(file, () => {
  console.log('removed file _yarn.lock')
})
const file2 = join(__dirname, '../structure/_.env')
unlink(file2, () => {
  console.log('removed file _.env')
})
