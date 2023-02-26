import {render, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar', () => {

    it('render component', () => {
        render(<Sidebar/>);
        screen.debug();
    });

    it('message is empty', () => {
        render(<Sidebar/>);
        expect(screen.queryAllByTestId('blockMessage').length).toBe(0);
    });

});