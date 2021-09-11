import React, { useState, useEffect } from "react";
import style from "./Verify.module.css";
import logo from "../../images/logo.svg";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {sendFullUser} from '../../store/actions/user'
import {Redirect} from 'react-router-dom'

const Verify = () => {
  const dispatch = useDispatch()
    const [data, setData] = useState(null)
  const id = useParams()
useEffect(() =>{
    (async () => {
        const getUser = axios.get("/api/user/get", {
          headers: { "authorization": id.id }
        }).then((res)=>{
            setData(res);
        }).catch(err=>{
            console.log(err);
        });   
      })();
},[id])
const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setState((prev) => {
      return { ...prev, 
        [name]: value };
    });
    
  };
  const handleSubmit = () => {
    setState({
      name:state.name,
      email:data.data.email,
      phone:parseInt(state.phone)
    })
    let temp = {name:state.name, email:data.data.email, phone:state.phone}
    
    
    if(state.name.trim()===""||data.data.email.trim()===""){
      return alert('Enter the field correctly')
    }
    dispatch(sendFullUser(temp,id))
  };
  const user = useSelector(state=>state.user)
  
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" />
      <input
        placeholder="Enter your Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={state.name}
      />
      <input
        placeholder="Enter your Email"
        type="text"
        name="email"
      
        value={data?data.data.email:null}
      />
      <input
        placeholder="Enter your Phone"
        type="number"
        name="phone"
        value={state.phone}
        onChange={handleChange}
      />
      <button className="btn_submit" onClick={handleSubmit}>Submit</button>
     {
       user?<Redirect to='/'></Redirect>:null
     }
    </div>
  );
};

export default Verify;
