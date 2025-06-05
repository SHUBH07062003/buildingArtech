import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json"; // Ensure this exists

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("📩 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Animation */}
        <div className="hidden md:block">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
            📬 Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="👤 Your Name"
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="📧 Your Email"
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="💬 Your Message"
              rows={5}
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-24 bg-blue-100 rounded-2xl p-8 md:p-12 shadow-md text-center max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Let’s Build Something Great Together
        </h3>
        <p className="text-gray-600 mb-6 text-lg max-w-3xl mx-auto">
          Whether you’re planning your dream home, office, or something unique — our expert architects are here to bring your vision to life. Let’s start the journey!
        </p>
        <Link to="/consultation">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
            📞 Book a Free Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
