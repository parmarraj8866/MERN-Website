import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { NavLink } from "react-router-dom";

export default function WardrobeEssentials() {
  const [clothes, setClothes] = useState([]);
  const URL = import.meta.env.VITE_IMAGE_URL;
  async function getClothes() {
    const res = await Api.get("/api/clothes");
    setClothes(res.data.clothes);
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
    <div className="container my-5 ">
      <h3 className="text-center text-uppercase fw-normal mb-4 py-3">
        Wardrobe Essentials
      </h3>
      <div className="row g-2">
        <>
          {clothes.length != 0 ? (
            clothes?.map((ele, index) =>
              index > 3 ? (
                ""
              ) : (
                <div className="col-sm6 col-md-4 col-lg-3" key={index}>
                  <div className="shadow-sm border p-3">
                    <div
                      style={{
                        width: "100%",
                        height: "350px",
                        overflow: "hidden",
                        borderRadius: "5px",
                      }}
                      className="mb-2"
                    >
                      <img
                        src={`${URL}/${ele.cloth_image[0]}`}
                        alt={ele.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                        className="mb-2"
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-capitalize">{ele.name}</h5>

                      <p className="my-1 text-muted">
                        Category: {ele.category}
                      </p>

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
                        <NavLink
                          to={`/addtocart/${ele._id}`}
                          className="btn btn-success btn-sm"
                        >
                          Add to Cart
                        </NavLink>

                        <NavLink
                          to={`/singleProductview/${ele._id}`}
                          className="btn btn-dark btn-sm"
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <h2 className="text-center text-danger fw-bold my-5 border p-3 rounded shadow-sm">
              Product Not Available
            </h2>
          )}
        </>
      </div>
    </div>
  );
}
