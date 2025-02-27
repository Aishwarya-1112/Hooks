import React, { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((incre) => incre + 1);
  };
  const decrement = () => {
    setNumber((decre) => decre - 1);
  };

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseState;
