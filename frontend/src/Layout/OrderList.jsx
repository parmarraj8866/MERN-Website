import React, { useEffect, useState } from "react";
import Api from "../Api/Api";

export default function OrderList() {
  const [orderClothes, setorderClothes] = useState([]);

  console.log(orderClothes);
  async function getorderClothes() {
    const res = await Api.get("/api/orderclothes");
    setorderClothes(res.data.orderList);
  }

  const URL = import.meta.env.VITE_IMAGE_URL

  let total = 0;
  for (var i in orderClothes) {
    let price = orderClothes[i].price;
    const p = (price * orderClothes[i].discount) / 100;
    const finalPrice = Number(price) - p;
    total += finalPrice;
  }

  function totalPrice(price, discount) {
    const p = (price * discount) / 100;
    const finalPrice = Number(price) - p;
    return finalPrice.toFixed(2);
  }

  async function trash(id) {
    await Api.delete(`/api/orderclothes/${id}`);
    getorderClothes();
  }

  useEffect(() => {
    getorderClothes();
  }, []);
  return (
    <div>
      <div
        className="d-flex justify-content-between mt-5 fw-normal mx-5 py-1 "
        style={{ borderBottom: "2px solid #131313ff" }}
      >
        <h2>OrderList</h2>
        <h2>
          Total Order's :{" "}
          <span className="text-danger fw-bold">{orderClothes.length}</span>
        </h2>
        <h2>
          Total Amount :{" "}
          <span className="text-success fw-bold">₹{total.toFixed(2)}</span>
        </h2>
      </div>

      <div className="container my-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div className="flex-grow-1 me-2">
            <input
              type="text"
              className="form-control border-success"
              placeholder="Search orders..."
            />
          </div>

          <div className="d-flex gap-2 ">
            <select className="form-select border-success">
              <option value="" disabled selected>
                Sort by Name
              </option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>

            <select className="form-select border-success">
              <option value="" disabled selected>
                Sort by Price
              </option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-2">
          {orderClothes?.map((ele, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="shadow-sm border p-3">
                <div
                  style={{ width: "100%", height: "100%"}}
                >
                  <img
                    className="mb-2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={`${URL}/${ele.cloth_image[0]}`}
                    alt=""
                  />
                </div>
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
                    <button className="btn btn-dark btn-sm">
                      View Details
                    </button>

                    {/* <button className="btn btn-warning btn-sm">Edit </button> */}
                    <button
                      onClick={() => trash(ele._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove{" "}
                    </button>
                    <a href="/" className="btn btn-primary btn-sm">
                      Back{" "}
                    </a>

                    {/* <button className="btn btn-dark btn-sm">View Details</button>
                  <button className="btn btn-success btn-sm">
                    Add to Cart
                  </button>
                         <button className="btn btn-warning btn-sm">Edit Order</button>
                  <button className="btn btn-danger btn-sm">Remove Order</button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
