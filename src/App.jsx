import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Meme from "./component/Meme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main__container">
        <Meme />
      </div>
    </>
  );
}

export default App;
