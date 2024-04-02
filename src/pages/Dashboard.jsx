import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";
function Dashboard() {
    const navigate = useNavigate(); // Call useNavigate to get the navigate function

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
    });

    return (
        <div>
            <Navbar/>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;