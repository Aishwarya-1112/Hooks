import React, { useRef, useState } from "react";

const Useref = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="Enter something"
      />
      <button onClick={handleClick}>Show</button>
      <p>{inputValue}</p>
    </div>
  );
};

export default Useref;
