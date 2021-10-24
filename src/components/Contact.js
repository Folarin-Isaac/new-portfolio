import React from "react";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import mail from '../img/gmail.png'
import location from '../img/location.png'
import phone from '../img/call.png'

class Contact extends React.Component {

  render() {
    return (
      <div id="contact" className="container contactWrapper">
        <Fade bottom>
          <header className="centered">
            <h2 className="contactHeader">
              <span className="accent">Contact </span>Me
            </h2>
          </header>
        </Fade>

        <div className="contactCards">
          <div className="contactCard centered">
            <Fade bottom>
              <div className="contactDetails">
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-home">
                    <img src={location} alt="mail" style={{height:"30px", width:"30px", objectFit:"contain"}} />
                    </span>
                  </div>
                </div>
                <div>
                  <h3>My Address</h3>
                  <p>3, Chief Ibrahim Street, Off Powerline, Ikorodu, Lagos State.</p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="contactCard centered">
            <Fade bottom>
              <a href="tel:+234-703-068-0817" className="contactDetails">
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-phone">
                    <img src={phone} alt="mail" style={{height:"30px", width:"30px", objectFit:"contain"}} />
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p className="contactLink">+234-903-402-9095</p>
                </div>
              </a>
            </Fade>
          </div>

          <div className="contactCard centered">
            <Fade bottom>
              <a
                href="mailto:folarinisaac36@gmail.com"
                className="contactDetails"
              >
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-mail">
                    <img src={mail} alt="mail" style={{height:"30px", width:"30px", objectFit:"contain"}} />
                    </span>
                  </div>
                </div>
                <div>
                  <h3>Email</h3>
                  <p className="contactLink">folarinisaac36@gmail.com</p>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
