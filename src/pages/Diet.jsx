import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './Diet.module.css';

function Diet() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [dietSuggestion, setDietSuggestion] = useState('Enter your height and weight to calculate BMI.');

  const calculateBMI = () => {
    const heightMeters = height / 100; // convert height to meters
    const bmiValue = weight / (heightMeters * heightMeters); // calculate BMI
    setBMI(bmiValue.toFixed(2)); // set BMI with 2 decimal places
    suggestDiet(bmiValue);
  };

  const suggestDiet = (bmiValue) => {
    if (bmiValue < 18.5) {
      setDietSuggestion('You are underweight. You may need to increase your calorie intake. Focus on consuming protein-rich foods, healthy fats, and carbohydrates to gain weight. Consider consulting a nutritionist for personalized advice.');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setDietSuggestion('Your BMI is normal. Maintain a balanced diet for optimal health. Make sure to include a variety of nutrients such as protein, carbohydrates, fats, vitamins, and minerals in your meals.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setDietSuggestion('You are overweight. Consider reducing calorie intake and increasing physical activity. Focus on eating more fruits, vegetables, lean proteins, and whole grains. Limit intake of processed foods, sugary beverages, and high-fat foods.');
    } else {
      setDietSuggestion('You are obese. Consult a healthcare professional for personalized advice on diet and exercise. Focus on making gradual lifestyle changes such as adopting a balanced diet, increasing physical activity, and managing stress.');
    }
  };

  return (
    <div className={styles.full}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.calculator}>
          <h1 className={styles.title}>BMI Calculator</h1>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Height (cm):</label>
            <input className={styles.input} type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Weight (kg):</label>
            <input className={styles.input} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button className={styles.button} onClick={calculateBMI}>Calculate BMI</button>
          {bmi && (
            <div>
              <h2 className={styles.bmiTitle}>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
        <p className={styles.suggestions}>{dietSuggestion}</p>
      </div>
    </div>
  );
}

export default Diet;
