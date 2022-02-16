import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Ptext from "../Ptex/Ptext";

const ContactInfo = ({ text = "+330671610892", icon = <FaPhoneAlt /> }) => {
  return (
    <>
     
        <div className="contact-info">
          <div className="icon-tel">{icon}</div>
          <div className="contact-section-text">
            <p><Ptext>{text}</Ptext></p>
          </div>
        </div>
     
    </>
  );
};
export default ContactInfo;
