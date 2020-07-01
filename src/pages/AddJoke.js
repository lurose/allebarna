import React from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export function AddJoke() {
  const [joke, setJoke] = React.useState("");
  const [jokeName, setJokeName] = React.useState("");
  const [jokeIsSaved, setJokeIsSaved] = React.useState(false);

  React.useEffect(() => {
    console.log("jokeIsSaved", jokeIsSaved);
  }, [jokeIsSaved]);

  function handleSaveJoke() {
    if (!joke || !jokeName) {
      alert("Du må skrive inn både vits og navn");
    }
    // hvis vi ikke får noen jokes så setter vi den til ett tomt array
    const currentJokes = getFromLocalStorage("jokes") || [];

    // "...currentJokes" lager ett kopi av array'et vi har fra før av
    // kalles en spread operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    saveToLocalStorage("jokes", [
      ...currentJokes,
      { joke: joke, name: jokeName },
    ]);

    // vi nullstiller feltene
    setJoke("");
    setJokeName("");

    setJokeIsSaved(true);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={jokeName}
          onChange={(event) => setJokeName(event.target.value)}
          placeholder="Navn i vitsen"
        />
        <input
          type="text"
          value={joke}
          onChange={(event) => setJoke(event.target.value)}
          placeholder="Skriv vits her"
        />
        <button onClick={() => handleSaveJoke()}>Lagre vits</button>
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
