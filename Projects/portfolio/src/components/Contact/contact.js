import React, { useRef } from "react";
import "./contact.css";
import shahnet from "../../assets/shahnetlogo.jpeg";
import triwebapi from "../../assets/triwebapilogo.jpeg";
import knowledgehut from "../../assets/knowledgehutlogo.png";
import medtechit from "../../assets/medtechitlogo.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";

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
        <h1 className="contactPageTitle">My clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies. some of the notable companies i have
          worked with includes
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
        {/* ref for email */}
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
              placeholder="Your message"
              className="msg"
            ></textarea>
          </div>
          <div>
            <button type="Submit" value="Send" className="submitBtn">
              Submit
            </button>
          </div>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link"></img>
            <img src={TwitterIcon} alt="Twitter" className="link"></img>
            <img src={youtubeIcon} alt="Youtube" className="link"></img>
            <img src={InstagramIcon} alt="Instagram" className="link"></img>
          </div>
        </from>
      </div>
    </section>
  );
};

export default Contact;
