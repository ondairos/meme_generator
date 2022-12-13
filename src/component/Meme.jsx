import React from "react";
import memesData from "../memesData.js"

export const Meme = () => {
  return (
    <div className="meme__container">
        <input
          className="meme__input1"
          type="text"
          placeholder="Take my Money"
        />
        <input className="meme__input2" type="text" placeholder="Monkas" />

        <button className="meme__button" type="submit">
          Get a new meme image
        </button>
    </div>
  );
};

export default Meme;
