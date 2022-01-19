import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
      <NavLink to="/" >
            <li> Guillaume<span>BISSON</span></li>
          </NavLink>
      </div>

      <div className="navigation">
        <div className="toggle-button" id="toggle-button">
          <span> </span> <span> </span> <span> </span>{" "}
        </div>
        <ul>
          <NavLink to="/" className="hover" activeClassName="nav-active">
            <li> Accueil </li>
          </NavLink>
          <NavLink to="/About" className="hover" activeClassName="nav-active">
            <li> About ME</li>
          </NavLink>
          <NavLink to="/projets" className="hover" activeClassName="nav-active">
            <li> projets </li>
          </NavLink>
          <NavLink to="/contact" className="hover" activeClassName="nav-active">
            <li> Contact </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
