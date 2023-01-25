import './App.css';
import {Message} from "./Message";

function App() {
    const title = 'ТЯЖЕЛО В УЧЕНИИ ЛЕГКО В БОЮ';
    const text = 'ни шагу назад';
  return (
    <div className="App">
      <header className="App-header">
            <Message title={title} text={text}/>
      </header>
    </div>
  );
}

export default App;
