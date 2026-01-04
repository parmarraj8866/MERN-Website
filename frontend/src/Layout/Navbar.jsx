import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Api from "../Api/Api";

export default function Navbar() {
  const [id, setId] = useState(false);
  const [orderClothes, setorderClothes] = useState([]);
  let count = orderClothes?.length

  console.log(orderClothes)
  async function getorderClothes() {
    const res = await Api.get("/api/orderclothes");
    setorderClothes(res.data.orderList);
  }

  useEffect(() => {
    getorderClothes();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg  px-5 py-3 fadeInEffect sticky-top "
      // style={{ backgroundColor: "#f2f2f2ff"}}
      style={{ backgroundColor: "#f5f5f5ff" , zIndex : "100"}}
    >
      <a className="navbar-brand fs-3" href="/">
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
            <a className="nav-link fs-5 " href="/">
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
            <a className="nav-link fs-5 " href="/denim">
              Denim
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
          <li className="nav-item active d-flex align-items-center relative">
            <a href="/orderlist" className="text-decoration-none text-dark ">
              <FiShoppingCart className="fs-2" style={{ cursor: "pointer" }} />
            </a>
            <p
              className=" rounded-5 mx-3 d-flex align-items-center justify-content-center"
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                backgroundColor: "#ff0000ff",
                marginBottom: "40px",
              }}
            >
              <span className="fs-6 text-white fw-bold">
                {count}
              </span>
            </p>
          </li>
          <li className="mt-1">
            <a href="/create-product" className="btn btn-info">
              Create-Product
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
