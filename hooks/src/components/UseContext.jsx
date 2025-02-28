import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

// Create a Context
const MessageContext = createContext();

// Parent component using context
function UseContext() {
  const [message, setMessage] = useState("");

  // Callback function to update the message
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, handleMessageChange }}>
      <div>
        <h1>Message from Child: {message}</h1>
        <Child />
      </div>
    </MessageContext.Provider>
  );
}

// Child component consuming the context
function Child() {
  // Use the context to get the current message and the callback function
  const { handleMessageChange } = useContext(MessageContext);

  const sendMessage = () => {
    handleMessageChange("Hello from the Child using Context!");
  };

  return (
    <div>
      <button onClick={sendMessage}>
        Send Message to Parent (via Context)
      </button>
    </div>
  );
}

export default UseContext;
