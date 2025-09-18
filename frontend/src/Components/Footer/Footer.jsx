import React from "react";
import "./Footer.css";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>logo</h1>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <RiInstagramFill />
        </div>

        <div className="footer-icon-container">
          <RiFacebookFill />
        </div>

        <div className="footer-icon-container">
          <RiPinterestFill />
        </div>

        <div className="footer-icon-container">
          <RiWhatsappFill />
        </div>

        <div className="footer-icon-container">
          <RiLinkedinBoxFill />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
