import React,{useEffect,useState} from "react";
import style from "./Testimonials.module.css";
import { Zoom } from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "./components/Box";
import exclamatory from '../../../../images/exclamatory.svg'

const Testimonials = () => {
    const [box, setBox] = useState(2)
    useEffect(()=>{
      if(1024<window.innerWidth){
          return setBox(3)
      }
      if(640<window.innerWidth){
          return setBox(2)
      }
      if(0<window.innerWidth){
          setBox(1)
      }
    },[])

    window.addEventListener("resize",()=>{
        if(1024<window.innerWidth){
            return setBox(3)
        }
        if(540<window.innerWidth){
            return setBox(2)
        }
        if(0<window.innerWidth){
            setBox(1)
        }
    })
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: box,
    slidesToScroll: 1,
  };
  return (
    <div className={style.container}>
      <Zoom>
        <h1 className={style.title}>Hear It From Them</h1>
        <img src={exclamatory} alt="exclamatory" className={style.exclamatory} />
      </Zoom>
      <div className={style.box}>
        <Slider {...settings}>
          
            <Box
              title="Incredibly Amazing!"
              content="Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business, Zocket is your go-to site!"
              image="https://s3-alpha-sig.figma.com/img/8759/e4cd/c52467e0f2db2cade113cdf12c9824aa?Expires=1632096000&Signature=YcMRl8cen4GnmbR5FZz382WhCK2vUBq76Am7IBRn-9HoTL8ZNJNPNwuuYeS376t-7YJEsE9opT7rdiFaqaBBV0WlDkA3Dd01NxBbUy~FaCQ~5CwgCnzNZ8g3shLjttEKCKgR1F7aXtAQ2XtIkkMjlAhq8RlgInnBm~-k8aQH6U6LeSLbxZsU9VC~h-TaNTvwEbA6u-wM80PncJHg32k9l94VXRobHUAxcaiT4WOuZVcTq2qZe8fsrJnjPPA0RsLZc93SpBYhKO2UhzAj~Hic0sNqS-lXgV0sMZUkaWCevdiK7UtjnvuK4CNi6AAJ2~7nFruO9yNnxsfGHNcn22kjuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              name="Ella May"
              field="Digital Marketer"
            ></Box>
               <Box
              title="Remarkable Growth"
              content="Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to up their game."
              image="https://s3-alpha-sig.figma.com/img/8759/e4cd/c52467e0f2db2cade113cdf12c9824aa?Expires=1632096000&Signature=YcMRl8cen4GnmbR5FZz382WhCK2vUBq76Am7IBRn-9HoTL8ZNJNPNwuuYeS376t-7YJEsE9opT7rdiFaqaBBV0WlDkA3Dd01NxBbUy~FaCQ~5CwgCnzNZ8g3shLjttEKCKgR1F7aXtAQ2XtIkkMjlAhq8RlgInnBm~-k8aQH6U6LeSLbxZsU9VC~h-TaNTvwEbA6u-wM80PncJHg32k9l94VXRobHUAxcaiT4WOuZVcTq2qZe8fsrJnjPPA0RsLZc93SpBYhKO2UhzAj~Hic0sNqS-lXgV0sMZUkaWCevdiK7UtjnvuK4CNi6AAJ2~7nFruO9yNnxsfGHNcn22kjuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              name="Ella May"
              field="Digital Marketer"
            ></Box>
            <Box
              title="Incredibly Amazing!"
              content="Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level and the support they offered during our association was top-notch. If you’re looking to elevate your brand or business, Zocket is your go-to site!"
              image="https://s3-alpha-sig.figma.com/img/8759/e4cd/c52467e0f2db2cade113cdf12c9824aa?Expires=1632096000&Signature=YcMRl8cen4GnmbR5FZz382WhCK2vUBq76Am7IBRn-9HoTL8ZNJNPNwuuYeS376t-7YJEsE9opT7rdiFaqaBBV0WlDkA3Dd01NxBbUy~FaCQ~5CwgCnzNZ8g3shLjttEKCKgR1F7aXtAQ2XtIkkMjlAhq8RlgInnBm~-k8aQH6U6LeSLbxZsU9VC~h-TaNTvwEbA6u-wM80PncJHg32k9l94VXRobHUAxcaiT4WOuZVcTq2qZe8fsrJnjPPA0RsLZc93SpBYhKO2UhzAj~Hic0sNqS-lXgV0sMZUkaWCevdiK7UtjnvuK4CNi6AAJ2~7nFruO9yNnxsfGHNcn22kjuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              name="Ella May"
              field="Digital Marketer"
            ></Box>
               <Box
              title="Remarkable Growth"
              content="Since the day we started using Zocket, we’ve seen incredible growth in inbound enquiries and leads. Zocket has every feature you can think of when it comes to growing your business. I highly recommend Zocket to anyone who’s wanting to up their game."
              image="https://s3-alpha-sig.figma.com/img/8759/e4cd/c52467e0f2db2cade113cdf12c9824aa?Expires=1632096000&Signature=YcMRl8cen4GnmbR5FZz382WhCK2vUBq76Am7IBRn-9HoTL8ZNJNPNwuuYeS376t-7YJEsE9opT7rdiFaqaBBV0WlDkA3Dd01NxBbUy~FaCQ~5CwgCnzNZ8g3shLjttEKCKgR1F7aXtAQ2XtIkkMjlAhq8RlgInnBm~-k8aQH6U6LeSLbxZsU9VC~h-TaNTvwEbA6u-wM80PncJHg32k9l94VXRobHUAxcaiT4WOuZVcTq2qZe8fsrJnjPPA0RsLZc93SpBYhKO2UhzAj~Hic0sNqS-lXgV0sMZUkaWCevdiK7UtjnvuK4CNi6AAJ2~7nFruO9yNnxsfGHNcn22kjuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              name="Ella May"
              field="Digital Marketer"
            ></Box>
              
         
         
        </Slider>
      </div>
     
    </div>
  );
};

export default Testimonials;
