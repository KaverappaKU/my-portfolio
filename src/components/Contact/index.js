import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <section className="contact-me" id="contact-me">
        <div className="contact-heading">
          <h1>Let's get in touch</h1>
        </div>
        <form
          action="mailto:caakash357@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div className="contact-form">
            <div className="fname">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="lname">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter your Last Name"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="send-button">
            <button className="submit" type="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
