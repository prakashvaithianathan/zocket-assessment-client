import React from 'react'
import style from './LeftBox.module.css'
import logo from '../../../../../../images/logo.svg'
import footerInstagram from '../../../../../../images/footerInstagram.svg'
import footerTwitter from '../../../../../../images/footerTwitter.svg'
import footerYoutube from '../../../../../../images/footerYoutube.svg'

const LeftBox = () => {
    return (
        <div className={style.container}>
            <img className={style.logo}src={logo} alt="logo" />
            <p>Copyright &#8471; 2021 Zocket</p>
            <p>All rights reserved</p>
            <div className={style.images}>
                <img src={footerInstagram} alt="Instagram" />
                <img src={footerTwitter} alt="Twitter" />
                <img src={footerYoutube} alt="Youtube" />
            </div>
        </div>
    )
}

export default LeftBox
