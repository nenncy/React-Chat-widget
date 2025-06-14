// import react from 'react';
// import './chatwidget.css'; // Assuming you have a CSS file for styling


// const ChatWidget = ({ title = 'Chat', messages = [], onUserMessage }) => {
    //     // const [messages, setMessages] = useState([]);
    //     const [input, setInput] = useState('');
    //     const [isOpen, setIsOpen] = useState(false);
    
    //     const sendMessege = (message) => {
//         if (message.trim() === "") {
    //             return;
    //         }
    //         // setMessages([...messages, message]);
    //         onUserMessage(message);
    //         setInput('');
    //     }
    
    //     return (
        //         <>
        //             <div
        //                 className="chat-toggle-btn"
        //                 onClick={() => setIsOpen(true)}
        //             // title={isOpen ? 'Close Chat' : 'Open Chat'}
        //             >
        //                 💬
        //             </div>
        //             {isOpen && (
            //                 <div className="chat-widget">
            //                     <div className="chat-header">
            //                         <h2>Chat with us!</h2>
            //                         <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
            //                     </div>
            //                     <div className="messages">
            //                         {messages.map((msg, i) => (
                //                             <div
                //                                 key={i}
                //                                 className={`message ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`} >
                //                                 <p>{msg.text}</p>
//                             </div>
//                         ))}

//                     </div>
//                     <div className="chat-input">
//                         <input
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Type your message here..."
//                             onKeyDown={(e) =>
    //                                 e.key === 'Enter' && sendMessege(input)}
    //                         />
    //                         <button onClick={() => {
        //                             sendMessege(input);
        //                         }}>Send</button>
        //                     </div>
        //                 </div>)
        //             }
        //         </>
        //     );
        // }
import React from 'react';
       
import { useState, useEffect } from 'react';
        
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