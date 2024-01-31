import createListItem from "../createListItem";
import { getByTestId, fireEvent } from '@testing-library/dom';

const mockDeleteButton = `<button data-testid='201_delete-button'>Delete</button>`;

//this will replace createDeleteButton
jest.mock('../createDeleteButton', () => {
    return () => {
        //mock has to be called inside function
        mockTest();
        // const mockDeleteButton = `<button data-testid="${todoListItem.id}_delete-button">Delete</button>`;
        return mockDeleteButton
    }
})

const mockTest = () => console.log(122222);

const todoListItem = {
  id: '201',
  title: 'Example Todo',
  completed: false,
};

describe('New list item is added to list after form submit', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        document.body.innerHTML = '';
    });

    it('create new list item test', () => {
        const item = createListItem(todoListItem);
        document.body.append(item);

        expect(getByTestId(document.body, todoListItem.id)).toBeInTheDocument(true);
        expect(getByTestId(document.body, todoListItem.id).textContent).toContain(`ID: ${todoListItem.id}`);
    })

    
    it('test api', async () => {
        const item = createListItem(todoListItem);
        document.body.append(item);
        const element = getByTestId(document.body, `${todoListItem.id}_delete-button`);
        await fireEvent.click(element);

        expect(true).toBe(true);
    })
});