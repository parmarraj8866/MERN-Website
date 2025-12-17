import React, { useEffect, useState } from "react";
import Api from "../Api/Api";

export default function WardrobeEssentials() {
  const [clothes, setClothes] = useState([]);

  async function getClothes() {
    const res = await Api.get("/api/clothes");
    setClothes(res.data.clothes);
  }

  async function add({ name, category, color, size, price, discount, gender }) {
    await Api.post("/api/orderclothes", {
      name,
      category,
      color,
      size,
      price,
      discount,
      gender,
    });
    alert("Added")
  }

  console.log(clothes);

  function totalPrice(price, discount) {
    const p = (price * discount) / 100;
    const finalPrice = Number(price) - p;
    return finalPrice;
  }

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center text-uppercase fw-normal mb-4">
        Wardrobe Essentials
      </h3>
      <div className="row g-5">
        {clothes?.map((ele, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
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
                <div className="d-grid gap-2">
                  <button className="btn btn-dark btn-sm">View Details</button>
                  <button
                    onClick={() =>
                      add({
                        name: ele.name,
                        category: ele.category,
                        color: ele.color,
                        size: ele.size,
                        price: ele.price,
                        discount: ele.discount,
                        gender: ele.gender,
                      })
                    }
                    className="btn btn-success btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
