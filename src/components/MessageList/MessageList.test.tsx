import { render, screen } from '@testing-library/react';
import { MessageList } from './MessageList';
import '@testing-library/jest-dom';
import { AUTHOR } from 'src/types';

describe('Messages', () => {
  const messagesArray = [
    {
      id: 123456,
      author: AUTHOR.USER,
      text: 'test',
    },
    {
      id: 1234566,
      author: AUTHOR.USER,
      text: 'test2',
    },
    {
      id: 1234567,
      author: AUTHOR.USER,
      text: 'test3',
    },
  ];

  it('render component', () => {
    render(<MessageList messages={[]} />);
    screen.debug();
  });

  it('message is empty', () => {
    render(<MessageList messages={[]} />);
    expect(screen.queryAllByTestId('blockMessage').length).toBe(0);
  });

  it('message length 3', () => {
    render(<MessageList messages={messagesArray} />);
    expect(screen.queryAllByTestId('blockMessage').length).toBe(3);
  });
  it('render message', () => {
    render(<MessageList messages={messagesArray} />);
    expect(screen.queryAllByTestId('blockMessage')[0].innerHTML).toBe(
      'USER : test'
    );
    expect(screen.queryAllByTestId('blockMessage')[1].innerHTML).toBe(
      'USER : test2'
    );
    expect(screen.queryAllByTestId('blockMessage')[2].innerHTML).toBe(
      'USER : test3'
    );
  });
});
