import React from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();

  async function login(data) {
    try {
      const res = await Api.post("/api/user/login", data);
      if (res.data.success) {
        alert(res.data.message);
        reset();
        redirect("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  }
return (
  <div className="login-wrapper">
    <div className="login-card shadow-sm border rounded p-5">
      <form method="post" onSubmit={handleSubmit(login)}>
        <h3 className="fw-bold text-center mb-4">Welcome Back!</h3>
        <p className="text-center text-muted mb-4">Login to access your wardrobe</p>

        {/* Email */}
        <div className="form-floating mb-4">
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Enter Email"
            {...register("email")}
          />
          <label htmlFor="loginEmail">Email address</label>
        </div>

        {/* Password */}
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Enter Password"
            {...register("password")}
          />
          <label htmlFor="loginPassword">Password</label>
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-success w-100 py-2 mb-3">
          Login
        </button>

        {/* Signup link */}
        <div className="text-center">
          <span className="text-muted">Don't have an account?</span>{" "}
          <a href="/signup" className="fw-bold text-success">
            Signup
          </a>
        </div>
      </form>
    </div>
  </div>
);

}
