//getting only required argument through array indexing (ex:- node readingcommandlineargs.js firstArg secondArg)
let arg = process.argv[2]
console.log("arg I want", arg)
for (let j = 0; j < process.argv.length; j++) {
    //printing all command line arguments that are stored in process.argv
    console.log(j + ' -> ' + (process.argv[j]));
}
