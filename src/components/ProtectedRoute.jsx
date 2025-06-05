// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  // Check route path to decide which token to validate
  const isAdminRoute = location.pathname.includes("/admin");

  if (isAdminRoute && !adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAdminRoute && !userToken) {
    return <Navigate to="/user-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
