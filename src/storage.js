export function updateStorage(projects){
    const projectString = JSON.stringify(projects)
    localStorage.setItem('project', projectString)
}

export function getStorage(){
    const projects = localStorage.getItem('project')
    if(!projects) return null
    else return JSON.parse(projects)
}