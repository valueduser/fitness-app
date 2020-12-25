import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/addWorkout">AddWorkout</Link></li>
      <li><Link to="/addActivity">AddActivity</Link></li>
    </ul>
  );
}

export default NavBar;