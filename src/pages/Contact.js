import React from "react";
import chair from "../asset/IMG_9529.JPG";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contactContent">
        <div className="text">
          {" "}
          <h1>Contact Us </h1>
          <p style={{ fontWeight: 700 }}>Monday-Friday: 9:00am - 5:00pm</p>
          <p style={{ fontWeight: 700 }}>
            Email us : chic_daily@customers.com.tw
          </p>
          <hr></hr>
          <label htmlFor="name">Name</label>
          <input
            className="name"
            type="text"
            placeholder="Please type your name"
          />
          <label htmlFor="email">E-mail</label>
          <input
            className="email"
            type="e-mail"
            placeholder="Please type your e-mail"
          />{" "}
          <label htmlFor="question">Comments/Questions</label>
          <br />
          <textarea
            className="question"
            type="text"
            placeholder="Any question ?"
            rows="4"
          />
          <button>Submit</button>
        </div>
        <div
          className="leftImage"
          style={{ backgroundImage: `url(${chair})` }}
        ></div>
      </div>
    </div>
  );
}

export default Contact;
