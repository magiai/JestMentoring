import deleteTodoItem from './deleteTodoItem';

export const handleRemovingListItem = async (id: number) => {
    console.log(123);
    return null;
    await deleteTodoItem(id);
    console.log(`Deleted to-do item with ID ${id}`);

    const tasks = document.querySelectorAll('.list li');
    tasks.forEach(task => {
        if (task.getAttribute('data-id') === String(id)) task.remove();
    })
}

const createDeleteButton = (id: number): HTMLElement => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.dataset.testid = `${id}_delete_button`;
    deleteButton.addEventListener('click',  () => handleRemovingListItem(id));

    return deleteButton;
}

export default createDeleteButton;