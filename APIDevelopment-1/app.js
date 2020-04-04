const express = require('express')
const app = express()
const postRoutes = require("./routes/post")
const morgan = require("morgan")
const port = 8080

const customMiddleware = (req, res, next) => {
    console.log("Custom middle ware")
    next() //since nodejs is event looping mechanism, nodejs will be stuck, so hence we have to provide next fun
}

//adding middleware
app.use(morgan("dev"))
app.use(customMiddleware)

//adding routes
app.use('/', postRoutes)
/* So In above line since we are using router to route specific file, router acts as a middleware */

app.listen(port, () => console.log(`A NodeJS API is running on port: ${port}`))