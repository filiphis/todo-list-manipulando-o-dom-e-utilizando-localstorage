function ButtonComplete() {
    const buttonComplete = document.createElement('button');
    buttonComplete.textContent = 'Concluir';
    buttonComplete.classList.add('taskComplete');

    buttonComplete.addEventListener('click', completeTask)

    return buttonComplete;
}

function completeTask(event){
    const buttonComplete = event.target;
    buttonComplete.parentElement.classList.toggle('taskAsComplete');
}

export { 
    ButtonComplete,
};