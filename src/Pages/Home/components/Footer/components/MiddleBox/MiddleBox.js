import React from 'react'
import style from './MiddleBox.module.css'

const MiddleBox = ({title,first,second,third,fourth,fifth}) => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.footerList}>
            <li>{first}</li>
            <li>{second}</li>
            <li>{third}</li>
            <li>{fourth}</li>
            <li>{fifth}</li>
            </div>
        </div>
    )
}

export default MiddleBox
