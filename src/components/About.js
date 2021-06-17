import React from "react";
import Links from "./Links";


function About(props) {

  function showOrNah() {
    if(props.biography && props.biography.length > 1) {
      return <p>{props.biography}</p>
    }
    else {
      return null;
    }
  }
  
 
  return (
    <div id="about">
      <h2>About Me</h2>
      {showOrNah()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links hubLink = {props.links.github} denLink = {props.links.linkedin} />
    </div>
  );
}

export default About;
