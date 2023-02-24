import {render, screen} from '@testing-library/react';
import {MyInput} from './MyInput.jsx';
import '@testing-library/jest-dom';

describe('MyInput', () => {
    it('render component', () => {
        render(<MyInput placeholder={'Введите текст'}/>);
        screen.debug();
    });

    it('render witch snapshot', () => {
        const {asFragment} = render(<MyInput placeholder={'Введите текст'}/>)
        expect(asFragment()).toMatchSnapshot()
    })
});

