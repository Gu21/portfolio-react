import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
import { NavData } from "./NavData";

const Navigation = () => {
  const [sideBar, setSideBar] = useState(false);
 


  const showSidebar = () => {
    setSideBar(!sideBar);
 
  };



  return (
    <header className="bg-1">
      {/* <div className="side-bar">
        <Link to="#" onClick={showSidebar} className="toggle-button">
          <AiOutlineBars />
        </Link>
      </div>

      <nav className={`side-bar ${sideBar ? "nav-menu active" : "nav-menu "}`}>
        <ul onClick={showSidebar} className="nav-menu-items">
          <li>
            <Link className="toggle-button">
              <AiOutlineClose />
            </Link>
          </li>

          {
            //Affichage items barre de navigation

            NavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })
          }
        </ul>
      </nav> */}

      <div className="navbar">
      
        <NavLink to="#" onClick={showSidebar}  className=".toggle-button">
          {/* <FaBars onClick={showSidebar} /> */} 
          <div className="box-toggle">
          <span></span>
          <span></span>
          <span></span>
          </div>
        </NavLink>        
      </div>

      <nav className={`side-bar ${sideBar ? "side-bar active" : "side-bar"}`}>
      {/* <nav className={sideBar ? "side-bar active" : "side-bar"}> */}
        <ul className="nav-menu-item">
          {/* <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <AiOutlineClose />
            </NavLink>
          </li> */}

          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
          {/* <NavLink to="/" className="hover">
            <li> Accueil </li>
          </NavLink>
          <NavLink to="/About" className="hover">
            <li> About ME</li>
          </NavLink>
          <NavLink to="/projets" className="hover">
            <li> projets </li>
          </NavLink>
          <NavLink to="/contact" className="hover">
            <li> Contact </li>
          </NavLink> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
