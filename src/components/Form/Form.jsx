import React, {useState} from 'react';
import style from './form.module.css';
import {AUTHOR} from 'src/constans'
import {Button} from "./components/Button";
import {MyInput} from "./components/MyInput";

export const Form = ({addMessage}) => {
    const [text, setText] = useState('');

    const textChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text !== '') {
            addMessage({
                id: Date.now(),
                author: AUTHOR.user,
                text: text,
            });
            setText(() => '');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={style.form}
        >
            <MyInput value={text} placeholder={'Введите сообщение'} textChange={textChange}/>
            <Button label={'Отправить'} disabled={!text}/>
        </form>
    );
};