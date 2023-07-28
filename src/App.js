import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddWorkout from "./components/AddWorkout";
import AddActivity from "./components/AddActivity";
import EditWorkout from "./components/EditWorkout";
import DoWorkout from "./components/DoWorkout";
import DoActivity from "./components/DoActivity";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/fitness-app" element={<Home/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/settings" element={<Settings/>} />
        <Route exact path="/addWorkout" element={<AddWorkout/>} />
        <Route exact path="/addActivity" element={<AddActivity/>} />
        <Route path="/editWorkout/:workoutId?" element={<EditWorkout/>} />
        <Route path="/doWorkout/:workoutId?" element={<DoWorkout/>} />
        <Route path="/doActivity/:workoutId?/:activityId?" element={<DoActivity/>} />
      </Routes>
    </div>
  );
}

export default App;
