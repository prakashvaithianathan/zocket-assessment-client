import React from 'react'
import style from './Box.module.css'

const Box = ({title,content,image,name,field}) => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.content}>{content}</p>
                
            </div>
            <div className={style.arrowBox}>
            <span className={style.arrow}></span>
            </div>
            <div className={style.user_infoBox}>
                
                <img className={style.image} src={image} alt="user_profile_picture" />
                <div>
                <h3 className={style.name}>{name}</h3>
                <p className={style.field}>{field}</p>
                </div>
            </div>
        </div>
    )
}

export default Box
