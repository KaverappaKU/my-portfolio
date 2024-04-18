import React from "react";
import "./intro.css";
import wdLogo from "../../images/WD.png";

export default function Introduction() {
  return (
    <div>
      <section class="intro">
        <div class="web-dev-intro">
          <h1 class="web-dev">Front-End Developer</h1>
          <p>
            Passionate Front-end developer with a knack for creating intuitive
            and high-performing web applications.{" "}
          </p>
        </div>
        <div class="web-dev-logo">
          <img
            src={wdLogo}
            alt="Image contains closing tags of HTML with code inside the tags"
            height="400"
            width="400"
          />
        </div>
      </section>
    </div>
  );
}
