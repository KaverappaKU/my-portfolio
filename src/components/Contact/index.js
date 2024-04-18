import { useEffect } from "react";
import React from "react";
import "./contact.css";

export default function Contact() {
  useEffect(() => {});
  return (
    <div>
      <section class="contact-me" id="contact-me">
        <div class="contact-heading">
          <h1>Let's get in touch</h1>
        </div>
        <div class="contact-form">
          <div class="fname">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your First Name"
            />
          </div>
          <div class="lname">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your Last Name"
            />
          </div>
          <div class="email">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          <div class="message">
            <label id="message">Message</label>
            <textarea
              id="messages"
              name="message"
              placeholder="Enter your Message"
            ></textarea>
          </div>
        </div>
        <div class="send-button">
          <button class="submit" type="submit">
            Send
          </button>
        </div>
      </section>
    </div>
  );
}
