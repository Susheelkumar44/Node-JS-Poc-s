const fs = require('fs')
const fileName = "file.txt"

/*Watch function watches the file for changes,
Watch function takes two arguments filename and call back function to indicate what to be done
when file gets changed
*/
fs.watch(fileName, () => console.log("File changed!"))

/*Here In above code, thread will wait for the file to change, then it executes the function
again it waits for file to change to execute the call back function again*/