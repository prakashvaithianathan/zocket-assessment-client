import React, { useEffect, useRef, useState } from "react";
import style from "./EmailBox.module.css";
import mailImage from "../../../../images/mailImage.svg";
import vector1 from "../../../../images/vector1.svg";
import vector2 from "../../../../images/vector2.svg";
import ellipse1 from "../../../../images/ellipse1.svg";
import ellipse2 from "../../../../images/ellipse2.svg";
import ellipse3 from "../../../../images/ellipse3.svg";
import polygon1 from "../../../../images/polygon1.svg";
import polygon2 from "../../../../images/polygon2.svg";
import validator from "validator";
import { useDispatch } from "react-redux";
import { sendUser } from "../../../../store/actions/user";

const EmailBox = ({ state }) => {
  const dispatch = useDispatch();
  const [danger, setDanger] = useState(false);
  const [email, setEmail] = useState("");
  const titleRef = useRef();
  useEffect(() => {
    if (
      state === "Contact" ||
      state === "Pricing" ||
      state === "Get Early Access"
    ) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

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
    <div className={style.container} ref={titleRef}>
      <img src={ellipse1} alt="ellipse" className={style.ellipse1} />
      <img src={ellipse2} alt="ellipse" className={style.ellipse2} />
      <img src={ellipse3} alt="ellipse" className={style.ellipse3} />
      <img src={polygon1} alt="ellipse" className={style.polygon1} />
      <img src={polygon2} alt="ellipse" className={style.polygon2} />
      <img src={polygon2} alt="ellipse" className={style.polygon3} />
      <img src={polygon2} alt="ellipse" className={style.polygon4} />
      <img src={vector1} alt="vector_image" className={style.vector1} />
      <img src={vector2} alt="vector_image" className={style.vector2} />
      <div className={style.image_box}>
        <img className={style.image} src={mailImage} alt="post_letter" />
      </div>

      <div className={style.title}>
        <h1>
          Be one of the first to <br />
          know when we launch!{" "}
        </h1>
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
      </div>
    </div>
  );
};

export default EmailBox;
