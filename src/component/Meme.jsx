import React from "react";

export const Meme = () => {
  return (
    <div className="meme__container">
      <form action="">
        <input
          className="meme__input1"
          type="text"
          placeholder="Take my Money"
        />
        <input className="meme__input2" type="text" placeholder="Monkas" />

        <button className="meme__button" type="submit">
          Get a new meme image
        </button>
      </form>
    </div>
  );
};

export default Meme;
