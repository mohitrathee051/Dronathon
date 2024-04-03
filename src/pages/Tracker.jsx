// Tracker.js
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styles from './Tracker.module.css'

function Tracker({ allTasksCompleted }) {

  const [summary, setSummary] = useState(0);

  




  const [streak, setStreak] = useState(0);
  const [daysLeft, setDaysLeft] = useState(75);


  useEffect(() => {
    // Fetch tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Check if all tasks are completed
    const allCompleted = storedTasks.every(task => task.completed);

    // Set summary based on completion status
    if (allCompleted) {
      setStreak(streak+1);
      setDaysLeft(daysLeft-1);
    } else {
    }
  }, []);

  useEffect(() => {
    if (allTasksCompleted) {
      setStreak(streak + 1);
      setDaysLeft(daysLeft - 1);
    }
  }, [allTasksCompleted, streak, daysLeft]);

  return (
    <div className={styles.tracker}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.count}>
            <p>Streak:</p>
            <p className={styles.heading}>{streak}</p>
          </div>
          <div className={styles.count}>
            <p>Days Left:</p>
            <p className={styles.heading}>{daysLeft}</p>
          </div>  
        </div>
    </div>
  )
}

export default Tracker;
