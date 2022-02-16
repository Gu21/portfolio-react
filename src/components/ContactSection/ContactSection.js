import React from "react";
import FormContact from "../FormContact/FormContact";
import ContactInfo from "../ContactInfo/ContactInfo";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <div className="container-contact">
        <div className="contact">
          <h5>contact</h5>
          <h2>Feel free to reach out to me any time.</h2>
        </div>
        <div className="form-contact-section">
          <div className="contact-section-left">
            <ContactInfo />
            <ContactInfo  icon={<FaEnvelope />} text={"bisson_guillaume@yahoo.fr"} />
            <ContactInfo icon={<FaMapMarkerAlt />} text={"Allaire, Brittany"} />
          </div>
          <div className="form-contact-group">
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactSection;
