import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [state,setState] = useState('');
  return (
    <div className="navbar__main">
      <div className="navbar__elements">
        <NavLink to="/" className="navbar__elements--listings nav__items">
          <i className="fa-solid fa-bars"/>&nbsp;&nbsp;
          Listings & Interface
          </NavLink>

        <NavLink to="/databaseinfo" className="navbar__elements--data nav__items">
          <i className="fa-solid fa-database"/>&nbsp;&nbsp;
          Database
        </NavLink>
        <NavLink to="/usermanagement" className="navbar__elements--data nav__items">
          <i className="fa-solid fa-user-gear"/>&nbsp;&nbsp;
          User Management
        </NavLink>
        <NavLink to="/analytics" className="navbar__elements--analytics nav__items">
          <i className="fa-solid fa-chart-pie"/>&nbsp;&nbsp;
          Analytics
        </NavLink>
        <NavLink to="/queries" className="navbar__elements--queries nav__items">
          <i className="fa-regular fa-circle-question"/>&nbsp;&nbsp;
          Queries
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
