const userInput = document.getElementById("taskInput")
const button = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

button.addEventListener("click", () =>
{
    const task = taskInput.value.trim()
    if (task === ""){
        alert("please enter a task")
        return;
    }
    const li = document.createElement("li")
    li.textContent = task;

    taskList.appendChild(li)

    input.value = "";
})
