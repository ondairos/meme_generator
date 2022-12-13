import React from "react";

export const Meme = () => {
  return (
    <div className="meme__container">
      <input className="meme__input1" type="text" value={"Take my Money"} />
      <input className="meme__input2" type="text" value={"Monkas"} />

      <div className="meme_buttonContainer">
        <button className="meme__button" type="submit">
          Get a new meme image
        </button>
      </div>
    </div>
  );
};

export default Meme;
