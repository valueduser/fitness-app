import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { Redirect, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/addWorkout" component={AddWorkout} />
        <Route exact path="/addActivity" component={AddActivity} />
        <Route path="/editWorkout/:workoutId?" component={EditWorkout} />
        <Route path="/doWorkout/:workoutId?" component={DoWorkout} />
        <Route path="/doActivity/:workoutId?/:activityId?" component={DoActivity} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
