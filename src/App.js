import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker'
import {db, useDB} from './db';

function App() {
  const messages = useDB()
  const [username, setUsername] = useState(
    localStorage.getItem('username') || '') 

  return <div className="App">
    <header className = 'header'>
      <div className = 'brand'>
        <div className = 'logo' />
          Chatter
      </div>
      <NamePicker saveName = {setUsername}/>
    </header>
    
    <main className = 'messages'>
      {messages.map((msg, i)=> {
        const isMe = msg.name===username
        return <Message key = {i} {...msg} isMe={isMe} />
      })}
    </main>

    <TextInput 
      send={(t)=> db.send({text:t, name:username, ts: new Date()})}
    />
  </div>
}

export default App;
