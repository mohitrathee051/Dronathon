import React from 'react'
import Linkedin from '../assets/Linkedin.png'
import Instagram from '../assets/Instagram.png'
import X from '../assets/X.png'
import Discord from '../assets/Discord.png'
import styles from './Footer.module.css'
function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterContent}>
            <p>75 Hard</p>
            <p>© 2021 75 Hard. All Rights Reserved.</p>
        </div>
        <div className={styles.social}>
            <img src={Linkedin} alt="Linkedin" />
            <img src={Instagram} alt="Instagram" />
            <img src={X} alt="X" />
            <img src={Discord} alt="Discord" />

        </div>
    </div>
  )
}

export default Footer
