import React, { useEffect, useState, useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import Api from "../Api/Api";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import fasionAddaimg from "../assets/images/FasionAdda Logo.png";

export default function Navbar() {
  const [id, setId] = useState(false);
  const { orderClothes } = useContext(CartContext);
  let count = orderClothes?.length;
  let redirect = useNavigate();

  async function logout() {
    const res = await Api.get("/api/user/logout");
    if (res.data.success) {
      alert(res.data.message);
      redirect("/login");
    } else {
      alert(res.data.message);
    }
  }

  async function user() {
    const res = await Api.get("/api/user/checkAuth");
    if (res.data.success) {
      setId(res.data.success);
    } else {
      setId(res.data.success);
    }
  }

  useEffect(() => {
    user();
  }, []);

  return (
    <nav
      className="navbar nav navbar-expand-lg fadeInEffect sticky-top "
      // style={{ backgroundColor: "#f2f2f2ff"}}
      style={{ backgroundColor: "#f5f5f5ff", zIndex: "100" }}
    >
      <a className="navbar-brand fs-3 d-flex align-items-center" href="/">
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          src={fasionAddaimg}
          alt=""
          className="me-2"
        />
        <span>FashionAdda</span>
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
                // <button className="btn btn-danger">Logout</button>
                <>
                  <div onClick={logout}>
                    <FiLogOut className="fs-4 me-1" />
                    <span className="text-danger">Logout</span>
                  </div>
                </>
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
              <span className="fs-6 text-white fw-bold">{count || 0}</span>
            </p>
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
