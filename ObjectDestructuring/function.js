/*Object destructuring -> Instead of getting required module, 
using this we can get only required function from module*/

var {log} = require("./result")
//Normal way of writting functions
function sum(a, b) {
    return a+b
}

//Arrow functions
const subtract = (b, a) => b-a

//const tot = sum(10,20) -> You can assign functions to variables.
log("Sum of two numbers is",sum(10,20)) //passing functions as arguments
log("Subtraction of two numbers is",subtract(30,10))