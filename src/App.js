import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import Motivation from "./pages/Motivation";
import Diet from "./pages/Diet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Dashboard/Tracker" element={<Tracker />} />
        <Route exact path="/Dashboard/Motivation" element={<Motivation />} />
        <Route exact path="/Dashboard/Diet" element={<Diet />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;