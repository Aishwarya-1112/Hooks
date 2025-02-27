import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slow(number);
  }, [number]);

  const style = {
    background: dark ? "white" : "black",
    color: dark ? "black" : "white",
  };
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => setDark((prev) => !prev)}>toggle</button>
      <h3 style={style}>{doubleNumber}</h3>
    </div>
  );
};

function slow(num) {
  for (let i = 0; i <= 1000000000; i++) return num * 2;
}

export default UseMemo;

// import React, { useMemo } from 'react';

// const ExpensiveComputation = () => {
//   // Simulating an expensive computation
//   const computeValue = () => {
//     console.log('Expensive computation running...');
//     return 42; // Result of an expensive computation
//   };

//   // Using useMemo to memoize the result of the computation
//   const memoizedValue = useMemo(computeValue, []); // Empty dependency array

//   return (
//     <div>
//       <h1>Memoized Value: {memoizedValue}</h1>
//     </div>
//   );
// };

// export default ExpensiveComputation;
