import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Meme from "./component/Meme";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main__container">
        <Meme />
      </div>
      <Footer />
    </>
  );
}

export default App;
