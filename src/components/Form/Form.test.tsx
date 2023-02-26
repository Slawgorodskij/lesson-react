import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
  let addMessage: jest.Mock<any, any>;

  beforeEach(() => {
    addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);
  });

  it('input change with fireevent', () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('input change with userevent', async () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    await waitFor(() => {
      userEvent.type(input, 'Hello world');
    });
    await waitFor(() => {
      expect(input.value).toBe('Hello world');
    });
  });

  it('button click with fireEvent', async () => {
    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
    await waitFor(() => {
      expect(input.value).toBe('new value');
    });
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    await waitFor(() => {
      expect(addMessage).toHaveBeenCalledTimes(1);
    });
  });

  it('count argument', () => {
    const beverage = { id: 123456, author: 'user', text: 'test' };
    addMessage(beverage);
    expect(addMessage).toHaveBeenCalledWith(beverage);
  });
});
