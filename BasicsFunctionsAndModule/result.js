function log(message, result) {
    console.log(message, result)
}

//module.export.logging = log or can be written as below
exports.log = log

/* Above code can be written as
exports.log =(message, result) => console.log(message, result) 
*/