import React from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import styles from './Navbar.module.css';

function Navbar() {
    const navigate = useNavigate(); // Call useNavigate to get the navigate function

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
    });
    
    return (
        <div className={styles.nav}>
            <p>System</p>
            <div className={styles.tabs}>
                <Link to="/dashboard">Quest</Link>
                <Link to="/dashboard/tracker">Tracker</Link>
                <Link to="/dashboard/diet">Diet</Link>
                <Link to="/dashboard/motivation">Motivation</Link>
            </div>
            <button onClick={() => signOut(firebaseAuth)}>QUIT</button>
        </div>
    )
}

export default Navbar;
