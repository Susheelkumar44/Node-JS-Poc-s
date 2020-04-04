const fetchData = (callback) => { //1. Here once inner time out is done we expect a call back function that has to be executed
    setTimeout(() => {
        callback("I m done! Calling from fetch") //2.so once timer is done, we call that function
                                                 //5. Execution of function that has been passed as an argument
    }, 1500)
}
setTimeout(() => {
    fetchData(text => { //3.we are calling fetchData function that accepts callback function as argument which returns us some text
        console.log(text) //4.so here we are passing the function as an argument
    })
    fetchData(text2 => {
        console.log(text2)
    })
    console.log("Time set done")
}, 2000)


console.log("Something after call back execution")