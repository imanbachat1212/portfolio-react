import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="main-text">
          <p>What I am Expert In</p>
          <h2>
            Creating digital identities for <br />
            <span>small businesses</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="box" data-aos="flip-right">
            <div className="s-icons">
              <i className="bx bx-code-alt"></i>
            </div>
            <h3>Web Development</h3>
            <p>
              the work that happens behind the scenes to make a website look
              great, work fast and perform well with a seamless user experience.
            </p>
          </div>

          <div className="box" data-aos="flip-right">
            <div className="s-icons">
              <i className="bx bx-mobile-alt"></i>
            </div>
            <h3>Frontend Development</h3>
            <p>
              provide insights and data that can be used to create a better user
              experience for website visitors.
            </p>
          </div>

          <div className="box" data-aos="flip-right">
            <div className="">
              <img src={require("../images/coding-1.png")} alt="" />
            </div>
            <h3>Backend Development</h3>
            <p>
              Enjoy creative problem solving and getting exposure to multiple
              projects with NodeJs,Express & mongoDB.
            </p>
          </div>

          <div className="box" data-aos="flip-right">
            <div className="s-icons">
              <img src={require("../images/api-1.png")} alt="" />
            </div>
            <h3>MERN stack Development</h3>
            <p>
              Designed, developed and modified web Apps with MERN technologies.
            </p>
          </div>

          <div className="box" data-aos="flip-right">
            <div className="s-icons">
              <i className="bx bx-line-chart"></i>
            </div>
            <h3>SEO & Content Strategy</h3>
            <p>
              Keyword research, on-page SEO, performance optimization, and
              schema markup to grow qualified organic traffic and leads.
            </p>
          </div>

          {/* Business Strategy */}
          <div className="box" data-aos="flip-right">
            <div className="s-icons">
              <i className="bx bx-target-lock"></i>
            </div>
            <h3>Business Strategy</h3>
            <p>
              Align your website with revenue goals—funnels, offers, analytics,
              and CRO to turn visitors into customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
