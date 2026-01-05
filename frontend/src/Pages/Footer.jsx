import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { MdCall, MdOutlineAccessTime, MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="shop-footer mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 col-lg-3 mb-4">
            <h5>Shop</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shirt</a>
              </li>
              <li>
                <a href="#">Pants</a>
              </li>
              <li>
                <a href="#">Jackets</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 mb-4">
            <h5>Policy</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Accessibility Statement</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <h5>Contact</h5>
            <ul className="footer-links">
              <li>
                <FaLocationDot className="mb-1 me-2" />
                Ahmedabad, India
              </li>
              <li>
                <MdCall className="mb-1 me-2" />
                +91 8866856418
              </li>
              <li>
                <MdOutlineEmail className="mb-1 me-2" /> support@fashionadda.com
              </li>
              <li>
                <MdOutlineAccessTime className="mb-1 me-2" /> Mon - Sat: 9AM -
                8PM
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center copyright">
          © 2026 YourShop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
