import React, { useRef } from "react";
import "./contact.css";
import shahnet from "../../assets/shahnetlogo.jpeg";
import triwebapi from "../../assets/triwebapilogo.jpeg";
import knowledgehut from "../../assets/knowledgehutlogo.png";
import medtechit from "../../assets/medtechitlogo.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedinIcon from "../../assets/Linkedin.png";

import InstagramIcon from "../../assets/instagram.png";
//send email lib before that install  npm install @emailjs/browser --save
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  //Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkfmj0ux",
        "template_gn816sc",
        form.current,
        "-RehOBGIRfFQRdY5Y4CDc"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );
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
        <from action="contactForm" ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="email"
              placeholder="Your Email"
              name="your_email"
            ></input>
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="msg"
            ></textarea>
          </div>
          <div>
            {/* <input type="submit" value="Send" className="submitBtn" /> */}
            <button type="Submit" value="Send" className="submitBtn">
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
    </section>
  );
};

export default Contact;
