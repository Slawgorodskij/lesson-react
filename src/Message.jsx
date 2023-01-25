import React from 'react';

export const Message = ({ title, text }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{text}</h2>
        </div>
    );
};

