import React,{useState,useEffect} from 'react'
import style from './Home.module.css'
import {Button} from 'react-bulma-components'
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MainContainer from './components/MainContainer/MainContainer'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Testimonials from './components/Testimonials/Testimonials'
import EmailBox from './components/EmailBox/EmailBox'
import Footer from './components/Footer/Footer'
import {Fade} from 'react-reveal'



const Home = ({top}) => {
    const [state, setState] = useState("");
    const handleBackClick = (e)=>{
        setState(e.target.innerHTML);
   
        setTimeout(() => {
          setState("");
        }, 1000);
    }
    useEffect(() => {
            // setState('')
        setState(top);
        // window.location.pathname='/'
        
      }, [top]);
      
    return (
        <div>
            

 

    <div class="container" >
        <div className={style.navbar_container}>
        <Navbar handleBackClick={handleBackClick} state={state}></Navbar>
        </div>
     
      <div className={style.main_container}>
         <MainContainer state={state}></MainContainer>
      </div>
      <div className={style.services_container}>
          <Services state={state}></Services>
      </div>
      <div className={style.whyUs_container}>
          <WhyUs state={state}></WhyUs>
      </div>
      <div className={style.testimonials_container}>
        <Fade right>
        <Testimonials state={state}></Testimonials>
        </Fade>
      </div>
      <div className={style.emailBox_container}>
          <Fade bottom>
          <EmailBox state={state}></EmailBox>
          </Fade>
      </div>
      <hr />
      <div className={style.footer_container}>
          <Footer state={state}></Footer>
      </div>
      </div>
      
      
       
        </div>
    )
}

export default Home
