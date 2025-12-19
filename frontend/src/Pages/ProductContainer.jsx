import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import SideLayout from "../Layout/SideLayout";

export default function ProductContainer(props) {
  const [clothes, setClothes] = useState([]);

  async function getClothes() {
    const res = await Api.get("/api/clothes");
    setClothes(res.data.clothes);
  }

  let title = props.name;

  const filterData = clothes.filter(
    (ele) => title.toLowerCase() == ele.category.toLowerCase()
  );

  function totalPrice(price, discount) {
    const p = (price * discount) / 100;
    const finalPrice = Number(price) - p;
    return finalPrice;
  }

  useEffect(() => {
    getClothes();
  }, []);
  return (
    <div className="productContainer mx-1 my-2 p-2 px-4">
      <div className="fixed-bottom" style={{ zIndex: "1" }}>
        <SideLayout name={props.name} />
      </div>
      <div style={{ marginLeft: "300px" }} className="border">
        <div className=" py-5 mx-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product..."
          />
        </div>
        <div className="">
          <div className="d-flex flex-wrap gap-3">
            {filterData?.map((ele, index) => (
              <div key={index}>
                <div className="shadow-sm border p-3">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{ele.name}</h5>

                    <p className="my-1 text-muted">Category: {ele.category}</p>

                    <p className="mb-1">Color: {ele.color}</p>

                    <p className="mb-1">Size: {ele.size?.toUpperCase()}</p>

                    <div>
                      <span className="text-decoration-line-through text-muted me-1">
                        ₹{ele.price}
                      </span>
                      <span className="fw-semibold text-success fs-5">
                        ₹{totalPrice(ele.price, ele.discount)}
                      </span>
                    </div>

                    <small className="text-danger">{ele.discount}% OFF</small>
                  </div>

                  <div className="card-footer bg-white border-0 mt-2">
                    <div className="d-flex gap-2">
                      <button className="btn btn-success btn-sm">
                        Add to Cart
                      </button>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>

                      {/* <button className="btn btn-warning btn-sm">Edit </button> */}
                      {/* <button
                      onClick={() => trash(ele._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove{" "}
                    </button> */}
                      <a href="/home" className="btn btn-dark btn-sm">
                        Back{" "}
                      </a>

                      {/* <button className="btn btn-dark btn-sm">View Details</button> */}

                      {/* <button className="btn btn-warning btn-sm">Edit Order</button> */}
                      {/* <button className="btn btn-danger btn-sm">Remove Order</button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
