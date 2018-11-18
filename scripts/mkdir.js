const { mkdirSync } = require('fs')

try {
  mkdirSync('structure')
} catch ({ message }) {
  console.error(message)
}
