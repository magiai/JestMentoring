import App from "../";
import { getByTestId } from '@testing-library/dom';

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

describe('app works', () => {
    beforeEach(() => {
        //it should be created here as it's in the html file, not created in js
        const listContainer = document.createElement('ul');
        listContainer.classList.add('list');
        document.body.append(listContainer);
    });

    it('calls the application', () => {
        const app = App();
        console.log(document.querySelector('.list'));
        expect(getByTestId(document.body, mockData[0].userId)).toBeInTheDocument(true);
    });

});