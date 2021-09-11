import React, { useState } from "react";
import style from "./Footer.module.css";
import LeftBox from "./components/LeftBox/LeftBox";
import MiddleBox from "./components/MiddleBox/MiddleBox";
import RightBox from "./components/RightBox/RightBox";
import logo from "../../../../images/logo.svg";
import footerInstagram from "../../../../images/footerInstagram.svg";
import footerTwitter from "../../../../images/footerTwitter.svg";
import footerYoutube from "../../../../images/footerYoutube.svg";
import inputBoxArrow from "../../../../images/inputBoxArrow.svg";
import validator from "validator";
import { useDispatch } from "react-redux";
import { sendUser } from "../../../../store/actions/user";

const Footer = () => {
  const dispatch = useDispatch();
  const [danger, setDanger] = useState(false);
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  
  const sendEmail = (e) => {
  
    if (email.trim() === "") {
      return;
    }
    if (validator.isEmail(email)) {
      setEmail("");
      dispatch(sendUser(email));
    } else {
      
      setEmail("Enter valid Email address");
      setDanger(true);
      setTimeout(() => {
        setEmail("");
        setDanger(false);
      }, 1000);
    }
  };
  return (
    <>
      <div className={style.copyright}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.mailInput}>
        <h1 className={style.title}>Get Early Access</h1>
        <div className={style.input_box}>
          <input
            // className={style.input}
            type="email"
            name="email"
            placeholder="Your email address"
            onChange={handleChange}
            value={email}
            className={`${danger?style.danger:style.input}`}
          />
          <img
            onClick={sendEmail}
            className={style.arrow}
            src={inputBoxArrow}
            alt="arrow"
          />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <LeftBox></LeftBox>
        </div>

        <div className={style.middleContainer}>
          <MiddleBox
            title="Company"
            first="About us"
            second="Blog"
            third="Contact us"
            fourth="Pricing"
            fifth="Testimonials"
          ></MiddleBox>
          <MiddleBox
            title="Support"
            first="Help center"
            second="Terms of services"
            third="Legal"
            fourth="Privacy policy"
            fifth="Status"
          ></MiddleBox>
        </div>
        <div className={style.rightContainer}>
          <RightBox></RightBox>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright 2021 Zocket. All rights reserved</p>
        <div className={style.images}>
          <img src={footerInstagram} alt="Instagram" />
          <img src={footerTwitter} alt="Twitter" />
          <img src={footerYoutube} alt="Youtube" />
        </div>
      </div>
    </>
  );
};

export default Footer;
