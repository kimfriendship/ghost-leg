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

const ajax = (() => {
  const request = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));

      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(`${xhr.status} ${xhr.statusText}`));
        }
      };
    });
  };

  return {
    get(url) {
      return request('GET', url);
    },
    post(url, payload) {
      return request('POST', url, payload);
    },
    patch(url, payload) {
      return request('PATCH', url, payload);
    },
    delete(url) {
      return request('DELETE', url);
    },
  };
})();

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

const getTodos = () => {
  ajax.get('/todos')
    .then(data => { todos = data; })
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

$inputTodo.onkeyup = e => {
  const content = e.target.value.trim();
  if (e.keyCode !== 13 || content === '') return;

  ajax.post('/todos', { id: generateId(), content, completed: false })
    .then(data => { todos = data; })
    .then(render)
    .catch(err => console.error(err));

  e.target.value = '';
};

$todos.onclick = ({ target }) => {
  const id = target.parentNode.id;
  if (!target.matches('.todos > li > i.remove-todo')) return;

  ajax.delete(`/todos/${id}`)
    .then(data => { todos = data; })
    .then(render)
    .catch(err => console.log(err));
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = target.checked;

  ajax.patch(`/todos/${id}`, { completed })
    .then(data => { todos = data; })
    .then(render)
    .catch(err => console.log(err));
};

$completeAll.onchange = () => {
  const completed = $completeAll.checked;

  ajax.patch('/todos', { completed })
    .then(data => { todos = data; console.log(data); })
    .then(render)
    .catch(err => console.log(err));
};

$clearBtn.onclick = () => {
  ajax.delete('/todos/completed')
    .then(data => { todos = data; })
    .then(render)
    .catch(err => console.log(err));
};
