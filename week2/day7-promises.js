//promises
const promise = new Promise((resolve, reject) => {
    const success = true
    if(success){
        resolve("Task completed sucessfully")
    }else{
        reject("Something went wrong")
    }
});

promise
.then(result => console.log(result))
.catch(error => console.log(error))

//promise with delay replacing callback hell

const loadData = new Promise((resolve, reject) => {
    console.log("Loading data...")

    setTimeout(() => {
        const dataAvail = true
        if(dataAvail){
            resolve("Data loaded Successfully!")
        } else{
            reject("Failed to load data")
        }
    }, 2000)
})

loadData
.then(message =>{
    console.log(message)
    return "Processing complete"
})
.then(nextMessage => console.log(nextMessage))
.catch(error => console.log(error))

//
function Task1(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Task 1 done")
            resolve()
        }, 1000)
    })
}
function Task2(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Task 2 done")
            resolve()
        }, 1000)
    })
}
function Task3(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            console.log("Task 3 done")
            resolve()
        }, 1000)
    })
}

Task1()
.then(Task2)
.then(Task3)
.then(() => console.log("All tasks completed"))

//Task
const networkReq = new Promise((resolve, reject) => {
    console.log("Recieved network request")

    setTimeout(() =>{
        const allowed = true
        if(allowed){
            resolve("Loading network request")
        } else{
            reject("Error!, permission not granted")
        }
    }, 2000)
})

.then(result =>{
    console.log(result)
    return "Permission Granted!"
})
.then(reqMessage => console.log(reqMessage))
.catch(error => console.log(error))