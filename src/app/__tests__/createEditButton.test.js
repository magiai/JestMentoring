import createEditButton from "../createEditButton";
import { getByTestId, fireEvent } from "@testing-library/dom";

//you need to mock every function that is on the way 
jest.mock('../sideEffect', () => {
    //we replace it with this first return
    return () => {
        console.log('side effct mocked');
    }
})

describe('edit button test with callback', () => {
    
    beforeEach(() => {
        document.body.innerHTML = '';
    });
    
    beforeAll(() => {
        jest.useFakeTimers()
    });

    afterAll(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    });

    it('edit button is rendered', () => {
        const editButton = createEditButton(1);
        document.body.append(editButton);
        
        expect(getByTestId(document.body, 1)).toBeInTheDocument();
    });

    it('edit button callback it triggered', () => {
        const mockEditButtonCallback = jest.fn();
        const editButton = createEditButton(1, mockEditButtonCallback);
        document.body.append(editButton);
       
        fireEvent.click(editButton);
        jest.advanceTimersByTime(5000);
        expect(mockEditButtonCallback).toHaveBeenCalled();
    });
});
