import React, { Component } from "react";

 /* ******************** COMPONENT CLASS Name *************** */

class Name extends Component {
  render() {
    return (
      
       /* ******************** PROPS *************** */
       <>
      
       <div className="name">
          <p className="name-home"><strong>{this.props.name}</strong>{this.props.children}</p> 
          <span className="firstName-home"><strong>{this.props.firstname}</strong></span>
        </div>
     
      
       
       </>
        

    );
  }
}
export default Name;
