import React from "react";

export default function Header() {
  return (
    <div>
      <header class="main-header">
        <div class="hamburger"></div>
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
              <a href="/documents/CV.pdf">CV</a>
            </li>
          </ul>
        </nav>
        <div class="portfoli-logo"></div>
        <div class="contact-button">
          <form action="#contact-me">
            <button type="submit" class="contact">
              Contact
            </button>
          </form>
          <div class="modes"></div>
        </div>
      </header>
    </div>
  );
}