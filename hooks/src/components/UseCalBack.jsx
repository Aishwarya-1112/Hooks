import React, { useState } from "react";
import ReactDOM from "react-dom";

// Renamed function to UseCallBack
function UseCallBack() {
  const [message, setMessage] = useState("");

  // Callback function to handle message change
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      {/* Pass callback function as prop */}
      <Child onMessageChange={handleMessageChange} />
    </div>
  );
}

function Child({ onMessageChange }) {
  const sendMessage = () => {
    // Invoke the callback function passed from parent
    onMessageChange("Hello from the Child!");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message to Parent</button>
    </div>
  );
}

export default UseCallBack;
// import React, { useState } from "react";

// const UseCalBack = () => {
//   const [number, setNumber] = useState("");
//   const [dark, setDark] = useState(false);

//   const getItems = () => {
//     return [num + 1, num + 2, num + 3];
//   };
//   const theme = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? " white" : "dark",
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={number}
//         placeholder="Enter number"
//       />
//     </div>
//   );
// };

// export default UseCalBack;
