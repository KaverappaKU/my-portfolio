import React from "react";
import "./skills.css";
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import jsLogo from "../../images/js.png";
import reactLogo from "../../images/react.png";
import figmaLogo from "../../images/figma.png";
import pythonLogo from "../../images/python.png";
import githubLogo from "../../images/github.png";
import vscodeLogo from "../../images/vscode.png";
import shellLogo from "../../images/shell.png";
import linuxLogo from "../../images/linux.png";

export default function Skills() {
  return (
    <div>
      <section class="skills" id="skills">
        <div class="skills-heading">
          <h1>Skills and Experience</h1>
        </div>
        <div class="skills-logo">
          <div class="html">
            <img
              id="html"
              src={htmlLogo}
              alt="black and white logo of html 5"
              height="150"
              width="150"
            />
          </div>
          <div class="css">
            <img
              id="css"
              src={cssLogo}
              alt="black and white logo of CSS"
              height="150"
              width="150"
            />
          </div>
          <div class="js">
            <img
              id="js"
              src={jsLogo}
              alt="black and white logo of Javascript"
              height="150"
              width="150"
            />
          </div>
          <div class="react">
            <img
              id="react"
              src={reactLogo}
              alt="black and white logo of ReactJS"
              height="150"
              width="150"
            />
          </div>
          <div class="figma">
            <img
              id="figma"
              src={figmaLogo}
              alt="black and white logo of Figma"
              height="150"
              width="150"
            />
          </div>
          <div class="python">
            <img
              id="python"
              src={pythonLogo}
              alt="black and white logo of Python"
              height="150"
              width="150"
            />
          </div>
          <div class="github">
            <img
              id="github"
              src={githubLogo}
              alt="black and white logo of GitHub"
              height="150"
              width="150"
            />
          </div>
          <div class="vscode">
            <img
              id="vscode"
              src={vscodeLogo}
              alt="black and white logo of Visual Studio Code"
              height="150"
              width="150"
            />
          </div>
          <div class="shell">
            <img
              id="shell"
              src={shellLogo}
              alt="black and white logo of Shell Programming"
              height="150"
              width="150"
            />
          </div>
          <div class="linux">
            <img
              id="linux"
              src={linuxLogo}
              alt="black and white logo of Linux OS"
              height="150"
              width="150"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
