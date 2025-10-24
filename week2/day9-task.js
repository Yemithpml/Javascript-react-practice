//Interactive To do list
const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskLists = document.getElementById("taskList")

addBtn.addEventListener("click", () => {
    const task = input.value.trim()
    if (task) {
        const li = document.createElement("li")
        li.textContent = task
        taskLists.appendChild(li)

        li.addEventListener("click", () => li.remove())
        input.value = ""
    }
    
})

//counter
const counter = document.getElementById("count")
const increase = document.getElementById("add")
const decrease = document.getElementById("sub")

let count = 0

increase.addEventListener("click", () => {
    counter.textContent = count ++
})
decrease.addEventListener("click", () => {
    counter.textContent = count --
})

//color changer
const button = document.getElementById("changeColor")

button.addEventListener("mouseover", () =>{
    const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`
    document.body.style.backgroundColor = randomColor
})