import React from "react";
import { NavLink } from "react-router-dom";
import logoGB from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
        <NavLink to="/">
          <img className="logo-nav" src={logoGB} alt="logo" />
        </NavLink>
      </>
  );
};

export default Logo;
