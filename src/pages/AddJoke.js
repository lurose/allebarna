import React, { isValidElement } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import "./AddJoke.css";
import emojiTears from "./assets/emojiTears.png";
import emojiHeart from "./assets/emojiHeart.png";
import emojiTongue from "./assets/emojiTongue.png";

export function AddJoke() {
  const [joke, setJoke] = React.useState('');
  const [jokeName, setJokeName] = React.useState('');
  const [jokeIsSaved, setJokeIsSaved] = React.useState(false);
  const [jokeError, setJokeError] = React.useState('');
  const [jokeNameError, setJokeNameError] = React.useState('');

  React.useEffect(() => {
    console.log("jokeIsSaved", jokeIsSaved);
  }, [jokeIsSaved]);

  function handleSaveJoke() {
    if(handleValidation()){
    // hvis vi ikke får noen jokes så setter vi den til ett tomt array
      const currentJokes = getFromLocalStorage("jokes") || [];

    // "...currentJokes" lager ett kopi av array'et vi har fra før av
    // kalles en spread operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    
      saveToLocalStorage("jokes", [
        ...currentJokes,
        { joke: joke, name: jokeName },
      ]);
      setJokeIsSaved(true);
    }

    // vi nullstiller feltene
      setJoke("");
      setJokeName("");
  }

  function handleValidation() {
    if(!joke || !jokeName) {
      if(!joke && !jokeName) {
        setJokeNameError('Et blankt navn? Noe stemmer ikke..');
        setJokeError('Dette er vel ikke en alle barna vits?');
      }
      else if(!jokeName){
        setJokeNameError('Et blankt navn? Prøv igjen!');
        setJokeError('');
      }
      else if(!joke) {
        setJokeName('Dette er vel ikke en alle barna vits?');
        setJokeNameError('');
      }
      return false;
    }
    else if(!jokeName.match(/^[A-Za-z]+$/)) {
      setJokeNameError('Kun gyldig med navn som består av bokstaver');
      setJokeError('');
      return false;
    }
    else if(!joke.includes('Alle barna')) {
      setJokeError('Vits har feil format. Må starte med "Alle barna"');
      setJokeNameError('');
      return false;

    }
    
    setJokeNameError('');
    setJokeError('');
    return true;
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
          {jokeNameError && 
            <div className='jokeNameError'>{jokeNameError}</div>
          }
        </label>

        <label>
          Vits:
          <textarea
            type="text"
            value={joke}
            onChange={(event) => setJoke(event.target.value)}
            placeholder="Selve vitsen.."
          />
          {jokeError && 
            <div className='jokeError'>{jokeError}</div>
          }
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
