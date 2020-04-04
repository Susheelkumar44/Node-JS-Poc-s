let person = {
    name : "Max",
    Age : 24,
    greet() {
        console.log("Hi, My Name is",+this.name)
    }
}
console.log("person", person)

//object destructuring
const printName = ({ name }) => {
    console.log(name)
}

printName(person)

//Destructuring person object to get only required fields from person
const {name, Age} = person //Note: name and age should match with person objects fields
console.log(name, Age)

//Array object destructuring
const num = [1, 2, 3, 4]
const [num1, num2] = num //Unlike objects are pulled out by names, In arrays elements are pulled by position
console.log(num1, num2)