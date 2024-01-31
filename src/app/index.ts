import { TodoListItem } from './interfaces';
import fetchTodoList from "./fetchTodoList";
import addTodoItem from './addTodoItem';
import createListItem from './createListItem';

const App = async () => {
    const listContainer = document.querySelector('.list');
    const newTodoForm = document.querySelector('#newTaskForm');

    const handleAddingListItem = async (event: any) => {
        event.preventDefault();
        const task = (<HTMLInputElement>document.getElementById('task'))?.value;

        if (task) {
            const newRecord = await addTodoItem(task);
            const { id, title, completed } = newRecord;
            const newTask = createListItem({id, title, completed});
            listContainer?.append(newTask)
        }
    }
    
    const renderTodoList = async (): Promise<void> => {
        const todos = await fetchTodoList();
        todos?.forEach(todo => {
            const { id, title, completed } = todo;
            const listItem = createListItem({id, title, completed});
            console.log(listItem.dataset.testid);
            listContainer?.append(listItem);
            console.log('appendeed item');
        });
    };

    newTodoForm?.addEventListener('submit', (event) => handleAddingListItem(event));

    await renderTodoList();
}

export default App;
