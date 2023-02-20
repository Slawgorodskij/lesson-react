import './App.css';
import {useEffect, useState} from 'react';
import {Form} from 'components/Form';
import {Messages} from 'components/Messages';
import {AUTHOR} from 'src/constans'

function App() {
    const [messageList, setMessageList] = useState([]);
    const addMessage = (newMessage) => {
        setMessageList((prevMessage) => [...prevMessage, newMessage]);
    }
    useEffect(() => {
        let lastMessage = messageList[messageList.length - 1];

        if (lastMessage && lastMessage.author !== AUTHOR.bot) {
            const timeout = setTimeout(() => {
                addMessage({
                    id: Date.now(),
                    text: `${lastMessage.author} написал новое сообщение`,
                    author: AUTHOR.bot,
                });
            }, 1500);
            return () => clearTimeout(timeout)
        }
    }, [messageList]);
    return (
        <div className="App">
            <Messages messages={messageList}/>
            <Form addMessage={addMessage}/>
        </div>
    );
}

export default App;
