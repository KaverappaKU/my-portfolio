import React from "react";
import "./footer.css";
import linkedIn from "../../images/linkedin.png";
import gitHub from "../../images/github.png";

export default function Footer() {
  return (
    <div>
      <footer class="footer-wrapper">
        <div class="copyright">&copy;2023 Kaverappa K U</div>
        <div class="social">
          <a href="https://github.com/KaverappaKU">
            <img
              id="git"
              src={gitHub}
              alt="This is a black and white logo of GitHub"
              height="50"
              width="50"
            />
          </a>
          <a href="https://www.linkedin.com/in/kaverappaku/">
            <img
              id="linkedin"
              src={linkedIn}
              alt="This is a black and white logo of LinkedIn"
              height="50"
              width="50"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
