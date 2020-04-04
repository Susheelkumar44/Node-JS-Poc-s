const fs = require('fs')
const filename = "file.txt"

const errHandler = (err) =>  console.log("Error in reading the file", err)
const dataHandler = (data) => console.log(data.toString())

/* ReadFile reads data from the file to buffer */
fs.readFile(filename, (err, data) => {
    if (err) errHandler
    dataHandler(data)
})

console.log("I will be executed first, even though I sit at last\n")

/* In the above code second function will be executed since first function, reading the file
takes more time, once data is read successfully, node js goes back and returns the first function output*/