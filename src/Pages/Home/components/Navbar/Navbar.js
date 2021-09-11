import React, { useState, useEffect,useRef } from "react";
import logo from "../../../../images/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import './Navbar.css'

const NavbarComp = ({handleBackClick,state}) => {
  const [responsive, setResponsive] = useState(false);
  const [isActive, setisActive] = useState(false);
  const titleRef = useRef()
  useEffect(() =>{
    if(state==='Navbar'){
      titleRef.current.scrollIntoView({behavior: 'smooth'})
    }
  },[state])
  useEffect(() => {
    if (window.innerWidth > 1024) {
      return setResponsive(true);
    }
    if (window.innerWidth < 1024) {
      setResponsive(false);
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      return setResponsive(true);
    }
    if (window.innerWidth < 1024) {
      setResponsive(false);
    }
  });
  return (
    <div ref={titleRef}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" style={{ padding: "30px 30px 0 30px" }}>
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" />
          </Link>

          <span
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div
              className="navbar-item"
              // onClick={()=>setisActive(false)}
              style={
                responsive
                  ? {
                      position: "relative",
                      top: "15px",
                      display: "flex",
                      gap: "10px",
                    }
                  : {
                      position: "relative",
                      padding: "10px 0px 30px 40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }
              }
            >
              <li className="navbar-item" onClick={handleBackClick}>Services</li>
              <li className="navbar-item" onClick={handleBackClick}>Why Us</li>
              <li className="navbar-item" onClick={handleBackClick}>About</li>
              <li className="navbar-item" onClick={handleBackClick}>Pricing</li>
              <li className="navbar-item" onClick={handleBackClick}>Contact</li>
              <Button className='btn' onClick={handleBackClick}>Get Early Access</Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
