const mockTest = () => console.log(122222);

jest.mock('../createDeleteButton', () => {
    mockTest();
    return 'asdfasdf'
})

import createListItem from "../createListItem";
import { getByTestId, fireEvent } from '@testing-library/dom';

const todoListItem = {
  id: 'test',
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
        const element = getByTestId(document.body, `${todoListItem.id}_delete_button`);
        await fireEvent.click(element);

        expect(true).toBe(true);
    })
});