import React,{useState} from "react";
import style from "./RightBox.module.css";
import inputBoxArrow from "../../../../../../images/inputBoxArrow.svg";
import validator from 'validator'
import {useDispatch} from 'react-redux'
import {sendUser} from '../../../../../../store/actions/user'

const RightBox = () => {
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
    <div className={style.container}>
      <h1 className={style.title}>Get Early Access</h1>
      <div className={style.input_box}>
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="Your email address"
          onChange={handleChange}
          value={email}
          className={`${danger?style.danger:style.input}`}
        />
        <img onClick={sendEmail} className={style.arrow} src={inputBoxArrow} alt="arrow" />
      </div>
    </div>
  );
};

export default RightBox;
