# react-chatify

A lightweight, customizable React chat widget.

## Install

```bash
npm install react-chatify
# 🗨️ react-chatify

A lightweight, customizable chat widget for modern React apps — built with zero external React version constraints and fully compatible with **React 17+**.


- 💬 Minimal and elegant chat UI
- 🤖 Easy LLM (Gemini/GPT) integration
- 🛠️ Developer-friendly and customizable

## 📦 Installation

```bash
npm install react-chatify
```

or

```bash
yarn add react-chatify
```

## 🧑‍💻 Basic Usage

```jsx
import React, { useState } from "react";
import ChatWidget from "react-chatify";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything.", sender: "bot" }
  ]);

  const handleUserMessage = async (message) => {
    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    const res = await fetch("/api/geminiChat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
  };

  return (
    <ChatWidget
      title="Ask Me"
      messages={messages}
      onUserMessage={handleUserMessage}
    />
  );
}

export default App;
```

## 📁 File Structure

```
.
├── /src
│   └── ChatWidget.jsx   # Core chat component
├── /lib
│   └── index.js         # Main entry point
└── package.json
```

## 🧪 Local Testing

1. Clone this repo
2. Run:  
   ```bash
   npm install && npm run dev
   ```

## 🔗 Live Demo

Check out a live integration on my portfolio:  
**https://portfolio-eight-orcin-51.vercel.app/**

## 🔗 Check out github:

**https://github.com/nenncy/React-Chat-widget/tree/chatify-react/**

## 🧠 Gemini/LLM Integration (Optional)

You can connect this with any LLM backend (e.g., Gemini, GPT) by sending the user's message to your `/api/` endpoint and returning the response as shown above.



## 📄 License

MIT License – use freely, modify with love.