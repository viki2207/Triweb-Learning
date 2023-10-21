import React from "react";
import Button from "./Button";
import "./works.css";
import Portfolio1 from "../../assets/BookStore.png";
import Portfolio2 from "../../assets/Tictactoe.png";
import Portfolio3 from "../../assets/Devconnector.png";
import Portfolio4 from "../../assets/Quizapp.png";
import Portfolio5 from "../../assets/Calculator.png";
import Portfolio6 from "../../assets/Userblock.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        my work is without error. I am excited to bring my skills and experience
        to help business achieve their goals and create a strong presence
      </span>
      {/* worksImgs */}
      <div className="container">
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio1} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>Book Store</h2>
              <p>Mern Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio2} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>TIC-TAC-TOE</h2>
              <p>React Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio3} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>Devloper Connector</h2>
              <p>Mern Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio4} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>Quiz Application</h2>
              <p>Node JS Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio5} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>Calculator</h2>
              <p>Node JS Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src={Portfolio6} alt="" className="worksImg" />
          </div>
          <div className="content">
            <div className="Animated">
              <h2>User-Block</h2>
              <p>Vanila Js Project</p>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/viki2207"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="AnimatedBtn">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="workBtn">See more</button>
    </section>
  );
};

export default Works;
