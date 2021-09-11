import React,{useEffect,useRef} from "react";
import style from "./WhyUs.module.css";
import secondImage from "../../../../images/secondImage.svg";
import thirdImage from "../../../../images/thirdImage.svg";
import fourthImage from "../../../../images/fourthImage.svg";
import Box from "./components/Box";
import Zoom from 'react-reveal'

const WhyUs = ({state}) => {
  const titleRef = useRef()
  useEffect(() =>{
    if(state==='Why Us'){
      titleRef.current.scrollIntoView({behavior: 'smooth'})
    }
  },[state])
  return (
    <div className={style.container} ref={titleRef}>
      <Zoom>
      <h1 className={style.title}>Why Us</h1>
      </Zoom>
      <Box
        image={secondImage}
        title="Localised Ad Campaigns"
        id={1}
        content="With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally."
      ></Box>
      <Box
        image={thirdImage}
        title="Get More Calls and Enquiries"
        id={2}
        content="When you use Zocket, you can expect calls pouring in with enquiries about your business. Our exceptional outreach strategies and business profile optimization techniques will catch the eye of prospects. With organic leads taken care of by Zoket, all you’d have to worry about is converting your leads to customers."
      ></Box>
      <Box
        image={fourthImage}
        title="No Expertise Required"
        id={3}
        content="Zocket is completely beginner friendly and doesn’t require any previous marketing expertise to use. Built with an aim to make marketing easier for small businesses, Zocket is powered by AI and will provide done-for-you content while you can take care of other important things in your business. With easy-to-follow guides, it doesn’t get better than this."
      ></Box>
    </div>
  );
};

export default WhyUs;
