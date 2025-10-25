// Local storage
const input = document.getElementById("inputTask")
const add = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

function saveTasks() {
    const tasks = []
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent)
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks")) || []
    saved.forEach(task => {
        const li = document.createElement("li")
        li.textContent = task

        const delBtn = document.createElement("button")
        delBtn.textContent = "-"
        li.appendChild(delBtn)

        delBtn.addEventListener("click", () => {
            li.remove()
            saveTasks()
        })

        taskList.appendChild(li)
    })
}

window.addEventListener("load", loadTasks)

add.addEventListener("click", () => {
    const task = input.value.trim()
    if (task === "") {
        return
    }

    const li = document.createElement("li")
    li.textContent = task

    const delBtn = document.createElement("button")
    delBtn.textContent = "-"
    li.appendChild(delBtn)

    delBtn.addEventListener("click", () => {
        li.remove()
        saveTasks()
    })

    taskList.appendChild(li)
    saveTasks()
    input.value = ""
})