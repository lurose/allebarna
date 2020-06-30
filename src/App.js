import React from 'react';
import './App.css';
import children from "./clipart-children.png";

function App() {
  const [vitsIndex,setVitsIndex] = React.useState(0)
  const [name,setName] = React.useState("")
  
  function getJokeFromName(name) {
    const jokesWithCorrectName = vitser.filter(vits =>
      vits.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return jokesWithCorrectName;
  }
  
  
  
  function handleJokeClick(direction) {
    if(direction === "next"){
      const getJokeFromNameLength = getJokeFromName(name).length;
      if(vitsIndex<getJokeFromNameLength.length-1){
        setVitsIndex(vitsIndex+1)
      }
      else {
        if(vitsIndex>0)
        setVitsIndex(vitsIndex-1)
      }
    }
  }

  return (
    <div className="App">
      <header>Om meg</header>
      <h1 className="title">Alle barna vitser</h1>
      <img src={children}/>
      <input type="text" placeholder="Navnet ditt.." value={name} onChange={(event) => setName(event.target.value)}/>
      {name && (
        <div>
          <p className="vitser">{getJokeFromName(name)[vitsIndex]}</p>
          <button onClick={() => handleJokeClick("next")}>Neste vits</button>
        </div>
      )}
      <h2>{name}</h2>
      <footer>Laget av Rose Lu</footer>
    </div>
  );
}

const vitser = [
  {
    joke: "Alle barna brukte kondom unntatt Henning, han brukte presenning.",
    name: "Henning"
  },
  {
    joke: "Alle barna kom ut fra kinoen unntatt Tord, han var blitt utsatt for mord.",
    name: "Tord"
  },
  {
    joke: "Alle barna tittet inn i mikrobølgovnen, unntatt Tord, han tittet ut.",
    name: "Tord"
  },
  {
    joke: "Alle barna så på mikrobølgovnen unntatt Minni, hun lå inni.",
    name: "Minni"
  },
  {
    joke: "Alle barna stekte pølser unntatt Lill, hun var grill.",
    name: "Lill"
  }
]

const vitser2 = [
  "Alle barna brukte kondom unntatt Henning, han brukte presenning.",
  "Alle barna kom ut fra kinoen unntatt Tord, han var blitt utsatt for mord.",
  "Alle barna tittet inn i mikrobølgovnen, unntatt Knut, han tittet ut.",
  "Alle barna så på mikrobølgovnen unntatt Minni, hun lå inni.",
  "Alle barna stekte pølser unntatt Lill, hun var grill.",
  "Alle barna våknet om morgenen unntatt Finn, han sovnet stille inn.",
  "Alle barna røykte Prince unntatt Anna, hun røykte marihuana.",
  "Alle barna likte maten unntatt Ella, hun fikk salmonella.",
  "Alle barna fikk brus i begravelsen unntatt Frans, han fikk en krans.",
  "Alle barna hadde fornøyde foreldre unntatt Morten, han var født før aborten.",
  "Alle barna gikk på skøyter unntatt Hanne, hun gikk i vannet.",
  "Alle barna gikk med lue unntatt Frode, han hadde ikke hode.",
  "Alle barna kom hjem fra festen unntatt Marta, hun var fin i farta.",
  "Alle barna kjørte Volvo unntatt Ada, hun kjørte Lada.",
  "Alle barna lekte med motorsag unntatt Svein, han var grein.",
  "Alle barna spilte fotball unntatt Frode, det var hans hode.",
  "Alle barna spilte dataspill unntatt Janett, hun var diskett.",
  "Alle barna var ganske pripene unntatt Vivian, hun syntes alt gikk an.",
  "Alle barna hadde kjærester unntatt Kent, han var impotent.",
  "Alle barna var snille og pene unntatt Erika, hun var helt frika.",
  "Alle barna spilte volleyball unntatt Dennis han spilt lommetennis.",
  "Alle barna kom trygt hjem fra Bergen unntatt Even han ble kidnappet av Greven.",
  "Alle barna tegnet en apekatt unntatt Kjell han satt modell.",
  "Alle barna hadde meg seg drikke unntatt Andrea hun hadde vann i knea.",
  "Alle barna hadde venner unntatt Karl han var kannibal.",
  "Alle barna danset lambda unntatt Gunvor Hals hun danset vals",
  "Alle barna dro og hogg tømmer unntatt Helle, det var henne de skulle felle.",
  "Alle barna tok toget til Bergen unntatt Sol, hun datt av på Gol.",
  "Alle barna lekte med påleggsmaskinen unntatt Iver, han kom ut i skiver.",
  "Alle barna stekte kjøttkaker unntatt Hanne, hun var stekepanne.",
  "Alle barna satt stille i timen unntatt Jon, han hadde ereksjon.",
  "Alle barna fulgte med i timen unntatt Sten, han var schizofren.",
  "Alle barna likte jenter unntatt Einar, han likte Steinar.",
  "Alle barna lekte gynekolog unntatt Britt, det var hennes skritt.",
  "Alle barna kom hjem fra påsketur unntatt Tine, hun ble tatt av en lavine.",
  "Alle barna klatret i trærne unntatt Finn, han hadde muskelsvinn.",
  "Alle barna hadde sugerør unntatt Torkel han hadde snorkel.",
  "Alle barna hadde migrene unntatt Frode det var han som slo dem i hodet.",
  "Alle barna sang vakkert unntatt Paula hu bare gaula."
  ]

export default App;

