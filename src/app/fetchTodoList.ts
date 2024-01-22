import { TodoListItem } from './interfaces';

interface TodoList extends TodoListItem {
    userId: number;
}

const fetchTodoList = async (): Promise<TodoList[] | void>=> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
        const toDoListJson = await response.json();
        return toDoListJson;
    } 
    catch(error) {
        console.log(error);
    }
};

export default fetchTodoList;

