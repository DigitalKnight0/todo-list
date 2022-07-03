import { isToday, isThisWeek } from 'date-fns';
import createTodo from './todos';
import { updateStorage, getStorage } from './storage';

function initializeProjects() {
  const savedProjects = getStorage();
  return savedProjects || { inbox: [] };
}

const projects = initializeProjects();

function createProject(name) {
  projects[name] = [];

  updateStorage(projects);
}

function deleteProject(projectName) {
  delete projects[projectName];

  updateStorage(projects);
}

function addTodoToProject(projectName, title, description, dueDate, priority) {
  const todo = createTodo(title, description, dueDate, priority);
  projects[projectName].push(todo);

  updateStorage(projects);
}

function removeTodoFromProject(projectName, todoIndex) {
  projects[projectName].splice(todoIndex, 1);

  updateStorage(projects);
}

function getProjectTodos(projectName) {
  return projects[projectName];
}

function getProjects() {
  return projects;
}

function updateTodo(projectName, index, newDate, newPriority) {
  const todo = projects[projectName][index];
  todo.dueDate = newDate;
  todo.priority = newPriority;

  updateStorage(projects);
}

function getDailyProjects() {
  const clonedObj = { ...projects };
  Object.keys(clonedObj).forEach((project) => {
    const filtered = clonedObj[project].map((todo) => {
      const date = new Date(todo.dueDate);
      if (isToday(date)) return todo;
      return '';
    });
    clonedObj[project] = filtered;
  });
  return clonedObj;
}

function getWeeklyProjects() {
  const clonedObj = { ...projects };
  Object.keys(clonedObj).forEach((project) => {
    const filtered = clonedObj[project].map((todo) => {
      const date = new Date(todo.dueDate);
      if (isThisWeek(date)) return todo;
      return '';
    });
    clonedObj[project] = filtered;
  });
  return clonedObj;
}

function verifyProjectName(projectName) {
  const defaults = ['Daily', 'Daily Projects', 'This Week', 'Weekly Projects', 'inbox'];
  const customProjects = Object.keys(projects);
  const existingProjects = defaults.concat(customProjects);
  return existingProjects.includes(projectName);
}

export default {
  createProject,
  deleteProject,
  addTodoToProject,
  removeTodoFromProject,
  getProjects,
  getProjectTodos,
  updateTodo,
  getDailyProjects,
  getWeeklyProjects,
  verifyProjectName,
};
