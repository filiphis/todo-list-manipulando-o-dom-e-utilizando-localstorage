import { ButtonComplete } from "./components/completeTask.js";
import { ButtonDelete } from "./components/deleteTask.js";

const btnAdd = document.querySelector('[data-btnAdd]');
const inputTask = document.querySelector('[data-inputTask]');
const list = document.querySelector('[data-list]');

btnAdd.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();


    const inputValue = inputTask.value;

    const listItem = document.createElement('li');
    listItem.classList.add('task');
    const taskText = document.createElement('span');
    taskText.classList.add('taskDescription');
    taskText.textContent = inputValue;
    listItem.appendChild(taskText);
    listItem.appendChild(ButtonComplete());
    listItem.appendChild(ButtonDelete());

    list.appendChild(listItem);

    inputTask.value = '';
}



