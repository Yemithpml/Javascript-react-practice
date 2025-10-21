//Asynchronous Javascript

//Synchronous
console.log("start")
console.log("middle")
console.log("End")

//asynchronous 
console.log("start")
setTimeout(() =>{
    console.log("middle")
}, 2000)
console.log("end")