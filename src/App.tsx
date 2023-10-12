import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import DoWorkout from './components/DoWorkout';
import DoActivity from './components/DoActivity';
import Home2 from './components/Home/Home2';
import WorkoutSummary from './components/WorkoutSummary/WorkoutSummary';
import Activity from './components/Activity/Activity';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/fitness-app' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/doWorkout/:workoutId?' element={<DoWorkout/>} />
        <Route path='/doActivity/:workoutId?/:activityId?' element={<DoActivity/>} />
        <Route path="/home2" Component={Home2} />
        <Route path='/workoutSummary/:workoutId?' Component={WorkoutSummary} />
        <Route path="/activity/:workoutId?/:activityId?" Component={Activity} />
      </Routes>
    </div>
  );
}

export default App;
