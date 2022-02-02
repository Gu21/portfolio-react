import React, { Component } from "react";


/* ******************** COMPONENT CLASS Name *************** */

class Name extends Component {
  render() {
    return (

      /* ******************** PROPS *************** */
      <>
  
        <div className="name">
          <div className="box-name-home">
            <p className="name-home"><strong>{this.props.name}</strong>{this.props.children}</p>
            </div> 
            <div  className="firstNam-home">
            <span className="firstName-home"><strong>{this.props.firstname}</strong></span>
            </div>
         </div>
      </>


    );
  }
}
export default Name;
