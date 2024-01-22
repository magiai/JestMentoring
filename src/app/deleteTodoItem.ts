const deleteTodoItem = async (id: number): Promise<void> => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        });
    }
    catch(error) {
        console.log(error)
    }
};

export default deleteTodoItem;