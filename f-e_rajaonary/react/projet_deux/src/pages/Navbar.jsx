import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/compteur">Compteur</Link></li>
        <li><Link to="/toDoList">To Do List</Link></li>
        <li><Link to="/eq1">Équation 1er degré</Link></li>
        <li><Link to="/eq2">Équation 2nd degré</Link></li>
        <li><Link to="/input">Input</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
