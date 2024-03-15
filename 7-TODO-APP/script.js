let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const newTask = {
    id: Date.now(),
    text: taskText,
  };

  tasks.push(newTask);
  displayTasks();
  saveTasks();
  taskInput.value = '';
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task.text;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.style.display = 'none';
    editInput.value = task.text;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
      span.style.display = 'none';
      editInput.style.display = 'inline-block';
      editInput.focus();
    };

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => {
      task.text = editInput.value.trim();
      displayTasks();
      saveTasks();
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      deleteTask(task.id);
    };

    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  displayTasks();
  saveTasks();
}

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    tasks = savedTasks;
    displayTasks();
  }
});

// Save tasks to localStorage whenever tasks array changes
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
