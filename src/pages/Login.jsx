import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnim from "../assets/login.json";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", formData);
      localStorage.setItem("userToken", res.data.token);
      const nameOrInitial = res.data.name || formData.email[0].toUpperCase();
      localStorage.setItem("userName", nameOrInitial);
      navigate("/");
    } catch (err) {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">

        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0">
          <Lottie
            animationData={loginAnim}
            loop
            className="w-full max-w-sm"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">🔐 User Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              value={formData.email}
              className="w-full border p-3 rounded-md shadow-sm"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="🔑 Password"
              value={formData.password}
              className="w-full border p-3 rounded-md shadow-sm"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              🚀 Login
            </button>
          </form>

          {error && (
            <div className="text-red-600 text-center mt-4 font-medium">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
