// Dashboard.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



function Dashboard({  }) {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([
        { id: 1, text: "Drink 1 gallon of water", completed: false },
        { id: 2, text: "2 workouts (each 45 minutes)", completed: false },
        { id: 3, text: "Read 10 pages of non-fictional book", completed: false },
        { id: 4, text: "Maintain diet", completed: false }
    ]);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (!currentUser) navigate("/login");
        });
    }, [navigate]);

    useEffect(() => {
        // Update local storage whenever tasks state changes
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // useEffect(() => {
    //     if (tasks.every(task => task.completed)) {
    //         onAllTasksCompleted(true);

    //     }
    // }, [tasks, onAllTasksCompleted]);

    // const handleToggleComplete = (id) => {
    //     setTasks(tasks.map(task =>
    //         task.id === id ? { ...task, completed: !task.completed} : task
    //         ));
    // };

    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };


    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
