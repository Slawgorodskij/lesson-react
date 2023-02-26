import React, { FC, useState } from 'react';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import style from './Sidebar.module.css';

export const Sidebar: FC = () => {
  const [arrayChats] = useState([
    {
      id: 111,
      name: 'О музыке',
    },
    {
      id: 112,
      name: 'О семье',
    },
    {
      id: 113,
      name: 'О работе',
    },
    {
      id: 114,
      name: 'О здоровье',
    },
    {
      id: 115,
      name: 'О любви',
    },
  ]);
  return (
    <List className={style.block}>
      {arrayChats.map((item) => {
        return (
          <ListItemIcon key={item.id}>
            <InboxIcon />
            <ListItemText primary={item.name} />
          </ListItemIcon>
        );
      })}
    </List>
  );
};
