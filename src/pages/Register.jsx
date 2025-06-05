import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnim from "../assets/register1.json";
import successAnim from "../assets/register2.json";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/register", formData);
      setSuccess(true);
      setTimeout(() => {
        navigate("/user-login");
      }, 3000);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
        
        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0">
          <Lottie
            animationData={success ? successAnim : registerAnim}
            loop={!success}
            className="w-full max-w-sm"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            👤 Create Your Account
          </h2>

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="🧑 Name"
                className="w-full border p-3 rounded-md shadow-sm"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="📧 Email"
                className="w-full border p-3 rounded-md shadow-sm"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="🔐 Password"
                className="w-full border p-3 rounded-md shadow-sm"
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                🚀 Register
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600 font-semibold text-lg">
              ✅ Registration Successful! Redirecting to login...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
