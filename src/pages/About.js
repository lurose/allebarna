import React from "react";
import me from "./me.jpg";
import "./About.css";



export function About() {
  return (
    <div className="About">
        <img src={me} alt="" className="me-pic"/>
        <h1>Jeg er Rose</h1>
        <h1>Kybernetikkstudent ved NTNU</h1>
    </div>
  );
}
