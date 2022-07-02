import createTodo from "./todos.js"


const projects = {}

function createProject(name){
    projects[name] = []
}

function deleteProject(projectName){
    delete projects[projectName]
}

function addTodoToProject(projectName, title, description, dueDate, priority){
    const todo = createTodo(title, description, dueDate, priority)
    projects[projectName].push(todo)
}

function removeTodoFromProject(projectName, todoIndex){
    projects[projectName].splice(todoIndex, 1)
}