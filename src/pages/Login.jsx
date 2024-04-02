import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Loginimg from "../assets/Loginimg.png";
import loginbg from "../assets/loginbg.png";
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error.code);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/dashboard");
    });

    return (
        <div className={styles.full}>
            <div className={styles.left}>
                <p>Let’s Begin <br />Our Journey!</p>
                <div className={styles["image-container"]}>
                    <img className={styles["bg-image"]} src={loginbg} alt="Background" />
                    <img className={styles["top-image"]} src={Loginimg} alt="Top" />
                </div>
            </div>
            <div className={styles.Right}>
                <h1>Login</h1>
                <p>Email</p>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Password</p>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>LOGIN</button>
                <div className={styles.forgot}>Don't have an account? <a href="/signup">Sign Up</a></div>
                <div className={styles.forgot}><a href="/signup">Forgot Password?</a></div>
            </div>
        </div>
    );
}

export default Login;
