import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__elements">
        <div className="navbar__elements--listings nav__items">
          <span><i className="fa-solid fa-bars" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">
            <Link to="/">listings & Interface</Link>
          </span>
        </div>
        <div className="navbar__elements--data nav__items">
          <span><i className="fa-solid fa-database" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items"><Link to="/databaseinfo">Database</Link></span>
        </div>
        <div className="navbar__elements--user nav__items">
          <span><i className="fa-solid fa-user-gear" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items">
          <Link to="/usermanagement">User Management</Link>
          </span>
        </div>
        <div className="navbar__elements--analytics nav__items">
          <span><i className="fa-solid fa-chart-pie" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items"><Link to="/analytics">Analytics</Link></span>
        </div>
        <div className="navbar__elements--queries nav__items">
          <span><i className="fa-regular fa-circle-question" style={{color:"#747678"}}></i></span>
          <span className="navbar__elements--text nav__items"><Link to="/queries">Queries</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
