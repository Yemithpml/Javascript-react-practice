//Javascript object notation "JSON"
import { error } from "console";
import fetch from "node-fetch";

const user = {name: "Yemi", age : 19, skill: "Frontend"}

//convert objext to json string 
const jsonString = JSON.stringify(user)
console.log(jsonString)

// convert JSON string to object
const parsedUser = JSON.parse(jsonString)
console.log(parsedUser.name)

//Fetching data from an api
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
//converts to js object
  .then(data => console.log(data))
  .catch(error => console.log(error))

//using async await with fetch
async function loadData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("users loaded:", users);
    } catch (error) {
        console.log("Error fetching users:", error)
    }
}

loadData()

//picking the names
async function showNames() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach (user =>{
        console.log(user.email)
    })
}

showNames()

