import { getByTestId, getByText } from '@testing-library/dom';
import App from '../index';

describe('app initialization', () => {
    it('app test', () => {
        App();
        expect(getByTestId(document.body, 'testId')).toBeInTheDocument();
    });
});