import { Link, Router } from "@reach/router";
import React from "react";
import "./App.css";
import { About } from "./pages/About";
import { AddJoke } from "./pages/AddJoke";
import { Home } from "./pages/Home";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/localStorage";

export function App() {
  // Denne funksjoen kjører når appen starter
  // det jeg gjør her er å først sjekker om
  // "jokes" finnes på datamaskinen din
  // hvis det ikke finnes lagrer jeg "defaultJokes"
  React.useEffect(() => {
    const jokesExits = getFromLocalStorage("jokes");

    if (!jokesExits) {
      saveToLocalStorage("jokes", defaultJokes);
    }
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Hjem</Link>
        <Link to="/legg-til-vits">Legg til vits</Link>
        <Link to="/om-meg">Om meg</Link>
      </header>

      <Router>
        <Home path="/" />
        <About path="om-meg" />
        <AddJoke path="legg-til-vits" />
      </Router>

      <footer>Laget av Rose Lu</footer>
    </div>
  );
}

const defaultJokes = [
  {
    joke: "Alle barna brukte kondom unntatt Henning, han brukte presenning.",
    name: "Henning",
  },
  {
    joke:
      "Alle barna kom ut fra kinoen unntatt Tord, han var blitt utsatt for mord.",
    name: "Tord",
  },
  {
    joke:
      "Alle barna tittet inn i mikrobølgovnen, unntatt Knut, han tittet ut.",
    name: "Tord",
  },
  {
    joke: "Alle barna så på mikrobølgovnen unntatt Minni, hun lå inni.",
    name: "Minni",
  },
  {
    joke: "Alle barna stekte pølser unntatt Lill, hun var grill.",
    name: "Lill",
  },
  {
    joke: "Alle barna våknet om morgenen unntatt Finn, han sovnet stille inn",
    name: "Finn",
  },
  {
    joke: "Alle barna sang vakkert unntatt Paula hu bare gaula.",
    name: "Paula",
  },
  {
    joke: "Alle barna brukte kondom unntatt Henning, han brukte presenning.",
    name: "Henning",
  },
  {
    joke: "Alle barna kom ut fra kinoen unntatt Tord, han var blitt utsatt for mord.",
    name: "Tord",
  },
  {
    joke:
      "Alle barna tittet inn i mikrobølgovnen, unntatt Knut, han tittet ut.",
    name: "Knut",
  },
  {
    joke: "Alle barna så på mikrobølgovnen unntatt Minni, hun lå inni.",
    name: "Minni",
  },
  {
    joke: "Alle barna stekte pølser unntatt Lill, hun var grill.",
    name: "Lill",
  },
  {
    joke: "Alle barna våknet om morgenen unntatt Finn, han sovnet stille inn.",
    name: "Finn",
  },
  {
    joke: "Alle barna røykte Prince unntatt Anna, hun røykte marihuana.",
    name: "Anna",
  },
  {
    joke: "Alle barna likte maten unntatt Ella, hun fikk salmonella.",
    name: "Ella",
  },
  {
    joke: "Alle barna fikk brus i begravelsen unntatt Frans, han fikk en krans.",
    name: "Frans",
  },
  {
    joke: "Alle barna hadde fornøyde foreldre unntatt Morten, han var født før aborten.",
    name: "Morten",
  },
  {
    joke: "Alle barna gikk på skøyter unntatt Hanne, hun gikk i vannet.",
    name: "Hanne",
  },
  {
    joke: "Alle barna gikk med lue unntatt Frode, han hadde ikke hode.",
    name: "Frode",
  },
  {
    joke: "Alle barna kom hjem fra festen unntatt Marta, hun var fin i farta.",
    name: "Marta",
  },
  {
    joke: "Alle barna kjørte Volvo unntatt Ada, hun kjørte Lada.",
    name: "Ada",
  },
  {
    joke: "Alle barna lekte med motorsag unntatt Svein, han var grein.",
    name: "Svein",
  },
  {
    joke: "Alle barna spilte fotball unntatt Frode, det var hans hode.",
    name: "Frode",
  },
  {
    joke: "Alle barna spilte dataspill unntatt Janett, hun var diskett.",
    name: "Janett",
  },
  {
    joke: "Alle barna var ganske pripene unntatt Vivian, hun syntes alt gikk an.",
    name: "Vivian",
  },
  {
    joke: "Alle barna hadde kjærester unntatt Kent, han var impotent.",
    name: "Kent",
  },
  {
    joke: "Alle barna var snille og pene unntatt Erika, hun var helt frika.",
    name: "Erika",
  },
  {
    joke: "Alle barna dro og hogg tømmer unntatt Helle, det var henne de skulle felle.",
    name: "Helle",
  },
  {
    joke: "Alle barna tok toget til Bergen unntatt Sol, hun datt av på Gol.",
    name: "Sol",
  },
  {
    joke: "Alle barna lekte med påleggsmaskinen unntatt Iver, han kom ut i skiver.",
    name: "Iver",
  },
  {
    joke: "Alle barna stekte kjøttkaker unntatt Hanne, hun var stekepanne.",
    name: "Hanne",
  },
  {
    joke: "Alle barna satt stille i timen unntatt Jon, han hadde ereksjon.",
    name: "Jon",
  },
  {
    joke: "Alle barna fulgte med i timen unntatt Sten, han var schizofren.",
    name: "Sten",
  },
  {
    joke: "Alle barna likte jenter unntatt Einar, han likte Steinar.",
    name: "Einar",
  },
  {
    joke: "Alle barna lekte gynekolog unntatt Britt, det var hennes skritt.",
    name: "Britt",
  },
  {
    joke:
      "Alle barna kom hjem fra påsketur unntatt Tine, hun ble tatt av en lavine.",
    name: "Tine",
  },
  {
    joke: "Alle barna klatret i trærne unntatt Finn, han hadde muskelsvinn.",
    name: "Finn",
  },

  {
    joke: "Alle barna spilte volleyball unntatt Dennis, han spilt lommetennis.",
    name: "Dennis",
  },
  {
    joke:
      "Alle barna kom trygt hjem fra Bergen unntatt Even, han ble kidnappet av Greven.",
    name: "Even",
  },
  {
    joke: "Alle barna tegnet en apekatt unntatt Kjell, han satt modell.",
    name: "Kjell",
  },

  {
    joke:
      "Alle barna hadde meg seg drikke unntatt Andrea, hun hadde vann i knea.",
    name: "Andrea",
  },
  {
    joke: "Alle barna hadde venner unntatt Karl, han var kannibal.",
    name: "Karl",
  },
  {
    joke: "Alle barna danset lambda unntatt Gunvor Hals, hun danset vals",
    name: "Gunvor Hals",
  },

  {
    joke: "Alle barna hadde sugerør unntatt Torkel, han hadde snorkel.",
    name: "Torkel",
  },
  {
    joke:
      "Alle barna hadde migrene unntatt Frode det var, han som slo dem i hodet.",
    name: "Frode",
  },
  {
    joke: "Alle barna sang vakkert unntatt Paula, hu bare gaula.",
    name: "Paula",
  },
];
