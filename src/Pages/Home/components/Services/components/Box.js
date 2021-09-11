import React from 'react'
import style from './Box.module.css'
import arrow from '../../../../../images/arrow.svg'


const Box = ({logo,title,content}) => {
    return (
        <div className={style.container}>
            <img src={logo} alt={title} className={style.image} />
            <h2 className={style.title}>{title}</h2>
            <p className={style.content}>{content}</p>
            <p className={style.explore}>Explore <img src={arrow} alt="arrow" /></p>
        </div>
    )
}

export default Box
