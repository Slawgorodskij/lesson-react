import React, { useState } from 'react';
import style from './form.module.css';

const Form = ({ addMessage }) => {
  const [text, setText] = useState('');
  const textChange = (event) => {
    setText(event.target.value);
  };
  const sendForm = (event) => {
    event.preventDefault();
    if (text !== '') {
      const message = {
        id: Date.now(),
        author: 'USER',
        text: text,
      };
      addMessage((prevMessage) => [...prevMessage, message]);
      setText(() => '');
    }
  };
  return (
    <form className={style.form}>
      <input
        className={style.form__input}
        type="text"
        value={text}
        placeholder={'Введите сообщение'}
        onChange={textChange}
      />
      <button className={style.form__button} onClick={sendForm}>
        Отправить
      </button>
    </form>
  );
};

export default Form;
