import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-5 shadow-sm py-3 sticky-top fadeInEffect"
      style={{ backgroundColor: "white" }}
    >
      <a className="navbar-brand fs-3" href="#">
        FashionAdda
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto gap-4">
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="#">
              Shirts
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="#">
              Pants
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="#">
              Jackets
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="#">
              Contact
            </a>
          </li>
          <li
            className="nav-item active d-flex align-items-center " 
            style={{ cursor: "pointer" }}
          >
            <FaCircleUser className="fs-3" />
            <span className="mx-2">Login </span>
          </li>
          <li className="nav-item active d-flex align-items-center">
            <FiShoppingCart
              className="fs-3"
              style={{ cursor: "pointer" }}
            />
          </li>
          <li className="mt-1"><a href="/create-product" className="btn btn-info">Create-Product</a></li>
        </ul>
      </div>
    </nav>
  );
}
