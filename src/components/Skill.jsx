import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <section className="skill" id="skill">
        <div className="main-text">
          <h2 id="skill-title">
            <span>My</span> Skills
          </h2>
        </div>

        <div
          className="skill-content"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/html5.png")} alt="" />
            <p>HTML 5</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/css3.png")} alt="" />
            <p>CSS 3</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/javasript.png")} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img
              src={require("../images/wordpress.png")}
              alt=""
              style={{ width: "50px" }}
            />
            <p>Wordpress</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/react.png")} alt="" />
            <p>ReactJS</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/redux.png")} alt="" />
            <p>Redux</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/node.png")} alt="" />
            <p>NodeJS</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/mongo.png")} alt="" />
            <p>MongoDB</p>
          </div>
          <div className="rows" data-aos="fade-up">
            <img src={require("../images/git.png")} alt="" />
            <p>GIT</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
