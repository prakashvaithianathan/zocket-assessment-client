import React,{useEffect,useRef} from "react";
import style from "./Services.module.css";
import "bulma/css/bulma.min.css";
import Box from "./components/Box";
import facebookLogo from "../../../../images/facebookLogo.svg";
import googleLogo from '../../../../images/googleLogo.svg';
import instagramLogo from '../../../../images/instagramLogo.svg';
import {Zoom,Fade} from 'react-reveal'

const Services = ({state}) => {
  const titleRef = useRef()
  useEffect(() =>{
    if(state==='Services'){
      titleRef.current.scrollIntoView({behavior: 'smooth'})
    }
  },[state])
  return (
    <div className={style.container} ref={titleRef}>
      <Zoom>
      <h1 className={style.title}>Tailer-made Services</h1>
      </Zoom>
      <div class='container' className={style.grid_box} > 
        <Fade bottom>
        <Box
          title="Facebook Ads"
          content="With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads."
          logo={facebookLogo}
        ></Box>
        </Fade>
        <Fade bottom>
        <Box
          title="Google Ads"
          content="We offer industry research paored with PPC monitoring and A/B testing to ensure you get an improves ROI."
          logo={googleLogo}
        ></Box>
        </Fade>
        <Fade bottom>
        <Box
          title="Instagram Ads"
          content="Right from design & content strategy to profile management and everything in between, we'vw got you covered."
          logo={instagramLogo}
        ></Box>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
