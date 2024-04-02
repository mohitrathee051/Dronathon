import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import styles from './LandingScreen.module.css';
import landingscreen from '../assets/landingscreen.png';
import Logo from '../assets/Logo.png';

function LandingScreen() {
  
  const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };
    const goToSignUP = () => {
        navigate('/SignUp');
    };
  
  return (
    <div className={styles.FullScreen}>
      <div className={styles.Navbar}>
        <div className={styles.Logo}>
          <img src={Logo} alt='logo' />
        </div>
        <div className={styles.NavButtons}>
          <a href='#'>Home</a>
            <a href='#'>Goals</a>
          <a href='#'>About</a>
          <a href='#'>Features</a>
        </div>
        <button className={styles.JoinUsButton} onClick={goToLogin}>Join US!!</button>
      </div>
      <div className={styles.HeroSection}>
        <div className={styles.textBtnContainer}>
          <p>
            For 75 consecutive days, 75 Hard participants must do the following every day, according to the program’s welcome email: Follow a diet. While it can be a diet of your choosing, the diet must be a structured eating plan with the goal of physical improvement. No alcohol or meals outside your chosen diet are allowed. Complete two 45-minute workouts, one of which must be outdoors. Take a progress picture. Drink 1 gallon of water. Read 10 pages of a book . Furthermore, no alterations to the program are allowed. If you miss any of your daily goals, your progress resets to day one.
          </p>
          <button className={styles.GetStarted} onClick={goToSignUP}>GET STARTED --></button>
        </div>
        <div className={styles.LandingImage}>
          <img src={landingscreen} alt='landing screen' />
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
