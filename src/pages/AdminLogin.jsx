import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import adminAnim from "../assets/adminlogin.json";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        username,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("❌ Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-200 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
        
        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0">
          <Lottie animationData={adminAnim} loop className="w-full max-w-sm" />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full space-y-5"
        >
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-2">🔐 Admin Login</h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded text-center">
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="👤 Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="🔑 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            🚀 Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
