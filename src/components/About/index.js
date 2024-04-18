import React from "react";
import "./about.css";
import profilePic from "../../images/profile-pic.png";

export default function About() {
  return (
    <div>
      <section class="about-me" id="about-me">
        <div class="profile-picture">
          <img
            src={profilePic}
            alt="profile picture of Kaverappa with a black background"
          />
        </div>
        <div class="about-me-content">
          <h1>Hi, I’m Kaverappa Web Developer</h1>
          <p>
            Forward-thinking Software Engineer with background working
            productively in dynamic environments.
          </p>
          <p>
            Fluent in Python and Shell programming languages used to develop
            software. Javascript lover and interested in Front-end development.
          </p>
          <p>
            Problem Solver, well-organised, loyal employee and proud team player
            focused on achieving project objectives with speed and accuracy.
          </p>
        </div>
      </section>
    </div>
  );
}
