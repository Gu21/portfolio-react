import React, { useState } from "react";
/* ******************** ROUTER *************** */
import { NavLink } from "react-router-dom";
/* ******************** ICON *************** */
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
/* ******************** DATA *************** */
import { NavData } from "../../data/NavData";




     /* ************ FUNCTIONAL COMPONENT ******** */

const Navigation = () => {

  /* ******************** USESTATE *************** */
  const [sideBar, setSideBar] = useState(false);
  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(false);

  const showSidebar = () => {
    setSideBar(!sideBar);
    setIcon1(!icon1);
    setIcon2(!icon2);
  };

  return (
    <header>
   
        {/* ********************  MENU *************** */}

        {/* ******************** BUTTON NAV BURGER *************** */}

        <nav>
          <NavLink to="#" onClick={showSidebar} className="toggle-button">
            {icon1 ? <FaBars /> : null}
          </NavLink>

             {/* *************** END ***** BUTTON NAV BURGER *************** */}

          {/* ******************** BUTTON NAV CLOSE *************** */}

          <div className={`side-bar ${sideBar ? "side-bar active" : "side-bar"}`}>
            <NavLink to="#" onClick={showSidebar} className="menu-bar">
              {icon2 ? <AiOutlineClose /> : null}
            </NavLink>

             {/* ***************** END *** BUTTON NAV CLOSE *************** */}

            {/* ******************** BAR NAV *************** */}

            <ul className="nav-menu-item">
              {NavData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>

            {/* **************** END *** BAR NAV *************** */}
          </div>
        </nav>

        {/* ***************** END ***  MENU *************** */}
      {/* </div> */}
    </header>
  );
};

export default Navigation;
