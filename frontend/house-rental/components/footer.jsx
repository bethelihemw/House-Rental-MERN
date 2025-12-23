import React from "react"
// import "./Footer.css"
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section company">
          <h3>House Rental</h3>
          <p>
            Simplifying rentals by connecting property owners and renters in a safe
            and convenient platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Add Property</li>
            <li>My Property</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@houserental.com</p>
          <p>Phone: +251 900 000 000</p>
          {/* <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 House Rental. All rights reserved.</p>
      </div>
    </footer>
  )
}
