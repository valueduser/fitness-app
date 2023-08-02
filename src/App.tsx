import React from "react";
import "./App.css";
import Home from "./components/Home.tsx";
import Settings from "./components/Settings.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import AddWorkout from "./components/AddWorkout.tsx";
import AddActivity from "./components/AddActivity.tsx";
import EditWorkout from "./components/EditWorkout.tsx";
import DoWorkout from "./components/DoWorkout.tsx";
import DoActivity from "./components/DoActivity.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/fitness-app" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/addWorkout" element={<AddWorkout/>} />
        <Route path="/addActivity" element={<AddActivity/>} />
        <Route path="/editWorkout/:workoutId?" element={<EditWorkout/>} />
        <Route path="/doWorkout/:workoutId?" element={<DoWorkout/>} />
        <Route path="/doActivity/:workoutId?/:activityId?" element={<DoActivity/>} />
      </Routes>
    </div>
  );
}

export default App;
