const restify = require('restify')

const serverPort = process.env.PORT || 10000

const server = restify.createServer({
  name: 'esermon'
})

server.get(/.*/, restify.serveStatic({
  directory: 'public',
  default: 'index.html'
}))

server.listen(serverPort, () => {
  console.log('%s listening at %s', server.name, server.url)
})
