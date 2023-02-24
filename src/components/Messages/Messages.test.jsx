import {render, screen} from '@testing-library/react';
import {Messages} from './Messages.jsx';
import '@testing-library/jest-dom';


describe('Messages', () => {
    const messagesArray = [
        {
            id: 123456,
            author: 'user',
            text: 'test'
        },
        {
            id: 1234566,
            author: 'user',
            text: 'test2'
        },
        {
            id: 1234567,
            author: 'user',
            text: 'test3'
        }
    ]
    it('render component', () => {
        render(<Messages messages={[]}/>);
        screen.debug();
    });

    it('message is empty', () => {
        render(<Messages messages={[]}/>);
        expect(screen.queryAllByTestId('blockMessage').length).toBe(0);
    });

    it('message length 3', () => {
        render(<Messages messages={messagesArray}/>);
        expect(screen.queryAllByTestId('blockMessage').length).toBe(3);
    });
    it('render message', () => {
        render(<Messages messages={messagesArray}/>);
        expect(screen.queryAllByTestId('blockMessage')[0].innerHTML).toBe('<p><span>user</span> test</p>');
        expect(screen.queryAllByTestId('blockMessage')[1].innerHTML).toBe('<p><span>user</span> test2</p>');
        expect(screen.queryAllByTestId('blockMessage')[2].innerHTML).toBe('<p><span>user</span> test3</p>');
    });

});