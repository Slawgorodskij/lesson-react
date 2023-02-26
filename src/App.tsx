import './App.css';
import { FC, useEffect, useState } from 'react';
import { Form } from 'components/Form';
import { MessageList } from 'components/MessageList';
import { AUTHOR, Message, Messages } from 'src/types';

export const App: FC = () => {
  const [messageList, setMessageList] = useState<Messages>([]);
  const addMessage = (newMessage: Message) => {
    setMessageList((prevMessage) => [...prevMessage, newMessage]);
  };
  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (lastMessage && lastMessage.author !== AUTHOR.BOT) {
      const timeout = setTimeout(() => {
        addMessage({
          id: Date.now(),
          text: `${lastMessage.author} написал новое сообщение`,
          author: AUTHOR.BOT,
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);
  return (
    <div className="App">
      <MessageList messages={messageList} />
      <Form addMessage={addMessage} />
    </div>
  );
};
