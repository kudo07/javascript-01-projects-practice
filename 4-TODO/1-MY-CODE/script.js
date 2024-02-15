const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const ulEl = document.querySelector('.list');
// get the list in the form of string
let list = JSON.parse(localStorage.getItem('list'));
if (list) {
  list.forEach((task) => {
    todoList(task);
  });
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  todoList();
});

function todoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }
  const liEl = document.createElement('li');
  if (task && task.checked) {
    liEl.classList.add('checked');
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = '';
  const checkBtnEl = document.createElement('div');
  checkBtnEl.innerHTML = `<i class="fas fa-check-square">`;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement('div');
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);

  //
  checkBtnEl.addEventListener('click', () => {
    liEl.classList.toggle('checked');
    updateLocalStorage();
  });

  //
  trashBtnEl.addEventListener('click', () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll('li');
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains('checked'),
    });
  });
  // in localstorage wan t to set the items as string and our array is array format so we use stringify
  localStorage.setItem('list', JSON.stringify(list));
}
