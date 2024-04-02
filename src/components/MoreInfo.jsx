import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import MoreInfoImage from '../assets/MoreInfo.png' // Rename MoreInfo to MoreInfoImage
import styles from './MoreInfo.module.css'

function MoreInfoComponent() { // Rename MoreInfo to MoreInfoComponent
    
    const navigate = useNavigate();

    const goToSignUP = () => {
        navigate('/SignUp');
    };
    
    return (
        <div className={styles.fullscreen}>
            <div className={styles.imagepart}>
                <img src={MoreInfoImage} alt="MoreInfo" /> {/* Use MoreInfoImage instead of MoreInfo */}
            </div>
            <div className={styles.textbutton}>
                <div className={styles.textpart}>
                    <p className={styles.Heading}>The Finish Line Awaits. Are You Ready?</p>
                    <p>75 days might seem daunting, but with the right tools and support, it can be your most transformative journey yet. Imagine the strength, discipline, and resilience you'll cultivate. Picture the healthier, happier version of yourself waiting at the finish line.</p>
                    <p><span>This website is more than just a tracker, it's your 75 Hard companion.</span>
                        We'll be there every step of the way, keeping you motivated, organized, and connected to a supportive community.
                        <span><br />So, are you ready to conquer your limits and unlock your full potential?</span></p>
                </div>
                <div className={styles.buttonpart}>
                    <button onClick={goToSignUP}>JOIN NOW</button>
                </div>
            </div>
        </div>
    )
}

export default MoreInfoComponent // Rename MoreInfo to MoreInfoComponent
