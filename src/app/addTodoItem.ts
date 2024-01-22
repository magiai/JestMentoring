const addTodoItem = async (task: string): Promise<any | void> => {
    try {
        const postTask = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: task,
                completed: false,
                userId: '1',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const newTaskJson = await postTask.json();
        console.log('new task: ' + newTaskJson)
        return newTaskJson;
    }
    catch(error) {
        console.log(error);
    }
};

export default addTodoItem;