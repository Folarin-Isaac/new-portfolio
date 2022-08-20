import React from "react";
import { scrollToView } from "./NavBar";
import Slide from "react-reveal/Slide";

class About extends React.Component {
  render() {
    return (
      <Slide bottom>
        <div id="about" className="aboutMeWrapper">
          <div className="aboutMeDesc">
            <header>
              <h1>
                About <span className="accent">Me</span>
                <span className="primary">.</span>
              </h1>
            </header>
            <div className="descTextCont">
              <p className="descText">
                I'm an <span className="primary">Android</span> developer with
                a strong sense for aesthetics and interaction.I am passionate about making the best use of modern technology to solving 
                customer problems and usually work with a team of talented engineers to design, build Android mobile applications. 
                With 2 years of working in a collaborative environment, I have built robust and engaging apps used by real customers, taking
                 into consideration performance, privacy and security.
              </p>
              <p className="descText">
                I have{" "}
                <span className="primary">
                  {new Date().getFullYear() - 2019}+ Years
                </span>{" "}
                of experience building <span className="primary">Stable</span>{" "}
                and
                <span className="primary"> Maintainable</span> Mobile Applications in
                fast-paced, collaborative environments. I'm Proficient at{" "}
                <span className="primary">Creating</span> user interfaces and a{" "}
                <span className="primary">Team Player </span>
                versed in <span className="primary">Software Design Patterns</span> &{" "}
                <span className="primary">Android Lifecycle.</span>.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  window.open("./files/Isaac Folarin-Resume.pdf");
                }}
              >
                Download CV
              </button>
              <button onClick={() => scrollToView("resume")}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default About;
