//use fetch to load posts from "https://jsonplaceholder.typicode.com/posts". 
// log only the title of each post

//using asynch
async function loadPosts() {
    try {
        const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();

    posts.forEach (post =>{
        console.log(post.title)
    })
    } catch(error){
        console.log(error);
    }
}
loadPosts()

//using promises
fetch ("https://jsonplaceholder.typicode.com/posts")
.then(req => req.json)
.then(posts =>{
    forEach(post =>{
        console.log(post.title)
    })
})
.catch(error => console.log(error))

loadPosts()

//create a small asynch function getTodo that fetches one item from
//"https://jsonplaceholder.typicode.com/todos/1" and logs the result

async function getTodo() {
    try {
        const res = await fetch("igothere.com")
        const fake = res.json()
        console.log(fake)
    } catch(error){
        console.log(error)
    }
}

getTodo()

//simulate a failed fetch with an invalid link catch the error and log "something went wrong"
async function getFake() {
    try {
        const res = await fetch("igothere.com")
        const fake = res.json()
        console.log("success", fake)
    } catch (error){
        console.log("invalid fetch link", error)
    }
}

getFake()