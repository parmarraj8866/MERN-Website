import React from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();

  async function signup(data) {
    try {
      const res = await Api.post("/api/user/signup", data);
      console.log(res);
      if (res.data.success) {
        alert(res.data.message);
        reset();
        redirect("/login");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  }
return (
  <div className="signup-wrapper">
    <div className="signup-card shadow-sm border rounded p-5">
      <form method="post" onSubmit={handleSubmit(signup)}>

        <h3 className="fw-bold text-center mb-2">Create Your Account</h3>
        <p className="text-center text-muted mb-4">Join our wardrobe community</p>

        {/* Username */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="signupUsername"
            placeholder="Username"
            {...register("username")}
          />
          <label htmlFor="signupUsername">Username</label>
        </div>

        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="signupEmail"
            placeholder="Email"
            {...register("email")}
          />
          <label htmlFor="signupEmail">Email address</label>
        </div>

        {/* Password */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            placeholder="Password"
            {...register("password")}
          />
          <label htmlFor="signupPassword">Password</label>
        </div>

        {/* Mobile Number */}
        <div className="form-floating mb-4">
          <input
            type="number"
            className="form-control"
            id="signupMobile"
            placeholder="Mobile Number"
            {...register("mobile")}
          />
          <label htmlFor="signupMobile">Mobile Number</label>
        </div>

        {/* Signup Button */}
        <button type="submit" className="btn btn-success w-100 py-2 mb-3">
          Signup
        </button>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-muted">Already have an account?</span>{" "}
          <a href="/login" className="fw-bold text-success">Login</a>
        </div>

      </form>
    </div>
  </div>
);

}
