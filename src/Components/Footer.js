import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="Countries">
          <h4>Cities</h4>
          <ul>
            <li>Athens</li>
            <li>Barcelona</li>
            <li>Boston</li>
            <li>Chicago</li>
            <li>Copanhagen</li>
            <li>Denver</li>
            <li>Dubai</li>
            <li>HongKong</li>
            <li>Los Angeles</li>
            <li>Luxembourg</li>
            <li>Madrid</li>
            <li>Miami</li>
          </ul>
        </div>

        <div className="company-container">
          <div className="company">
            <h4>Company</h4>
            <ul>
              <li> About Us</li>
              <li> Your Experience</li>
              <li> Pricing</li>
              <li> Careers</li>
              <li>Press</li>
              <li>Partner with us</li>
              <li>Guest Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="guests-container">
          <div className="guests">
            <h4>Guests</h4>
            <ul>
              <li>Long Term Rentals</li>
              <li>For Business</li>
              <li>City Guides</li>
              <li>Blueprint Blog</li>
            </ul>
          </div>
          <div className="landlords-container">
            <div className="landlords">
              <h4>Landlords</h4>
              <ul>
                <li>Rent your Property</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="email-submission">
          <h3>Stay up to date</h3>
          <p>
            Get our latest news, exclusive deals, featured apartments and home
            inspiration
          </p>

          <form className="footer-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

        <div className="legal-links">
        <div className="homehaven-footer">
        <h2>HomeHaven</h2>
        </div>
        <ul>
          <li>
            <a href="/privacy">Privacy</a>
          </li>

          <li>
            <a href="/terms">Terms & Conditions</a>
          </li>

          <li>
            <a href="/cookies">Cookie Policy</a>
          </li>
        </ul>

        <div className="copyright">
          <p>CopyRight &copy; 2023 HomeHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
