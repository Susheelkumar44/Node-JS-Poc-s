const fs = require('fs')
const filename = "file.txt"


/* ReadFileSync reads data from the file to buffer but here this function takes only one argument and 
donot have any call back methods because, call back method used to handle exection once node js moves to 
execution of next event, but here since we are using synchronous execution call back method is not required*/

const data = fs.readFileSync(filename)
console.log(data.toString())


console.log("\nI will be executed second, and in the order")
