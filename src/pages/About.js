import React from "react";
import me from "./assets/me.jpg";
import githubIcon from "./assets/github.webp";
import linkedinIcon from "./assets/linkedin.png";
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
            <img src={githubIcon} style={{width:50}}/>
          </a>
          <a href="https://www.linkedin.com/in/lu-rose/">
            <img src={linkedinIcon} style={{width:50}}/>
          </a>
          <p id='takk'>[ Takk til Andreas fra Iterate for masse hjelp ]</p>
        </div>
    </div>
    </div>
  );
}
