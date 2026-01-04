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

  async function add(ele) {
    // console.log(ele)
    const formData = new FormData();

    formData.append("name", ele.name);
    formData.append("category", ele.category);
    formData.append("color", ele.color);
    formData.append("size", ele.size);
    formData.append("price", ele.price);
    formData.append("discount", ele.discount);
    formData.append("gender", ele.gender);

    formData.append("cloth_image", ele.cloth_image[0]);

    await Api.post("/api/orderclothes", formData);
  }

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
      <div className="row g-2">
        {clothes?.map((ele, index) =>
          index > 3 ? (
            ""
          ) : (
            <div className="col-sm6 col-md-4 col-lg-3" key={index}>
              <div className="shadow-sm border p-3">
                <div
                  style={{
                    width: "100%",
                    height: "250px", 
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
                      objectFit: "cover",
                      display: "block",
                    }}
                    className="mb-2"
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
                  <div className="d-grid gap-2">
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
                          cloth_image: ele.cloth_image,
                        })
                      }
                      className="btn btn-success btn-sm"
                    >
                      Add to Cart
                    </button>

                    <NavLink to={`/singleProductview/${ele._id}`} className="btn btn-dark btn-sm">
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
