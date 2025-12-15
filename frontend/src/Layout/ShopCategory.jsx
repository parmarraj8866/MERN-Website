import React from "react";

export default function shopBycategory() {
  return (
    <div className="shopbycontainer my-5 py-2">
      <div>
        <h3 className="text-center fw-normal text-uppercase">Shop By Category</h3>
      </div>
      <div className=" d-flex justify-content-center mt-5 flex-wrap gap-3">
        <div className="box d-flex align-items-end justify-content-center">
          <button className=" text-uppercase mb-2">Shirts</button>
        </div>
        <div className="box2 d-flex align-items-end justify-content-center">
          <button className=" text-uppercase mb-2">Pants</button>
        </div>
        <div className="box3 d-flex align-items-end justify-content-center">
          <button className=" text-uppercase mb-2">Jackets</button>
        </div>
        <div className="box4 d-flex align-items-end justify-content-center">
          <button className=" text-uppercase mb-2">Denim</button>
        </div>
      </div>
    </div>
  );
}
