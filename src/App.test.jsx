import {fireEvent, render, screen} from '@testing-library/react';
import { App } from './App.jsx';
import '@testing-library/jest-dom';

describe('App', () => {
    it('render component', () => {
        render(<App />);
    });
    it('send user message', () => {
        render(<App/>);

        const input = screen.getByTestId('input');
        fireEvent.input(input, {target: {value: 'new value'}});

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        expect(screen.getAllByTestId('blockMessage').length).toBe(1);
    });

        it('bot answer', async () => {
          render(<App />);

          const input = screen.getByTestId('input');
            fireEvent.input(input, {target: {value: 'new value'}});

          const button = screen.getByTestId('button');
            fireEvent.click(button);

          expect(
            await screen.findByText(/user написал новое сообщение/, undefined, { timeout: 1600 })
          ).toBeInTheDocument();

        });
})
