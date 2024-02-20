import deleteTodoItem from './deleteTodoItem';

export const showDeleteMessage = (taskId: number) => {
    setTimeout(() => {
        alert(`Your task ${taskId} has been deleted!`);
    }, 1000)
}

export const handleRemovingListItem = async (id: number) => {
    await deleteTodoItem(id);
    console.log(`Deleted to-do item with ID ${id}`);

    const tasks = document.querySelectorAll('.list li');
    tasks.forEach(task => {
        if (task.getAttribute('data-id') === String(id)) task.remove();
    })

    showDeleteMessage(id);
}

const createDeleteButton = (id: number): HTMLElement => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.dataset.id = `${id}`;
    deleteButton.dataset.testid = `${id}_delete-button`;
    deleteButton.addEventListener('click',  () => handleRemovingListItem(id));

    return deleteButton;
}

export default createDeleteButton;