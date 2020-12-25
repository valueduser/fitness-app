import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Settings from "./components/Settings";
import { Route, Link, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddWorkout from "./components/AddWorkout";
import AddActivity from "./components/AddActivity";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/addWorkout" component={AddWorkout} />
      <Route exact path="/addActivity" component={AddActivity} />      
    </div>
  );
}

export default App;
