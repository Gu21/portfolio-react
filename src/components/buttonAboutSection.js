import React from 'react';
import { NavLink } from 'react-router-dom';

const buttonAboutSection = ({ btnLink, btnText }) => {
    return (

        <div className="button-about">
       
        <NavLink className="button" to={ btnLink}>
            {btnText}
            </NavLink>
      
        
        </div>
    )

}


export default buttonAboutSection