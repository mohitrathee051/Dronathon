import React from 'react'
import styles from './Features.module.css'
import features from '../assets/features.png'



function Features() {
  return (
    <div className={styles.fullscreen}>
        <div className={styles.imagesection}>
            <img src={features} alt="features" />
        </div>
        <div className={styles.textsection}>
            <p className={styles.Heading}>Features:</p>
            <ul>
                <li>Tracker</li>
                <li>Diet Plan</li>
                <li>Motivation</li>
                <li>Todo List</li>
                <li>Planner</li>
                <li>Personalization</li>
                <li>Security</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Features
