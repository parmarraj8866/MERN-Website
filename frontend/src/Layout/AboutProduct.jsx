import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { useParams } from "react-router-dom";

export default function AboutProduct() {
  const [singleProduct, setsingleProduct] = useState([]);

  const { id } = useParams();
  const URL = import.meta.env.VITE_IMAGE_URL;

  console.log(singleProduct);

  async function getSingleProduct() {
    const res = await Api.get(`/api/clothes/${id}`);
    console.log("res", res);
    setsingleProduct(res.data.cloth);
  }

  function totalPrice(price, discount) {
    const p = (price * discount) / 100;
    const finalPrice = Number(price) - p;
    return finalPrice;
  }

  console.log(singleProduct);

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="product-title my-4">Product Overview</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="product-single-card shadow-sm border rounded p-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-5">
                <div className="single-product-img text-center">
                  <img
                    src={`${URL}/${singleProduct.cloth_image}`}
                    alt={singleProduct.name}
                    className="img-fluid"
                  />
                  <span className="discount-badge">
                    {singleProduct.discount}% OFF
                  </span>
                </div>
              </div>

              <div className="col-md-7">
                <p className="product-line">
                  <strong className="me-2">Product Name :</strong>{" "}
                  {singleProduct.name}
                </p>

                <p className="product-line">
                  <strong className="me-2">Category :</strong>{" "}
                  {singleProduct.category}
                </p>

                <p className="product-line">
                  <strong className="me-2">Color :</strong>{" "}
                  {singleProduct.color}
                </p>

                <p className="product-line">
                  <strong className="me-2">Size :</strong>{" "}
                  {singleProduct.size?.toUpperCase()}
                </p>
                <p className="product-line">
                  <strong className="me-2">For :</strong> {singleProduct.gender}
                </p>

                <p className="product-line price-line">
                  <strong className="me-2">Price :</strong>
                  <span className="old-price">₹{singleProduct.price}</span>
                  <span className="new-price fs-4">
                    ₹{totalPrice(singleProduct.price, singleProduct.discount)}
                  </span>
                </p>

                <div className="mt-4">
                  <a href="/" className="btn btn-outline-primary px-4">
                    Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
