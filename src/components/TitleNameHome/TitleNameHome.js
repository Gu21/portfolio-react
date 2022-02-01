import React from 'react';
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Name from "../Name/Name";
import TitleHome from "../TitleHome/TitleHome";
import LogoGB from "../Logo/Logo";



export default function TitleNameHome() {

   /* ******************** STYLIZE SVG  *************** */

  let iconStyles = { color: "white", fontSize: "1em", verticalAlign: "middle" };

  return (

    <>

      {/* ******************** NAME and PROPS and CHILDREN / LOGO GB /  TITLE HOME and PROPS *************** */}
      <NavLink to="/">
        <Name name="Guillaume" firstname="BISSON">
          <LogoGB />
        </Name>
      </NavLink>
      <LogoGB />
      <TitleHome
        title="web developer"
        spanTitleDev="hello and welcome "
        subspanTitleDev=" to my portfolio 2022"
      />
      {/* ******************** SCROLL DOWN  *************** */}
      <div className="scroll-down">
        <p className="scroll-explore">scroll to explore</p>
        <div className="scroll-arrow">
          <FaLongArrowAltRight style={iconStyles} />
        </div>
      </div>

    </>

  );
}
