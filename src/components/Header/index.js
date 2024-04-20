import React from "react";
import "./header.css";
import brandLogo from "../../images/kav.png";
import lightLogo from "../../images/light.png";
import resume from "../../documents/KaverappaKU_Resume.pdf";

export default function Header() {
  return (
    <div>
      <header class="main-header">
        <nav class="navbar">
          <ul class="menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href={resume}>Resume</a>
            </li>
          </ul>
        </nav>
        <div class="portfoli-logo">
          <img src={brandLogo} className="logo-image" />
        </div>
        <div class="contact-button">
          <form action="#contact-me">
            <button type="submit" class="contact">
              Contact
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}
