const tasks =[
    {id : 1, title : "Read your bible", completed : true},
    {id : 2, title : "Workout", completed : false},
    {id : 3, title : "Javascript tutorials", completed : true},
    {id : 4, title : "Javascript pactice", completed : true}
]

//function to add new task
const addTask = (title) =>{
    const newTask ={
        id: tasks.length + 1,
        title: title,
        completed: false
    }
    tasks.push(newTask)
}

//Mark incomplete Task as completed
const markTask = (id) =>{
    return tasks.map(task => task.id === id ? {
        ...task, completed: true
    } : task)
}

// see only completed or pending tasks
const completedTask = tasks.filter(task => task.completed)
const pendingTask = tasks.filter(task => !task.completed)

//calculate total completed task
const totalCompletedTask = tasks.reduce((count, task) => (task.completed ? count + 1 : count), 0)

//test
addTask("clean my room")
addTask("pack for school")
console.log("All tasks", tasks)

markTask(1)
console.log("updated task 1", tasks)

console.log("completed", completedTask);
console.log("Pending", pendingTask);

console.log("You have completed", `${totalCompletedTask} task.`)