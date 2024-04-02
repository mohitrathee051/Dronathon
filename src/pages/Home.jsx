import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingScreen from '../components/LandingScreen';
import SliderPage from '../components/SliderPage';
import AboutUS from '../components/AboutUS';
import Features from '../components/Features';
import MoreInfo from '../components/MoreInfo';
import Footer from '../components/Footer';
import styles from './Home.module.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.Home}>
            <LandingScreen />
            <SliderPage />
            <AboutUS />
            <Features />
            <MoreInfo />
            <Footer />
        </div>
    );
}

export default Home;