var logger = require('./result')
var fact = require('./factorial')
//Normal way of writting functions
function sum(a, b) {
    return a+b
}

//Arrow functions
const subtract = (b, a) => b-a

//factorial of a number
let factorial_of_num = fact.factorial(8)
logger.log("factorial of a number",factorial_of_num)

//const tot = sum(10,20) -> You can assign functions to variables.
logger.log("Sum of two numbers is",sum(10,20)) //passing functions as arguments
logger.log("Subtraction of two numbers is",subtract(30,10))