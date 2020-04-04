const fetchDataDetails = () => { 
    //Below code is rarely written by us, these code can be eliminated with the help of third party packages that returns us
    //the promise
    const promise = new Promise((resolve, reject) => {
        /*Below Simple function has been written, that delay execution by giving some time
        This is the simulation of database call or any type of file operation*/
        setTimeout(() => { 
            resolve("Done")
        }, 1500)
    })
    return promise 
}
setTimeout(async () => {
try{
        /*await function makes the node wait until this function to be executed, 
        then only it will move to next function */
        const text = await fetchDataDetails() 
        console.log(text) 
        console.log("Time set done")
    } catch(err) {
        console.log("Error", err)
    }
}, 2000)


console.log("Something after call back execution")