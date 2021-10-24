import React from "react";
import Fade from "react-reveal/Fade";

class Services extends React.Component {
  render() {
    return (
      <div id="services" className="backgroundFix centered servicesContainer">
        <div className="servicesContent">
          <Fade bottom>
            <header className="centered">
              <h1>
                My <span className="accent">Services</span>
                <span className="primary">.</span>
              </h1>
            </header>
          </Fade>
          <div className="services">
            <Fade bottom>
              <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-network"></span>
                  <h1 className="serviceTitle">Android Development</h1>
                  <p> I am passionate and detail-oriented with excellent communication skills,
                     as well as a good understanding of the android SDK and mobile application development lifecycle. 
                     I Build Android apps with back-end API integration to improve the customer experience and cut down on development time. 
                     I also use Expresso library in android studio to test app UI and Roboletric library to test my codes.

                   </p>
                </div>
              </div>
            </Fade>
            {/* <Fade bottom>
            <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-round-brush"></span>
                  <h1 className="serviceTitle">UI | UX</h1>
                  <p>User Interface Designs in Figma or AdobeXD.</p>
                </div>
              </div>
            </Fade> */}
            <Fade bottom>
              <div className="centered">
                <div className="serviceContent">
                  <span className="icon icon-database"></span>
                  <h1 className="serviceTitle">Database</h1>
                  <p>
                    Creation and management of MongoDB using Express.Js
                    and Node.JS
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
