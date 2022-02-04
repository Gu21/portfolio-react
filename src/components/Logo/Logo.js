import React from "react";
/* ******************** IMAGE LOGO *************** */
import logoGB from "../../assets/images/logo.png";




const Logo = () => {
  return (

    /* ******************** FRAGMENTS *************** */
    <>
          <div className="box-logo">
          <img id="logo-nav" srcset={logoGB} alt="logo GB" />   
          </div>
           
      </>
  );
};

export default Logo;
