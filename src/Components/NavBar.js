import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">HomeHaven</h1>
       
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}/>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link className="nav-links-mobile" to="/SignUp">
              <button className="signup-button">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
