// ✅ Always import React if you're using JSX
import React, { useState } from 'react';
import './chatwidget.css'; // ✅ Make sure this path resolves when built or bundled

const ChatWidget = ({ title = 'Chat', messages = [], onUserMessage }) => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = (message) => {
    if (!message.trim()) return;
    onUserMessage(message);
    setInput('');
  };

  if (typeof onUserMessage !== 'function') {
    console.warn('ChatWidget: Missing required onUserMessage callback.');
    return null;
  }

  return (
    <>
      <div className="chat-toggle-btn" onClick={() => setIsOpen(true)}>💬</div>
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <h2>{title}</h2>
            <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
          </div>
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
