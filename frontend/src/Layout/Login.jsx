import React from "react";

export default function Login() {
  return (
    <div className="container shadow-sm border my-5 rounded p-5 w-50 ">
      <form method="post">
        <h3 className="fw-normal text-center mb-4">User Login </h3>
        <div className="mb-4">
          <label className="form-label fw-bold"> Email : </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email..."
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold"> Password : </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password..."
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-success me-1">Login</button>
          <a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  );
}
