// state
let todos = [];
let nav = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $nav = document.querySelector('.nav');
const $inputTodo = document.querySelector('.input-todo');
const $clearBtn = document.querySelector('.clear-completed > .btn');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');
const $completeAll = document.querySelector('.complete-all > .checkbox');

const getActiveTodos = () => todos.filter(({ completed }) => !completed);
const getCompletedTodos = () => todos.filter(({ completed }) => completed);

const render = () => {
  const _todos = nav === 'active' ? getActiveTodos() : (nav === 'completed' ? getCompletedTodos() : todos);
  let html = '';

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
  fetch('/todos')
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};

const generateId = () => (todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1);

const changeNav = target => {
  [...$nav.children].forEach(child => child.classList.toggle('active', child === target));
  nav = target.id;
  render();
};

// event handlers
window.onload = getTodos;

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li') || target.classList.contains('active')) return;
  changeNav(target);
};

$inputTodo.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;

  fetch('/todos', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: generateId(), content, completed: false }),
  })
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;

  fetch(`/todos/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ completed }),
  })
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};

$todos.onclick = ({ target }) => {
  const id = target.parentNode.id;
  if (!target.matches('.todos > li > i.remove-todo')) return;

  fetch(`/todos/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};

$completeAll.onchange = ({ target }) => {
  const completed = target.checked;

  fetch('/todos', {
    method: 'PATCH',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({ completed }),
  })
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};

$clearBtn.onclick = () => {
  fetch('/todos/completed', {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => todos = data)
    .then(render)
    .catch(err => console.error(err));
};