import { TodoListItem } from './interfaces';
import createDeleteButton from './createDeleteButton';
import createEditButton from './createEditButton';

const createListItem = ({
    id, 
    title,
    completed
}: TodoListItem): HTMLElement  => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ID: ${id}
        Title: ${title}
        Completed: ${completed}
        `
    listItem.dataset.id = `${id}`;
    listItem.dataset.testid = `${id}`;

    const editButton = createEditButton(id);
    listItem.append(editButton);

    const deleteButton = createDeleteButton(id);
    listItem.append(deleteButton)

    return listItem
}

export default createListItem;