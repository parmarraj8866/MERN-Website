import React from "react";
import { NavLink } from "react-router-dom";

export default function shopBycategory() {
  return (
    <div className="shopbycontainer my-5 py-2">
      <div>
        <h3 className="text-center fw-normal text-uppercase">
          Shop By Category
        </h3>
      </div>
      <div className=" d-flex justify-content-center mt-5 flex-wrap gap-3">
        <div className="box d-flex align-items-end justify-content-center">
          <NavLink to="/shirts" className="button text-decoration-none text-uppercase mb-2">Shirts</NavLink>
        </div>
        <div className="box2 d-flex align-items-end justify-content-center">
          <NavLink to="/pants" className="button text-decoration-none text-uppercase mb-2">Pants</NavLink>
        </div>
        <div className="box3 d-flex align-items-end justify-content-center">
          <NavLink to="/jackets" className="button text-decoration-none text-uppercase mb-2">Jackets</NavLink>
        </div>
        <div className="box4 d-flex align-items-end justify-content-center">
          <NavLink to="/denim" className="button text-decoration-none text-uppercase mb-2">Denim</NavLink>
        </div>
      </div>
    </div>
  );
}
