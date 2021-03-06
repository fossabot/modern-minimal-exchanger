const pkg = require('../package')

const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = pkg.config.host || '127.0.0.1'
const port = pkg.config.port || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
