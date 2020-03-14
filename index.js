'use strict'
const http = require('http')
const hostname = '127.0.0.1'
const port = Math.floor(Math.random()*65536)

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.end()
})
server.listen(port, hostname)
console.log(`Server with pid ${require('process').pid} is listening at http://${hostname}:${port}/`)

function close() {// \r get rid of ^C character.
	console.log('\rPlease wait stopping server...')
	server.close(() => {
		console.log('Server stopped.')
	})
}

process.on('SIGINT', close)
process.on('SIGTERM',close)
