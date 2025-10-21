//Task on promises
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

//2nd
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("User data recieved")
        }, 2500)
    })
}
function getPost(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("User post Loaded")
        }, 3000)
    })
}

getUser()
.then(message =>{
    console.log(message)
    return getPost()
})
.then(nextMsg => console.log(nextMsg))
.catch(error => console.log(error))