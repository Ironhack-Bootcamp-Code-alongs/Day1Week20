import React from "react";
import "./nav.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  //
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="links">
            <Link to="/add">Add new product</Link>
            <Link to="/all">All my products</Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
