import logo from './logo.svg';
import './App.css';
// import ChatWidget from './chatWidget';
import { useState } from 'react';
import ChatWidget from 'react-chatify'
// import ChatWidget from './ChatWidget';

function App() {
   const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" }
  ]);
   const handleUserMessage = (msg) => {
    // Append user message
    setMessages(prev => [...prev, { text: msg, sender: 'user' }]);

    // Optionally simulate bot reply after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Thanks for your message!', sender: 'bot' }]);
    }, 1000);
  };
  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to the Chat Widget Demo</h1>
        <ChatWidget
          title="Support"
        messages={messages}
        onUserMessage={handleUserMessage}
          
        />
      </header>
    </div>
  );
}

export default App;
