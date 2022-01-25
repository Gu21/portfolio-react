import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavData } from "../NavData/NavData";
import Logo from "../Logo/Logo";

const Navigation = () => {
  const [sideBar, setSideBar] = useState(false);
  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(false);

  const showSidebar = () => {
    setSideBar(!sideBar);
    setIcon1(!icon1);
    setIcon2(!icon2);
  };

  return (
    <div className="bg-1">
      <Logo />
      <NavLink to="#" onClick={showSidebar} className="toggle-button">
        {icon1 ? <FaBars /> : null}
      </NavLink>

      <nav className={`side-bar ${sideBar ? "side-bar active" : "side-bar"}`}>
        <NavLink to="#" onClick={showSidebar} className="menu-bar">
          {icon2 ? <AiOutlineClose /> : null}
        </NavLink>

        <ul className="nav-menu-item">
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
