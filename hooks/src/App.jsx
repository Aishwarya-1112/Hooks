import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import Useref from "./components/Useref";
import UseMemo from "./components/UseMemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState />
      <UseEffect />
      <Useref />
      <UseMemo />
    </>
  );
}

export default App;
