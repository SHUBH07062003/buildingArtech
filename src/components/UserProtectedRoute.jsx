import React from "react";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  return userToken ? children : <Navigate to="/user-login" replace />;
};

export default UserProtectedRoute;
