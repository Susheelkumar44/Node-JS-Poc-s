//To get nested array
const num = [1,2]
console.log(num)
const copiedNum = [num]
console.log(copiedNum)

//Using spread operator
const num1 = [1, 2]
const numCopied1 = [...num1]
console.log(numCopied1)

//Using rest operator
const toArray = (...args) => {
    return args
}
console.log(toArray(1, "Text", true, 4))