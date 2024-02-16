import createListItem from "../createListItem";
import { getByTestId, fireEvent } from '@testing-library/dom';

//it needs to have 'mock' in the varable name
const mockDeleteButton = document.createElement('button');
mockDeleteButton.dataset.testid = '201_delete-button';

const mockButtonOnClick = jest.fn();
mockDeleteButton.addEventListener('click', mockButtonOnClick);
//with argument
// mockDeleteButton.addEventListener('click', () => {mockButtonOnClick('qwe')});

//this will replace createDeleteButton
jest.mock('../createDeleteButton', () => {
    return () => {
        //mock has to be called inside return function
        return mockDeleteButton
    }
})

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

        expect(mockButtonOnClick).toHaveBeenCalled();
        //with argument
        // expect(mockButtonOnClick).toHaveBeenCalledWith('qwe');
    })
});