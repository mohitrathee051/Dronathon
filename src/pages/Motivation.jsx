import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from './Motivation.module.css';

function Motivation() {
  
  const [quote, setQuote] = useState('');
  const [authorOfQuote, setAuthorOfQuote] = useState('');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = Math.floor(Math.random() * data.length);
        const { text, author } = data[randomQuote];
        const newAuthor = author.split(',')[0];
        setQuote(text);
        setAuthorOfQuote(newAuthor);
      });
  }, []);

  return (
    <div className={styles.full}>
      <Navbar />
      <div className={styles.quotesec}>
        <p>{quote}</p>
        <p>-{authorOfQuote}</p>
      </div>
    </div>
  );
}

export default Motivation;
