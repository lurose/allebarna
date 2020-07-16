import React from "react";
import me from "./me.jpg";
import "./About.css";




export function About() {
  return (
    <div className='container'>
        <div className='item'>
          <img src={me} style={{ width:250 }}/>
        </div>
        <div className='item'>
          <h1>Hei! Jeg er Rose</h1>
          <p>Kybernetikkstudent | NTNU</p>
        </div>
    </div>
  );
}
