import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import signupbg from "../assets/signupbg.png";
import signupimg from "../assets/signupimg.png";
import styles from "./SignUp.module.css";


function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
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
                    <img className={styles["bg-image"]} src={signupbg} alt="Background" />
                    <img className={styles["top-image"]} src={signupimg} alt="Top" />
                </div>
            </div>
            <div className={styles.Right}>
                <h1>SignUp</h1>
                <p>Email</p>
                <input type="email" placeholder="Email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
                <p>Password</p>
                <input type={showPassword ? "text" : "password"} placeholder="Password" value={formValues.password} onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                <div className={styles.checkbox}>
                    <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                    <label>Show Password</label>
                </div>
                <button onClick={handleSignIn}>Sign Up</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
}

export default SignUp;
