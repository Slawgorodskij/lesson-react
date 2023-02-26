import React, { FC, useState } from 'react';
import style from './Form.module.scss';
import { Button } from './components/Button';
import { Message, AUTHOR } from 'src/types';
import TextField from '@material-ui/core/TextField';

interface FormProps {
  addMessage(newMessage: Message): void;
}
export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text !== '') {
      addMessage({
        id: Date.now(),
        author: AUTHOR.USER,
        text: text,
      });
      setText(() => '');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.my__form}>
      <TextField
        type="text"
        value={text}
        placeholder={'Введите сообщение'}
        onChange={textChange}
        inputProps={{ 'data-testid': 'input' }}
      />
      <Button label={'Отправить'} disabled={!text} />
    </form>
  );
};
