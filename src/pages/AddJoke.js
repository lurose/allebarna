import React, { isValidElement } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import "./AddJoke.css";
import emojiTears from "./assets/emojiTears.png";
import emojiHeart from "./assets/emojiHeart.png";
import emojiTongue from "./assets/emojiTongue.png";

export function AddJoke() {
  const [joke, setJoke] = React.useState("");
  const [jokeName, setJokeName] = React.useState("");
  const [jokeIsSaved, setJokeIsSaved] = React.useState(false);

  React.useEffect(() => {
    console.log("jokeIsSaved", jokeIsSaved);
  }, [jokeIsSaved]);

  function handleSaveJoke() {
    handleValidation();
    
    if(jokeIsSaved) {
    // hvis vi ikke får noen jokes så setter vi den til ett tomt array
    const currentJokes = getFromLocalStorage("jokes") || [];

    // "...currentJokes" lager ett kopi av array'et vi har fra før av
    // kalles en spread operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    
    console.log('lagret?? JA');
    saveToLocalStorage("jokes", [
      ...currentJokes,
      { joke: joke, name: jokeName },
    ]);
    }

    // vi nullstiller feltene
    setJoke("");
    setJokeName("");
    console.log('vært innom her!')

    //setJokeIsSaved(true);
  }

  function handleValidation() {
    setJokeIsSaved(true);
    //Sjekker om input er gyldig..
    if(!joke || !jokeName) {
      setJokeIsSaved(false);
      console.log('Kan ikke være tom');
    }
    if(!jokeName.match(/^[A-Za-z]+$/)) {
        setJokeIsSaved(false);
        console.log('Bare bokstaver er gyldig');
    }
    else if(!joke.includes('Alle barna')) {
      setJokeIsSaved(false);
      console.log('Ikke gyldig alle barna vits');
    }
  }

  return (
    <div>
      <div className='AddJoke'>
        <h1 className='title'>Legg inn vitser her</h1>
        <img src={emojiTears} style={{width:100}}/>
        <img src={emojiHeart} style={{width:100}}/>
        <img src={emojiTongue} style={{width:100}}/>
        <label>
          Navn: 
          <input
            type="text"
            value={jokeName}
            onChange={(event) => setJokeName(event.target.value)}
            placeholder="Navn i vitsen.."
          />
        </label>

        <label>
          Vits:
          <textarea
            type="text"
            value={joke}
            onChange={(event) => setJoke(event.target.value)}
            placeholder="Selve vitsen.."
          />
        </label>
        <button onClick={() => handleSaveJoke()}>
          Lagre vits
        </button>
      </div>
      {jokeIsSaved && (
        <div>
          Woop woop, vitsen din er lagret!{" "}
          <button onClick={() => setJokeIsSaved(false)}>Ok</button>
        </div>
      )}
    </div>
  );
}
