const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send("Hello NodeJS From express framework")
})

app.listen(port, () => console.log(`A NodeJS API is running on port: ${port}`))