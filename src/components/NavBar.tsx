import React, { useState} from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import avatar1 from "../images/avatars/avatar1.svg";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  
  const closeMenu = () => {
    setNavbarOpen(false)
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
      {
        navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />

        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <Link to="/" onClick={() => closeMenu()}>Home</Link>
        <Link to="/settings" onClick={() => closeMenu()}>Settings</Link>
        <Link to="/addActivity" onClick={() => closeMenu()}>Add Activity</Link>
      </ul>
      <div>
        <Link to="/settings" onClick={() => closeMenu()}>
          <img alt="User's avatar" src={avatar1}></img>
          {/* TODO: Pull this from a user's settings */}
        </Link>
      </div>
      
    </nav>
  );
}

export default NavBar;
