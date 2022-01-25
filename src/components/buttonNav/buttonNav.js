import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

class ButtonNav extends Component {

state = {

chanheButton: false,


}
  render() 
  {

let Handlechange = e => {

  this.setState({chanheButton:!this.state.chanheButton});
}




    return (
      <div>
        <NavLink to="#"  onClick={Handlechange} className="toggle-button">
          <FaBars />
        </NavLink>
        <NavLink to="#" className="menu-bar">
          <AiOutlineClose />
        </NavLink>
      </div>
    );
  }
}
export default ButtonNav;
