// state
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $clearBtn = document.querySelector('.clear-completed > .btn');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');

// functions
const getActiveTodos = () => todos.filter(({ completed }) => !completed);
const getCompletedTodos = () => todos.filter(({ completed }) => completed);

const render = () => {
  let html = '';
  const _todos = navState === 'active' ? getActiveTodos() : (navState === 'completed' ? getCompletedTodos() : todos);

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? ' checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $activeTodos.textContent = getActiveTodos().length;
  $completedTodos.textContent = getCompletedTodos().length;
  $todos.innerHTML = html;
};

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false },
  ].sort((todo1, todo2) => todo2.id - todo1.id);

  render();
};

const generateId = () => (todos.length !== 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const createTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

const changeNavState = navId => {
  navState = navId;
  render();
};

// event handlers
window.onload = getTodos;

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li') || target.classList.contains('active')) return;
  [...$nav.children].forEach(child => child.classList.toggle('active', target === child));

  changeNavState(target.id);
};

$inputTodo.onkeyup = e => {
  const content = e.target.value.trim();
  if (e.keyCode !== 13 || content.length === 0) return;

  createTodo(content);
  e.target.value = '';
};

$todos.onchange = e => {
  const id = e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));

  render();
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i.remove-todo')) return;
  const id = e.target.parentNode.id;

  removeTodo(id);
};

$completeAll.onchange = e => {
  todos = todos.map(todo => ({ ...todo, completed: e.target.checked }));
  render();
};

$clearBtn.onclick = () => {
  todos = getActiveTodos();
  render();
};
