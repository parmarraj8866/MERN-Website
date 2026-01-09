import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { Navigate, Outlet } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function PrivateRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function checkAuth() {
    try {
      const res = await Api.get("/api/user/checkAuth");
      console.log(res.data);
      if (res.data.success) {
        setUser(res.data.user);
        setLoading(false);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ height: "50vh" }}
      >
        <ClipLoader color="#3498db" size={70} />
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
}
