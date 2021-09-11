import React, { useEffect, useRef, useState } from "react";
import style from "./MainContainer.module.css";
import FirstImage from "../../../../images/firstImage.svg";
import { Zoom, Fade } from "react-reveal";
import ellipse1 from "../../../../images/ellipse1.svg";
import ellipse2 from "../../../../images/ellipse2.svg";
import ellipse3 from "../../../../images/ellipse3.svg";
import polygon1 from "../../../../images/polygon1.svg";
import polygon2 from "../../../../images/polygon2.svg";
import { sendUser } from "../../../../store/actions/user";
import { useDispatch } from "react-redux";
import validator from "validator";

const MainContainer = ({ state }) => {
  const [danger, setDanger] = useState(false)
  const dispatch = useDispatch();
  const titleRef = useRef();
  useEffect(() => {
    if (state === "About") {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);
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
      setDanger(true)
      setTimeout(() => {
        setEmail("");
        setDanger(false)
      }, 1000);
    }
  };
  return (
    <div className={style.main_box} ref={titleRef}>
      <img src={ellipse1} alt="ellipse" className={style.ellipse1} />
      <img src={ellipse2} alt="ellipse" className={style.ellipse2} />
      <img src={ellipse3} alt="ellipse" className={style.ellipse3} />
      <img src={polygon1} alt="ellipse" className={style.polygon1} />
      <img src={polygon2} alt="ellipse" className={style.polygon2} />
      <div className={style.typoGraphy}>
        <Fade bottom>
          <h1 className={style.title}>
            FACEBOOK ADS <br /> IN 30 SECONDS
          </h1>
        </Fade>
        <Fade bottom>
          <p className={style.sub_title}>
            Create stunning ad copy incredibly fast and <br />
            skyrocket your digital business.{" "}
          </p>
        </Fade>
        <Fade bottom>
          <div className={style.input_box}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              onChange={handleChange}
              value={email}
              className={`${danger?style.danger:null}`}
            />
            <p onClick={sendEmail}>Get Early Access</p>
          </div>
        </Fade>
      </div>
      <Zoom>
        <div className={style.main_image}>
          <img src={FirstImage} alt="main" />
        </div>
      </Zoom>
    </div>
  );
};

export default MainContainer;
