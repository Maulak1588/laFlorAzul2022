import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="container mt-2 ">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <NavLink className="navbar-brand" to="/">
          <img src="/logo192.png" height="100px" alt="Logo" /> La Flor Azul
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              
              <NavLink to="/clasicos">Clásicos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contemporaneos">Contemporáneos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/notas">Notas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/epistolas">Epístolas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ruleta">Ruleta</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/quienes">Quienes somos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
