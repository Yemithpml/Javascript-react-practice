//DOM practices
const title = document.getElementById("title");
title.textContent = "Hello how are we doing"

const paragraph = document.getElementsByClassName("description")
paragraph[0].textContent = "This is the first description."

const anotherTitle = document.querySelector("#title")
const desc = document.querySelector(".description");
anotherTitle.textContent = "HEllO again"
desc.textContent = "Query selector test is a success!"

const allParagraphs = document.querySelectorAll("p")
allParagraphs.forEach(p => p.textContent = "go home to your families")

const button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    title.style.color ="blue"
    title.style.fontSize = "2rem"
    desc.style.fontWeight = "bold"
    desc.style.color = "purple"
    desc.textContent = "Styles added effectively!"
})

const list = document.getElementById("todo-list")
const addBtn = document.getElementById("add")
const removeBtn = document.getElementById("remove")

addBtn.addEventListener("click", ()=>{
    const newItem = document.createElement("li")
    newItem.textContent = "New task added"
    list.appendChild(newItem)
})

removeBtn.addEventListener("click", () =>{
    const lastItem = list.lastElementChild;
    if (lastItem) 
        list.removeChild(lastItem)
})

const nameInput = document.getElementById("nameInput")
const greetBtn = document.getElementById("greetBtn")
const greet = document.getElementById("greet")

greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim()
    if (name) {
        greet.textContent = `Greetings, ${name}`
    } else {
        greet.textContent = "Plese enter your name"
    }
})
greetBtn.addEventListener("mouseover", () =>{
    document.body.style.backgroundColor = "lightblue"
})