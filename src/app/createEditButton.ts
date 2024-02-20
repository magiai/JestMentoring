import {someAction} from "./someAction";
import sideEffect from "./sideEffect";

const createEditButton = (id: number, onClick = () => {}): HTMLElement => {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Edit';
    buttonElement.dataset.id = `${id}`;
    buttonElement.dataset.testid = `${id}`;
    buttonElement.addEventListener('click',  () => someAction(onClick, 5000));

    sideEffect();

    return buttonElement;
}

export default createEditButton;