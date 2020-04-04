function test() {
    setTimeout(() => {
        console.log("done")
    }, 4000)
    
}
setTimeout(() => {
    test()
    console.log("I will be executed third")
}, 2000)

console.log("I will be executed first")
console.log("I will be executed second")