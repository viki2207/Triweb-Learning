import React, { useRef, useState } from "react";
import "./contact.css";
import shahnet from "../../assets/shahnetlogo.jpeg";
import triwebapi from "../../assets/triwebapilogo.jpeg";
import knowledgehut from "../../assets/knowledgehutlogo.png";
import medtechit from "../../assets/webleonz.jpg";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/Linkedin.png";

import InstagramIcon from "../../assets/instagram.png";
//send email lib before that install  npm install @emailjs/browser --save
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formState, setFromState] = useState({
    your_name: "",
    your_email: "",
    Your_message: "",
  });

  const form = useRef();
  //Send email function

  const changeHandler = (event) => {
    setFromState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    //https://app.elasticemail.com/ and using https://smtpjs.com/
    event.preventDefault();
    const config = {
      SecureToken: "2c8a1755-2392-4797-ab3c-9e9ba0a09ca9",
      To: formState.your_email,
      From: "shahvidhi1995@gmail.com",
      Subject: "This is my Contact Form",
      Body: `${formState.Your_message}`,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("Email sent successfully"));
    }
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies...
        </p>
        <div className="clientImgs">
          <img src={shahnet} alt="client" className="clientImg" />
          <img src={medtechit} alt="client" className="clientImg" />
          <img src={knowledgehut} alt="client" className="clientImg" />
          <img src={triwebapi} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        {/* onSubmit={sendEmail} */}
        {/* ref for email */}
        {/* contactForm */}
        <div>
          <from action="contactForm" onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                name="your_name"
                value={formState.your_name || ""}
                onChange={changeHandler}
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="email"
                placeholder="Your Email"
                name="your_email"
                value={formState.your_email || ""}
                onChange={changeHandler}
              ></input>
            </div>
            <div>
              <textarea
                name="Your_message"
                rows="5"
                placeholder="Your Message"
                className="msg"
                value={formState.Your_message || ""}
                onChange={changeHandler}
              ></textarea>
            </div>
            <div>
              {/* <input type="submit" value="Send" className="submitBtn" /> */}
              <button
                type="submit"
                value="Send"
                className="submitBtn"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
            <div className="links">
              <a
                href="https://www.facebook.com/shahvidhi.jayeshbhai"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookIcon} alt="Facebook" className="link"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/vidhi-shah-855556119"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={TwitterIcon} alt="Twitter" className="link"></img> */}
                <img src={LinkedinIcon} alt="Linkedin" className="link"></img>
              </a>
              <a
                href="https://www.instagram.com/vdsh2207/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram" className="link"></img>
              </a>
            </div>
          </from>
        </div>
      </div>
    </section>
  );
};

export default Contact;
