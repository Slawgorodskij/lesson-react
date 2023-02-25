 import React from 'react';
 import style from './messages.module.scss';

export const Messages = ({messages}) => {
    return (
        <div className={style.block}>
            {messages.map((item) => {
                return (
                    <div key={item.id} data-testid={'blockMessage'}>
                        <p>
                            <span>{item.author}</span> {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
