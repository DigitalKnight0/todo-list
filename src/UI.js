
function populateProjectDisplay(projectName, todos){
    const display = document.querySelector('.display')
    display.textContent = ''
    document.querySelector('.project-name').textContent = projectName

    todos.forEach((todo, index) => {
        const card = createCard(todo)
        card.querySelector('.remove').setAttribute('data-project', projectName)
        card.querySelector('.remove').setAttribute('data-index', index)
        card.querySelector('.edit').setAttribute('data-project', projectName)
        card.querySelector('.edit').setAttribute('data-index', index)
        display.appendChild(card)
    })

    const newtodoBtn = document.createElement('button')
    newtodoBtn.classList.add('new-todo')
    newtodoBtn.setAttribute('data-project', projectName)
    newtodoBtn.textContent = "Add new Todo"
    newtodoBtn.addEventListener('click', openTodoForm)
    addListener('.edit', openEditForm)
    display.appendChild(newtodoBtn)
}

function populateTimedDisplay(projectList, interval){
    const display = document.querySelector('.display')
    display.textContent = ''
    document.querySelector('.project-name').textContent = interval

    for(const projectName in projectList){
        const todos = projectList[projectName]
        todos.forEach((todo, index) => {
            if(todo === '') return
            const card = createCard(todo)
            card.querySelector('.remove').setAttribute('data-project', projectName)
            card.querySelector('.remove').setAttribute('data-index', index)
            card.querySelector('.edit').setAttribute('data-project', projectName)
            card.querySelector('.edit').setAttribute('data-index', index)
            display.appendChild(card)
        })
    }
    addListener('.edit', openEditForm)
}

function createCard(todo){
    const cardTemp = document.querySelector('.card-template').content.cloneNode(true)
    const card = cardTemp.querySelector('.card')
    card.querySelector('.title').textContent = todo.title
    card.querySelector('.date').textContent = todo.dueDate
    card.querySelector('.priority').textContent = todo.priority
    return card
}

function populateSidebar(projects){
    const projectsDisplay = document.querySelector('.projects')
    projectsDisplay.textContent = ''

    projects.forEach(project => {
        if(project === 'inbox') return
        const tab = document.createElement('div')
        tab.classList.add('project-tab')
        const projectName = document.createElement('p')
        projectName.textContent = project
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "X"
        deleteBtn.setAttribute('data-project', project)
        deleteBtn.classList.add('delete-project')
        tab.appendChild(projectName)
        tab.appendChild(deleteBtn)
        projectsDisplay.appendChild(tab)
    })
}

function addListener(selector, callback){
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
        element.addEventListener('click', callback)
    })
}

addListener('.new-project', openProjectForm)

function openProjectForm(){
    document.querySelector('.project-form').classList.remove('hidden')
}

function openTodoForm(e){
    const form = document.querySelector('.todo-form')
    const projectName = e.target.getAttribute('data-project')
    form.querySelector('.todo-form-title').textContent = projectName
    form.classList.remove('hidden')
}

function openEditForm(e){
    const form = document.querySelector('.edit-todo-form')
    form.querySelector('#index').value = e.target.getAttribute('data-index')
    form.querySelector('#project').value = e.target.getAttribute('data-project')
    form.classList.remove('hidden')
}

export default {
    populateProjectDisplay,
    populateSidebar,
    addListener,
    populateTimedDisplay
}