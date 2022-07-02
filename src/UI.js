

function populateProjectDisplay(ProjectName, todos){
    const display = document.querySelector('.display')
    document.querySelector('.project-name').textContent = ProjectName

    todos.forEach((todo, index) => {
        const card = createCard(todo)
        card.setAttribute('data-project', ProjectName)
        card.setAttribute('data-index', index)
        display.appendChild(card)
    })
}

function createCard(todo){
    const card = document.querySelector('.card-template').cloneNode(true)
    card.querySelector('.title').textContent = todo.title
    card.querySelector('.date').textContent = todo.dueDate
    card.querySelector('.priority').textContent = todo.priority

}

function populateSidebar(){

}