import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { useParams } from "react-router-dom";

export default function AboutProduct() {
  const [singleProduct, setsingleProduct] = useState([]);

  const { id } = useParams();
  const URL = import.meta.env.VITE_IMAGE_URL

  console.log(singleProduct);

  async function getSingleProduct() {
    const res = await Api.get(`/api/clothes/${id}`);
    console.log("res", res);
    setsingleProduct(res.data.cloth);
  }

  console.log(singleProduct);

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="product-card shadow-sm border rounded h-100">
        <div className="product-img">
          <img
            src={`${URL}/${singleProduct.cloth_image}`}
            alt={singleProduct.name}
          />
          <span className="discount-badge">{singleProduct.discount}% OFF</span>
        </div>

        <div className="card-body p-3">
          <h6 className="fw-bold text-capitalize mb-1">{singleProduct.name}</h6>
          <small className="text-muted">{singleProduct.category}</small>

          <div className="d-flex justify-content-between mt-2">
            <span>
              Color: <strong>{singleProduct.color}</strong>
            </span>
            <span>
              Size: <strong>{singleProduct.size?.toUpperCase()}</strong>
            </span>
          </div>

          <div className="mt-2">
            <span className="text-muted text-decoration-line-through me-2">
              ₹{singleProduct.price}
            </span>
            <span className="fw-bold text-success fs-5">
              {/* ₹{totalPrice(singleProduct.price, singleProduct.discount)} */}
            </span>
          </div>
        </div>

        <div className="card-footer bg-white border-0 p-3 pt-0">
          <div className="d-grid gap-2">
            <button className="btn btn-dark btn-sm">View Details</button>

            <div className="d-flex gap-2">
              <button
                onClick={() => trash(singleProduct._id)}
                className="btn btn-danger btn-sm w-50"
              >
                Remove
              </button>
              <a href="/" className="btn btn-outline-primary btn-sm w-50">
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
