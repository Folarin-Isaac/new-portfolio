import React from "react";
import $ from "jquery";

/*Smooth scroll to a view when a nav link is selected and is on that same page*/
function scrollToView(element) {
  $("#openNav").fadeOut();
  document.getElementById(element).scrollIntoView({
    behavior: "smooth",
  });
}

class NavBar extends React.Component {
  openNav() {
    $("#openNav").fadeToggle();
  }

  render() {
    return (
      <nav className="navWrapper">
        <div className="menuWrapper">
          <div className="logo">
            <div className="logo-sub" style={{display:"flex", alignItems:"flex-end",position:"relative"}}> 
            <span style={{ background:"red", borderRadius:"100%", height:"10px",width:"10px"}}></span>
            <span style={{ background:"pink", borderRadius:"100%", height:"25px",width:"25px",display: "flex",
    justifyContent: "center",
    alignItems: "center", padding:"20px"}}>
            <p className="ftext" style={{fontSize:"27px"}}>F</p>
            </span>
            <p className="ftext" style={{position:"absolute", left:"49px"}}>a</p>
            </div>
           
            {/* <img
              onClick={() => window.location.reload(true)}
              src="/images/logo.svg"
              alt="logo"
            ></img> */}
            {/* <span
              onClick={() => this.openNav()}
              title="Open Menu"
              className="icon icon-list openNav"
            ></span> */}
          </div>
          <div className="menuLinks">
            <ul id="openNav">
              <li onClick={() => scrollToView("home")}>Home</li>
              <li onClick={() => scrollToView("about")}>About</li>
              <li onClick={() => scrollToView("portfolio")}>Portfolio</li>
              <li onClick={() => scrollToView("services")}>Services</li>
              <li onClick={() => scrollToView("resume")}>Resume</li>
              <li onClick={() => scrollToView("contact")}>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export { NavBar };
export { scrollToView };