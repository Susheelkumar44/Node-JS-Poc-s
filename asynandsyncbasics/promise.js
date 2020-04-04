const fetchData = () => { 
    /*Here instead of writing call back function and passing as an argument, we create promise object that takes
    two arguments resolve to send success response and reject throw error*/
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 2000) //here also we set time out instead setting up database that takes time to execute
    })
    return promise //Here promise is a sychronous code, that means once promise object is created, it returns promise object
}
setTimeout(() => {
    fetchData()
    /*Normally we put code snippets or functions that should run in the future, once asynchronous longer taking operation
    is done*/
    .then(text => { //then object collects the promise that is returned by that function that defines the promise with call back object
        console.log(text) 
        /*Suppose now we want to emit same fetchData function again, then instead of writing call back function again
        we can return the promise returned by below fetchData() function and we can use "then" clause again as shown below*/
        return fetchData()
    })
    /*This is called function chaining which makes code mre readable */
    .then(text2 => {
        console.log(text2)
    })
    .catch(err => {
        console.log(err)
        next(err);
    });

    console.log("Time set done")
}, 2000)


console.log("Something after call back execution")