import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/backend.png";
import AppDesign from "../../assets/database.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <span className="skillDesc">
        Self motivated Full stack Developer familiar with 5+ years of experience
        as a developer.
        <br /> React, Express, Node.JS, Mongodb, MYSQL, SQL Server, js, c#, MVC,
        RestApi, AWS
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={UIDesign}
            alt="Front-End Development"
            className="skillBarImg"
          ></img>
          <div className="skillBarText">
            <h2>Front-End Development</h2>
            <p>
              React.js, HTML5, CSS, JavaScript, TypeScript, API Integration,
              Jquery UI, Material UI, Vue.js, Three.js, Tailwind CSS, Responsive
              Webdesign
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={WebDesign}
            alt="Back-End Development"
            className="skillBarImg"
          ></img>
          <div className="skillBarText">
            <h2>Back-End Development</h2>
            <p>
              Node.js, Express.js, Restful API, ADO.Net, c#, .Net framework,
              AJAX, MVC, Babel + ES6, Redux, XML,
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="Databse" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Database
            </h2>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; MongoDB, MySql, SqlServer
            </p>
          </div>
        </div>

        {/* <div className="skillBar">
          <img src={AppDesign} alt="Database" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>Database Server</h2>
            <p>MongoDB, MySql, SqlServer</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default skills;
