import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            New Ecommerce
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Login
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
