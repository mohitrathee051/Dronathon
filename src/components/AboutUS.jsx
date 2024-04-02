import React from 'react'
import aboutus from '../assets/aboutus.png'
import styles from './AboutUs.module.css'

function AboutUS() {
  return (
    <div className={styles.fullscreen}>
        <div className={styles.textpart}>
            <p className={styles.Heading}>About US :</p>
            <p><span>This isn't just a challenge, it's a transformation.</span> We believe in the power of the 75Hard program to forge a stronger, healthier you. But we also know staying motivated on your own can be tough.</p>
            <p>That's where we come in.  <span>This simple web application is your ultimate 75Hard companion.</span></p>
            <ul>
                <li><p><span>Track your progress:</span> Log your workouts, diet, water intake, reading, and progress photos, all in one place.</p></li>
                <li><p><span>Stay accountable:</span> See your journey unfold visually, keeping you motivated and focused.</p></li>
                <li><p><span>Join the community:</span>Connect with fellow challengers for support, inspiration, and shared success.</p></li>
            </ul>
            <p>
                <span>Ready to push your limits and unlock the best version of yourself? </span>Enroll today and let's embark on this incredible journey together. <span>75 Days. Unwavering Commitment. Limitless You.</span>
            </p>
        </div>
        <div className={styles.imagepart}>
            <img src={aboutus} alt="aboutus" />
        </div>
    </div>
  )
}

export default AboutUS
