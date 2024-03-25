const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks');

let tasks = [];

function addTask(task) {
    tasks.push(task);
    updateTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

function editTask(index, newTask) {
    tasks[index] = newTask;
    updateTasks();
}

function updateTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        input.type = 'text';
        input.value = task;
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';

        li.appendChild(input);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        deleteButton.addEventListener('click', () => removeTask(index));
        editButton.addEventListener('click', () => {
            const newTask = prompt('Enter a new task:');
            editTask(index, newTask);
        });

        tasksList.appendChild(li);
    });
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = newTaskInput.value.trim();
    if (newTask.length) {
        addTask(newTask);
        newTaskInput.value = '';
    }
});