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

//Asynch await task
function getWeather(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Sunny")
        }, 2000)
    })
}

async function showWeather() {
    console.log("Fetching weather data")

    const result = await getWeather()
    console.log(result)
}

showWeather()

function fetchUser(success){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (success){
                resolve("User data gotten successfully!")
            } else {
                reject("Something went wrong")
            }
        }, 1000)
    })
}

async function userData() {
    console.log("getting user data")

    try {
        const user = await fetchUser(false)
        console.log(user)
    } catch(error){
        console.log(error)
    }
}

userData()

//chaining
function Task1(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("task 1 done")
        }, 1000)
    })
}

function Task2(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("task 2 done")
        }, 1000)
    })
}

function Task3(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("task 3 undone")
        }, 1000)
    })
}

async function getTasks() {
    const a = await Task1()
    console.log(a)

    const b = await Task2()
    console.log(b)

    const c = await Task3()
    console.log(c)
}

getTasks()