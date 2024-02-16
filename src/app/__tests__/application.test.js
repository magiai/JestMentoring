import App from "../";
import { screen, waitFor, getByTestId } from '@testing-library/dom';

//remember to break the test with the opposite value

jest.mock('../fetchTodoList', () => {
    return () => {
        return Promise.resolve(mockData);
    }
})

const mockData = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}];

describe('application with to-do list is initialized', () => {
    beforeEach(() => {
        //it should be created here as it's in the html file, not created in js
        const listContainer = document.createElement('ul');
        listContainer.classList.add('list');
        document.body.append(listContainer);
    });
    
    it('checks if to-do list is populated with data', async () => {
        const app = await App();
        console.log(123123, getByTestId(document.body, mockData[0].userId));
        // await screen.findByTestId(mockData[0].userId);
        expect(getByTestId(document.body, mockData[0].userId)).toBeInTheDocument();
        expect(getByTestId(document.body, mockData[0].id).textContent).toContain(`ID: ${mockData[0].id}`);
    });

});