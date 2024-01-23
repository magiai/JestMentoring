import { TodoListItem } from './interfaces';
import fetchTodoList from "./fetchTodoList";
import addTodoItem from './addTodoItem';
import deleteTodoItem from './deleteTodoItem';

export default function App() {
    // document.body.innerHTML = '<div id="test" data-testid="testId">test</div>'
    const listContainer = document.querySelector('.list');
    const newTodoForm = document.querySelector('#newTaskForm');

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
        return listItem
    }

    const handleRemovingListItem = async (id: number) => {
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
        deleteButton.addEventListener('click',  () => handleRemovingListItem(id));

        return deleteButton;
    }

    const prepareListItem = ({
        id, 
        title,
        completed
    }: TodoListItem) => {
        const listItem = createListItem({id, title, completed});
        const deleteButton = createDeleteButton(id);
        listItem.append(deleteButton)

        return listItem;
    }

    const handleAddingListItem = async (event: any) => {
        event.preventDefault();
        const task = (<HTMLInputElement>document.getElementById('task'))?.value;

        if (task) {
            const newRecord = await addTodoItem(task);
            const { id, title, completed } = newRecord;
            const newTask = prepareListItem({id, title, completed});
            listContainer?.append(newTask)
        }
    }
    
    const renderTodoList = async (): Promise<void> => {
        const todos = await fetchTodoList();
        todos?.forEach(todo => {
            const { id, title, completed } = todo;
            const listItem = prepareListItem({id, title, completed});
            listContainer?.append(listItem);
        });
    };

    newTodoForm?.addEventListener('submit', (event) => handleAddingListItem(event));

    renderTodoList();
}

