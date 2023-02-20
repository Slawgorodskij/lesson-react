import React from 'react';
import style from './messages.module.css';

export const Messages = ({ messages }) => {
  return (
    <div className={style.block}>
      {messages.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <span>{item.author}</span> {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};