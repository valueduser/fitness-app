import React from 'react';
import './App.css';
import Home from './components/Home';
import Settings from './components/Settings';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddWorkout from './components/AddWorkout';
import DoWorkout from './components/DoWorkout';
import DoActivity from './components/DoActivity';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/fitness-app' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/addWorkout' element={<AddWorkout/>} />
        <Route path='/doWorkout/:workoutId?' element={<DoWorkout/>} />
        <Route path='/doActivity/:workoutId?/:activityId?' element={<DoActivity/>} />
      </Routes>
    </div>
  );
}

export default App;
