function ButtonDelete() {
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Deletar';
    buttonDelete.classList.add('taskDelete');

    buttonDelete.addEventListener('click', deleteTask);

    return buttonDelete;
}

function deleteTask(event) {
    const buttonDelete = event.target;
    buttonDelete.parentElement.remove();
}

export  {
    ButtonDelete,
};