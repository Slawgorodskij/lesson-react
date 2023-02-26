import './App.css';
import React, {FC, useEffect, useState} from 'react';
import {Form} from 'components/Form';
import {MessageList} from 'components/MessageList';
import {AUTHOR, Message, Messages} from 'src/types';
import {Sidebar} from "components/Sidebar";
import {Grid} from "@material-ui/core";

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
        <Grid container spacing={2}>
            <Grid item xs={2} container>
                <Sidebar/>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <MessageList messages={messageList}/>
                    </Grid>
                    <Grid item>
                        <Form addMessage={addMessage}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
