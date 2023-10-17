import React from "react";
import "./intro.css";
import bg from "../../assets/Vidhi.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/GitHub.png";
import btnImg1 from "../../assets/Resume.png";
import resume from "../../assets/Resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Intro = () => {
  const [text] = useTypewriter({
    words: ["Vidhi Shah.", "Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introName">{text}</span>
        </span>
        <p className="intropara">
          I am a skilled and passionate Full Stack developer with experiencing
          in creating{<br />} visually appealing and user - friendly
          applications
        </p>
        <Link to="../../assets/Resume.pdf" download>
          <img src={btnImg} alt="GitHub" className="link"></img>{" "}
          {/* <button className="btn">
            <img src={btnImg} alt="Git Hub" className="btnImg" />
            My Git Hub
           </button> */}{" "}
          {/* <button className="btn">
            <img src={btnImg1} alt="Resume" className="btnImg" />
            My Resume
          </button> */}
        </Link>
        <a href={resume} target="_blank" download>
          <img src={btnImg1} alt="Resume" className="link"></img>
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
