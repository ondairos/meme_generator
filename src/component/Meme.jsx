import React from "react";
import memesData from "../memesData.js";

export const Meme = () => {
  const [meme, setMeme] = React.useState({
    // create object
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // state with all the memes
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imageUrl = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imageUrl,
    }));
  }

  return (
    <div className="meme__container">
      <input className="meme__input1" type="text" placeholder="Take my Money" />
      <input className="meme__input2" type="text" placeholder="Monkas" />

      <button className="meme__button" onClick={handleMeme}>
        Get a new meme image
      </button>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme__image" />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>
    </div>
  );
};

export default Meme;
