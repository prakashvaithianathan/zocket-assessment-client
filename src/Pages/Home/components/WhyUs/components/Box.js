import React,{useEffect,useState} from 'react'
import style from './Box.module.css'
import {Fade} from 'react-reveal'

const Box = ({title,content,image,id}) => {
    const [change, setChange] = useState(false)
    useEffect(()=>{
        if( 1024<window.innerWidth  && id===2){
          return setChange(true)
        }
        if( 1024>window.innerWidth  && id===2){
            setChange(false)
          }
    },[id])

    window.addEventListener('resize',()=>{
        if(1024<window.innerWidth&&id===2){
         return setChange(true)
        }

          
          if( 1024>window.innerWidth ){
            setChange(false)
          }
        
    })
  
    return (
      <>
      {change?(
        <div className={style.container}>
           
           <Fade left>
             
           <div className={style.text_box}>
           <h2 className={style.title}>{title}</h2>
           <p className={style.content}>{content}</p>
           </div>
           </Fade>
           <Fade right>
           <img  className={style.image} src={image} alt="compaign" />
           </Fade>
           
      
   </div>
      ):(
        <div className={style.container}>
           <Fade left>
           <img className={style.image} src={image} alt="compaign" />
           </Fade>
         <Fade right>
         <div className={style.text_box}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.content}>{content}</p>
        </div>
         </Fade>
      
        
   
</div>
      )}

      </>
        
    )
}

export default Box
