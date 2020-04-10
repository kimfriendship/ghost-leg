// State
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
  let html = '';
  const _todos = nav === 'active' ? getActiveTodos() : (nav === 'completed' ? getCompletedTodos() : todos);

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

const getTodos = async () => {
  const { data } = await axios.get('/todos');
  todos = data;
  render();
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

$inputTodo.onkeyup = async ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;

  const { data } = await axios.post('/todos', { id: generateId(), content, completed: false })
  todos = data;

  render();
  target.value = '';
};

$todos.onchange = async ({ target }) => {
  const id = target.parentNode.id;
  const completed = target.checked;

  const { data } = await axios.patch(`/todos/${id}`, { completed });
  todos = data;
  render();
};

$todos.onclick = async ({ target }) => {
  if (!target.matches('.todos > li > i.remove-todo')) return;
  const id = target.parentNode.id;

  const { data } = await axios.delete(`/todos/${id}`);
  todos = data;
  render();
};

$completeAll.onchange = async () => {
  const completed = $completeAll.checked;

  const { data } = await axios.patch('/todos', { completed });
  todos = data;
  render();
};

$clearBtn.onclick = async () => {
  const { data } = await axios.delete('/todos/completed')
  todos = data;
  render();
};
