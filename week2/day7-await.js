//Understanding asynch and await
function getData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Data fetched successfully")
        }, 2000)
    })
}

async function showData() {
    console.log("Fetching data ...")
    const result = await getData()

    console.log(result)
}

showData()

function getUserData(success){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(success){
                resolve("user data loaded")
            } else{
                reject("failed to load user data")
            }
        }, 1500)
    })
}
async function displayUser(){
    try {
        const user = await getUserData(false);
        console.log(user)
    } catch (error){
        console.log("Error caught:", error);
    }
}

displayUser()

function step1(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("step 1 complete")
        }, 1000)
    })
}
function step2(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("step 2 completed"))
    }, 1000)
}
function step3(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("step 3 completed"))
    })
}

async function runSteps() {
    const a = await step1()
    console.log(a)
    
    const b = await step2()
    console.log(b)

    const c = await step3()
    console.log(c)

    console.log("All steps done!")
}

runSteps()