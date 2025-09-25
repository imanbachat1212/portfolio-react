import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-text" data-aos="fade-up-right">
          <div className="slide">
            <span className="one" data-aos="fade-left">
              Hello
            </span>
            <span className="two">I'm</span>
          </div>
          <h1 className="typing-demo">Iman Bachat .</h1>

          <h3>
            Full Stack Web <span> Developer. </span>
          </h3>
          <p>
            I help small businesses stand out online with fast, reliable, and
            affordable websites.
          </p>
          <div className="button">
            <a href="#contact" className="btn">
              {" "}
              Say Hello
            </a>
            <a href="#work" className="btn-2">
              <span>
                <i className="bx bx-play"></i>
              </span>{" "}
              Watch My Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
