import React from "react";

export const Meme = () => {
  const [meme, setMeme] = React.useState({
    // create object
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3l60ph.jpg",
  });

  // state with all the memes
  const [allMemes, setAllMemes] = React.useState();

  // useEffect hook to get all memes from imgflip api, renders once []
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const imageUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imageUrl,
    }));
  }

  // handle change function as soon as keypresses inside the input we change state with the new value
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  // Computed property names [name] are a useful feature of JavaScript that can make your code more concise and easier to read. They allow you to use a variable as a property name, which can make your code more dynamic and easier to maintain.

  return (
    <div className="meme__container">
      <input
        className="meme__input1"
        type="text"
        placeholder="Insert top line"
        name="topText"
        onChange={handleChange}
        value={meme.topText}
      />
      <input
        className="meme__input2"
        type="text"
        placeholder="Insert bottom line"
        name="bottomText"
        onChange={handleChange}
        value={meme.bottomText}
      />

      <button className="meme__button" onClick={handleMeme}>
        Get a new meme image
      </button>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme__image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
