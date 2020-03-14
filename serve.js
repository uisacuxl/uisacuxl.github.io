'use strict'
//XXX github pages doesn't have node js
//XXX newline at end of file annoying
const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = Math.floor(Math.random() * 65536)

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.statusCode = 301
    res.setHeader('Location', 'index.html')
    res.end()
    return
  }
  if (req.url == '/favicon.ico' || req.url == '/robots.txt') {
    res.statusCode = 404
    res.end()
    return
  }
  fs.readFile('.' + req.url, (err, data) => {
    if (err) {
      console.log(err)
      res.statusCode = 404
      res.end()
      return
    }
    res.statusCode = 200
    var rs = req.url.split('.')
    var mimetype
    switch (rs[rs.length - 1]) {
      case 'html':
        mimetype = 'text/html';
        break
      case 'css':
        mimetype = 'text/css';
        break
      case 'js':
        mimetype = 'text/javascript';
        break
    }
    res.setHeader('Content-Type', mimetype + '; charset=utf-8')
    res.end(data)
  })
})
server.listen(port, hostname)
console.log(`Server with pid ${require('process').pid} is listening at http://${hostname}:${port}/`)

function close() { // \r get rid of ^C character.
  console.log('\rPlease wait stopping server...')
  server.close(() => {
    console.log('Server stopped.')
  })
}

process.on('SIGINT', close)
process.on('SIGTERM', close)
