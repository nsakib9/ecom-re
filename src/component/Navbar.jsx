import React from "react";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm bg-white">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" href="#">
            Ecommerce App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>

            </ul>
            <div className="buttons">
                <NavLink href="#" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"> Login</i></NavLink>
                <NavLink href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus"> Register</i></NavLink>
                <NavLink href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart "> Cart</i></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
