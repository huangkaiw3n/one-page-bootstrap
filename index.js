const restify = require('restify')

const server = restify.createServer({
  name: 'esermon'
})

server.get(/.*/, restify.serveStatic({
  directory: 'public',
  default: 'index.html'
}))

server.listen(10000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
