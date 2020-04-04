const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello NodeJS Using Node Mon")
})
server.listen(8080)