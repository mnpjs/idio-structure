const { join } = require('path')
const { renameSync } = require('fs')

const rename = (file) => {
  const oldPath = join(__dirname, '../structure', `_${file}`)
  const newPath = join(__dirname, '../structure', file)

  try {
    renameSync(oldPath, newPath)
  } catch ({ message }) {
    console.error(message)
  }
}

rename('yarn.lock')
rename('.env')