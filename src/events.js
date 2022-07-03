import Project from "./project.js"
import View from "./UI.js"

const inbox = document.querySelector('.inbox')
const today = document.querySelector('.today')
const week = document.querySelector('.week')

today.addEventListener('click', ()=>{
    const todayProjects = Project.getDailyProjects()
    View.populateTimedDisplay(todayProjects, 'Daily Projects')
    View.addListener('.remove', handleTodoDelete)
})

week.addEventListener('click', ()=>{
    const weekProjects = Project.getWeeklyProjects()
    View.populateTimedDisplay(weekProjects, 'Weekly Projects')
    View.addListener('.remove', handleTodoDelete)
})

inbox.addEventListener('click', displayInbox)

function displayInbox(){
    const todos = Project.getProjectTodos('inbox')
    View.populateProjectDisplay('inbox', todos)
    View.addListener('.remove', handleTodoDelete)
}

function handleProjectDelete(e){
    const project = e.target.getAttribute('data-project')
    Project.deleteProject(project)
    View.populateSidebar(Object.keys(Project.getProjects()))
    View.addListener('.delete-project', handleProjectDelete)
    View.addListener('.project-tab', showProjectTodos)
    const todos = Project.getProjectTodos('inbox')
    View.populateProjectDisplay('inbox', todos)
    View.addListener('.remove', handleTodoDelete)
}

function handleNewProject(e){
    e.preventDefault()
    const projectName = document.querySelector('#project-name').value
    if(Project.verifyProjectName(projectName)){
        alert('Projects Name cannot be the Same!')
        return
    }
    Project.createProject(projectName)
    View.populateSidebar(Object.keys(Project.getProjects()))
    View.addListener('.delete-project', handleProjectDelete)
    View.addListener('.project-tab', showProjectTodos)
    e.target.reset()
    e.target.classList.add('hidden')
}

function showProjectTodos(e){
    const projectName = e.target.textContent
    const todos = Project.getProjectTodos(projectName)
    if(!todos) return
    View.populateProjectDisplay(projectName, todos)
    View.addListener('.remove', handleTodoDelete)
}

function handleNewTodo(e){
    e.preventDefault()
    const form = e.target
    const projectName = form.querySelector('.todo-form-title').textContent
    const title = form.querySelector('#title').value
    const date = form.querySelector('#date').value
    const priority = form.querySelector('#priority').value
    Project.addTodoToProject(projectName, title, 'lol', date, priority)
    const todos = Project.getProjectTodos(projectName)
    View.populateProjectDisplay(projectName, todos)
    View.addListener('.remove', handleTodoDelete)
    e.target.reset()
    e.target.classList.add('hidden')
}

function handleTodoDelete(e){
    const projectName = e.target.getAttribute('data-project')
    const todoIndex = e.target.getAttribute('data-index')
    Project.removeTodoFromProject(projectName, todoIndex)
    const displayProject = document.querySelector('.project-name').textContent
    if(displayProject === 'Daily Projects'){
        const projectList = Project.getDailyProjects()
        View.populateTimedDisplay(projectList, 'Daily Projects')
    } else if(displayProject === 'Weekly Projects'){
        const projectList = Project.getWeeklyProjects()
        View.populateTimedDisplay(projectList, 'Weekly Projects')
    } else{
        const todos = Project.getProjectTodos(projectName)
        View.populateProjectDisplay(projectName, todos)
    } 
    View.addListener('.remove', handleTodoDelete)
}

function handleEditTodo(e){
    e.preventDefault()
    const dueDate = e.target.querySelector('#date').value
    const priority = e.target.querySelector('#priority').value
    const projectName = e.target.querySelector('#project').value
    const index = e.target.querySelector('#index').value
    Project.updateTodo(projectName, index, dueDate, priority)
    const displayProject = document.querySelector('.project-name').textContent
    if(displayProject === 'Daily Projects'){
        const projectList = Project.getDailyProjects()
        View.populateTimedDisplay(projectList, 'Daily Projects')
    } else if(displayProject === 'Weekly Projects'){
        const projectList = Project.getWeeklyProjects()
        View.populateTimedDisplay(projectList, 'Weekly Projects')
    } else{
        const todos = Project.getProjectTodos(projectName)
        View.populateProjectDisplay(projectName, todos)
    } 
    View.addListener('.remove', handleTodoDelete)
    e.target.reset()
    e.target.classList.add('hidden')
}

document.querySelector('.project-form').addEventListener('submit', handleNewProject)
document.querySelector('.todo-form').addEventListener('submit', handleNewTodo)
document.querySelector('.edit-todo-form').addEventListener('submit', handleEditTodo)

export default function(){
    displayInbox()
    View.populateSidebar(Object.keys(Project.getProjects()))
    View.addListener('.delete-project', handleProjectDelete)
    View.addListener('.project-tab', showProjectTodos)
}
