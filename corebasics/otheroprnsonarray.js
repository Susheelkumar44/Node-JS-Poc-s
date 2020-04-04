//To get nested array
const num = [1,2]
console.log(num)
const copiedNum = [num]
console.log(copiedNum)

//Using spread operator
const num1 = [1, 2]
const numCopied1 = [...num1]
console.log("using spread operator",numCopied1)

//pulling an object using spread operator
var person = {
    name : "Susheel",
    age : 24
}
var copyPerson = {...person}
console.log("Pulling an object", copyPerson)

//Using rest operator
const toArray = (...args) => {
    return args
}

const val = toArray(1, "Text", true, 4)
console.log("rest operator ", val)