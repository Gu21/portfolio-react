import React from "react";
import { NavLink } from "react-router-dom";
import logoGB from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
        <NavLink to="/">
          <img className="logo-nav" src={logoGB} alt="logo" />
        </NavLink>
      </div>
  );
};

export default Logo;
