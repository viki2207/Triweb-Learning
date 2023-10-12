import React from "react";
import "./intro.css";
import bg from "../../assets/Vidhi.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introName">Vidhi Shah</span>
          <br />
          Full Stack Developer
        </span>
        <p className="intropara">
          I am a skilled and passionate Full Stack developer with experiencing
          in creating{<br />} visually appealing and user - friendly
          applications
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
