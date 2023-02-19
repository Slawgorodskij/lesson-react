import './App.css';
import {useEffect, useState} from "react";
import Form from "components/Form/Form";
import Messages from "components/Messages/Messages";

function App() {
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        let lastMessage = messageList[messageList.length - 1];

        if (lastMessage && lastMessage.author !== 'Ваш любимый бот') {
            const message = {
                'text': `${lastMessage.author} написал новое сообщение`,
                'author': 'Ваш любимый бот',
            }
            setTimeout(() => {
                setMessageList((arrayMessage) => [...arrayMessage, message]);
            }, 1500)

        }
    }, [messageList])
    return (
        <div className="App">
            <Messages messages={messageList}/>
            <Form addMessage={setMessageList}/>
        </div>
    );
}

export default App;
