import React from "react";
import me from "./assets/me.jpg";
import icon from "./assets/github.webp";
import "./About.css";



export function About() {
  return (
    <div>
    <div className='container'>
        <div className='picture'>
          <img src={me} style={{ width:250 }}/>
        </div>
        <div className='item'>
          <h1>Hei, jeg er </h1>
          <h1 className='name'>Rose</h1>
          <h2>KYBERNETIKKSTUDENT VED NTNU</h2>
          <p>Dette er mitt første møte med React og Frontend</p>
          <a href="https://github.com/lurose/allebarna">
            <img src={icon} style={{width:50}}/>
          </a>
        </div>
    </div>
    </div>
  );
}
