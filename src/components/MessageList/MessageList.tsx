import React, { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import style from './messages.module.scss';
import { Messages } from 'src/types';

interface MessageListProps {
  messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List className={style.block}>
      {messages.map((item) => {
        return (
          <ListItem key={item.id} data-testid={'blockMessage'}>
            {item.author} : {item.text}
          </ListItem>
        );
      })}
    </List>
  );
};
