import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import WorkoutSummary from './components/WorkoutSummary/WorkoutSummary';
import ActivityDetail from './components/ActivityDetail/ActivityDetail';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/fitness-app' Component={Home} />
        <Route path='/' Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path='/workoutSummary/:workoutId?' Component={WorkoutSummary} />
        <Route path="/activity/:workoutId?/:activityId?" Component={ActivityDetail} />
      </Routes>
    </div>
  );
}

export default App;
