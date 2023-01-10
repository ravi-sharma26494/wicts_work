import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__elements">
        <div className="navbar__elements--listings nav__items">
          <span><i className="fa-solid fa-bars" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">
            listings & Interface
          </span>
        </div>
        <div className="navbar__elements--data nav__items">
          <span><i className="fa-solid fa-database" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">Database</span>
        </div>
        <div className="navbar__elements--user nav__items">
          <span><i className="fa-solid fa-user-gear" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">
            User Management
          </span>
        </div>
        <div className="navbar__elements--analytics nav__items">
          <span><i className="fa-solid fa-chart-pie" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">Analytics</span>
        </div>
        <div className="navbar__elements--queries nav__items">
          <span><i className="fa-regular fa-circle-question" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">Queries</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
