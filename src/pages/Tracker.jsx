import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Tracker.module.css'

function Tracker() {
  return (
    <div className={styles.tracker}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.count}>
            <p>Streak:</p>
            <p className={styles.heading}>0</p>
          </div>
          <div className={styles.count}>
            <p>Days Left:</p>
            <p className={styles.heading}>75</p>
          </div>  
        </div>
    </div>
  )
}

export default Tracker
