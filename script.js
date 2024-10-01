// Select elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add new task
addButton.addEventListener('click', function() {
  const task = inputField.value.trim();
  if (task !== '') {
    addTask(task);
    inputField.value = ''; // Clear input field
  }
});

// Add task to the list
function addTask(task) {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex align-items-center justify-content-between';

  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';
  taskDetails.innerHTML = `<span>${task}</span>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'task-buttons';

  // Create "Mark as Done" button
  const doneBtn = document.createElement('lord-icon');
  doneBtn.setAttribute('src', 'https://cdn.lordicon.com/rvmukzut.json');
  doneBtn.setAttribute('trigger', 'hover');
  doneBtn.setAttribute('state', 'hover-loading');
  doneBtn.style.width = '40px';
  doneBtn.style.height = '40px';

  // Create "Mark as Not Done" button (initially hidden)
  const notDoneBtn = document.createElement('lord-icon');
  notDoneBtn.setAttribute('src', 'https://cdn.lordicon.com/nqtddedc.json');
  notDoneBtn.setAttribute('trigger', 'hover');
  notDoneBtn.setAttribute('colors', 'primary:#30e8bd');
  notDoneBtn.style.width = '40px';
  notDoneBtn.style.height = '40px';
  notDoneBtn.style.display = 'none'; // Initially hidden

  // Create "Delete" button
  const deleteBtn = document.createElement('lord-icon');
  deleteBtn.setAttribute('src', 'https://cdn.lordicon.com/vlnvqvew.json');
  deleteBtn.setAttribute('trigger', 'morph');
  deleteBtn.setAttribute('stroke', 'bold');
  deleteBtn.setAttribute('state', 'morph-trash-in');
  deleteBtn.style.width = '40px';
  deleteBtn.style.height = '40px';

  // Mark task as completed
  doneBtn.addEventListener('click', function() {
    li.classList.add('completed');
    taskDetails.querySelector('span').style.textDecoration = 'line-through';
    doneBtn.style.display = 'none'; // Hide the Done icon
    notDoneBtn.style.display = 'inline'; // Show the Not Done icon
  });

  // Mark task as not completed
  notDoneBtn.addEventListener('click', function() {
    li.classList.remove('completed');
    taskDetails.querySelector('span').style.textDecoration = 'none';
    doneBtn.style.display = 'inline'; // Show the Done icon
    notDoneBtn.style.display = 'none'; // Hide the Not Done icon
  });

  // Delete task
  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering complete/not complete
    li.remove(); // Remove the task
  });

  // Append buttons to the container
  buttonContainer.appendChild(doneBtn);
  buttonContainer.appendChild(notDoneBtn);
  buttonContainer.appendChild(deleteBtn);

  // Append task details and buttons to the list item
  li.appendChild(taskDetails);
  li.appendChild(buttonContainer);

  todoList.appendChild(li); // Add the list item to the todo list
}

// Press Enter to add task
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addButton.click(); // Simulate button click
  }
});
