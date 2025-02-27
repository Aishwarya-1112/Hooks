import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");

  useEffect(() => {}, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="enter anything"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <p>{name}</p>
    </div>
  );
};

export default UseEffect;
