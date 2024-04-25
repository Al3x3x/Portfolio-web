import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-rigth">
          <div className="about-para">
            <p>
              I am a student of computer systems engineering at the
              technological institute of laguna, I love any subject related to
              technology and every day I learn more in a self-taught way.
            </p>
            <p>✨ My favorite language is java</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML</p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>110+</h1>
          <p>Solved problems in leetcode</p>
        </div>
      </div>
    </div>
  );
};

export default About;
