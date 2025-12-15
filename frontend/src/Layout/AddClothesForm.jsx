import React from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { useNavigate } from "react-router-dom";

export default function AddClothesForm() {
  const { register, handleSubmit, reset } = useForm();
const redirect = useNavigate()
  async function add(data) {
    await Api.post("/api/clothes", data);
    reset();
    redirect("/")
  }

  return (
    <div
      className="container w-50 my-5 shadow-sm p-5"
      style={{ backgroundColor: "#e2f1f1ff" }}
    >
      <form method="post" onSubmit={handleSubmit(add)}>
        <h3 className="fw-normal text-center">Create New Product </h3>
        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Name :</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name..."
            {...register("name")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Category : </label>

          <select {...register("category")} className="form-select">
            <option value="--Select Category--">--Select Category--</option>
            <option value="shirt">Shirt</option>
            <option value="pant">Pant</option>
            <option value="jacket">Jacket</option>
            <option value="denim">Denim</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Color : </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Color..."
            {...register("color")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Size : </label>

          <select {...register("size")} className="form-select">
            <option value="--Select Size--">--Select Size--</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="s">S</option>
            <option value="xl">XL</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Price : </label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Price..."
            {...register("price")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Discount : </label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Discount..."
            {...register("discount")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold"> Product Audience : </label>
          <select
            {...register("gender", { required: true })}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled>
              Select Audience
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div className="mb-2">
          <button className="btn btn-info me-2">Create Product</button>
          <a href="/" className="btn btn-dark">Back Home</a>
        </div>
      </form>
    </div>
  );
}
