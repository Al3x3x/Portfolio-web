import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
    </div>
  );
};

export default Contact;
