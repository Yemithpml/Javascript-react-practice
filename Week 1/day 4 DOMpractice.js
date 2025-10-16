//selecting by id
//const title = document.getElementById("title")
//title.textContent = "Welcome Yemi"

//selecting by class
//const info = document.querySelector(".info")
//info.style.color = "blue"
//info.style.fontSize = "18px"

//selecting by tag
//const button = document.querySelector("button")

//button.addEventListener("click", () =>
//{
    //title.textContent = "You clicked the button"
    //title.style.color = "green"
  //  info.textContent = "You just changed this text with javascriot"
//})

//const newPara = document.createElement("p")
//newPara.textContent = "this paragraph was added with java script"

//document.body.appendChild(newPara)

const title = document.getElementById("title")
title.textContent = "welcome Yemi"

const info = document.querySelector(".info")
info.style.color = "blue"
info.style.fontSize = "18px"

const button = document.querySelector("button")

button.addEventListener("click", ()=>
{
    title.textContent = "Awesome!, you chsnged the background"
    info.textContent = "Good Job"

    document.body.style.backgroundColor ="blue"
}
)
const reverse = document.getElementById("reverse")
reverse.addEventListener("click", ()=>
{
    title.textContent = "Welcome Yemi"
    info.textContent = "Changed back"

    document.body.style.backgroundColor = "white"

})
const userInput = document.getElementById("userInput")
const liveText = document.getElementById("liveText")
userInput.addEventListener("input", ()=>
{
    liveText.textContent = `You typed: ${userInput.value}`
})