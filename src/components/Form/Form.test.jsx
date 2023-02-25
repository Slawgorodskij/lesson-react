import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form.jsx';
import '@testing-library/jest-dom';

describe('Form', () => {
  let addMessage;
  beforeEach(() => {
    addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);
  });

  it('input change with fireevent', () => {
    const input = screen.getByTestId('input');
    fireEvent.input(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('input change with userevent', async () => {
    const input = screen.getByTestId('input');
    await userEvent.type(input, 'Hello world');
    expect(input.value).toBe('Hello world');
  });

  it('button click with fireEvent', () => {
    const input = screen.getByTestId('input');
    fireEvent.input(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
  it('count argument', () => {
    const beverage = { id: 123456, author: 'user', text: 'test' };
    addMessage(beverage);
    expect(addMessage).toHaveBeenCalledWith(beverage);
  });
});
