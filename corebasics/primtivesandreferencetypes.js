/* Primtive types uses stack memory */
var name = "max"
console.log(name)

var secondName = name //Only value is assigned
console.log(secondName)

name = "Chris"
console.log(name)
console.log(secondName)

/* Refrences uses heap memory */
var person = {
    age : 24,
    name : "max",
    hobbies : ["sports", "music"]
}
var thirdPerson = Object.assign({}, person)
var secondPerson = person
console.log("person ",person)
person.name = "chris"
console.log("second person", secondPerson)
console.log("thirdPesron", thirdPerson)

//copying arrays
var arr = [10, 20]
console.log("arr", arr)

var thirdArr = arr.slice() //Crates new array with base array
console.log("thirdArr", thirdArr)

var secArr = arr
arr.push(30)
arr.push(60)

console.log("arr", arr)
console.log("secArr", secArr)
