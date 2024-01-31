import { TodoListItem } from './interfaces';
import fetchTodoList from "./fetchTodoList";
import addTodoItem from './addTodoItem';
import createListItem from './createListItem';

export default function App() {
    // document.body.innerHTML = '<div id="test" data-testid="testId">test</div>'
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
            listContainer.append(listItem);
        });
    };

    newTodoForm?.addEventListener('submit', (event) => handleAddingListItem(event));

    renderTodoList();

    console.log(document.querySelectorAll('li'));
}

