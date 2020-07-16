import React from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import children from "./clipart-children.png";
import "./Home.css";

export function Home() {
  const [name, setName] = React.useState("");
  const [buttonClick, setButtonClick] = React.useState(false);
  React.useEffect(() => {
    setButtonClick(false);
  }, [name, setButtonClick]);

  function getJokeFromName(name) {
    const jokes = getFromLocalStorage("jokes");
    const jokesWithCorrectName = jokes.filter(
      (vits) => vits.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    return jokesWithCorrectName;
  }

  return (
    <div className="Home">
      <h1 className="title">Alle barna vitser</h1>
      <img src={children} alt="" />

      {buttonClick && name && (
        <div>
          <p className="vitser">
            {getJokeFromName(name)[0]?.joke ||
              `Ingen vitser med ${name} tilgjengelig..`}
          </p>
        </div>
      )}
      <div className="Input">
      <input
        type="text"
        placeholder="Navnet ditt.."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setButtonClick(!buttonClick)}>
        Gi meg en vits
      </button>
      </div>
    </div>
  );
}
