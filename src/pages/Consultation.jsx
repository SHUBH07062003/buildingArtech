// src/pages/Consultation.jsx
import React, { useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("📅 Consultation request submitted!");
    setFormData({
      name: "",
      phone: "",
      preferredDate: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          📅 Book a Free Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="👤 Your Name"
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="📞 Phone Number"
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="💬 Your Message (optional)"
            rows={4}
            className="w-full border p-3 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            ✅ Submit Consultation Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Consultation;
