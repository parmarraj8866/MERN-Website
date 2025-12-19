import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [id, setId] = useState(false);

  const redirect = useNavigate()
  
  return (
    <nav
      className="navbar navbar-expand-lg  px-5 py-3 sticky-top fadeInEffect"
      // style={{ backgroundColor: "#f2f2f2ff"}}
      style={{ backgroundColor: "#f5f5f5ff"}}
    >
      <a className="navbar-brand fs-3" href="/home">
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
            <a className="nav-link fs-5 " href="/home">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="/shirts">
              Shirts
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="/pants">
              Pants
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="/jackets">
              Jackets
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link fs-5 " href="/contact">
              Contact
            </a>
          </li>
          <li
            className="nav-item active d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div>
              {id == false ? (
                <>
                  <a href="/login" className="text-decoration-none text-dark ">
                    <FaCircleUser className="fs-3" />
                  </a>
                  <a
                    href="/login"
                    className="text-decoration-none text-dark mx-1"
                  >
                    Login
                  </a>
                </>
              ) : (
                <button className="btn btn-danger">Logout</button>
              )}
            </div>
          </li>
          <li className="nav-item active d-flex align-items-center">
            <a href="/orderlist" className="text-decoration-none text-dark">
              <FiShoppingCart className="fs-3" style={{ cursor: "pointer" }} />
            </a>
          </li>
          {/* <li className="mt-1">
            <a href="/create-product" className="btn btn-info">
              Create-Product
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
