// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/architecture.json";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Rahul Verma",
    feedback:
      "Absolutely stunning design service! My home turned out exactly how I imagined it.",
  },
  {
    name: "Priya Mehta",
    feedback:
      "Professional and timely. They walked me through the entire process with clarity.",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Bring Your <span className="text-blue-600">Architecture Vision</span> to Life
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              We provide premium architectural design services tailored to your style,
              budget, and plot.
            </p>
            <button
              onClick={() => navigate("/design")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Start Your Design
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Lottie animationData={animationData} loop />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Custom Floor Plans</h3>
            <p>
              We design based on your land dimensions, sunlight orientation, and budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">3D Visualizations</h3>
            <p>
              Visualize your project in 3D before it’s built—get multiple design options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Expert Consultation</h3>
            <p>
              Work directly with experienced architects to refine your vision remotely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">1. Share Your Plot & Budget</h4>
            <p>Send us plot size, facing & location along with your requirements.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">2. We Design</h4>
            <p>Our architects create concepts, floor plans, and design elevations.</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">3. Review & Feedback</h4>
            <p>We send you previews for approval and revise as needed.</p>
          </div>
          <div className="bg-blue-300 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">4. Get Your Files</h4>
            <p>Receive PDF blueprints, 3D views, and consultation for next steps.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold text-blue-600">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-blue-600 text-white text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream?</h2>
        <p className="mb-6">
          Start designing with our team of expert architects today.
        </p>
        <button
          onClick={() => navigate("/design")}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
        >
          Start Now
        </button>
      </section>
    </div>
  );
};

export default Hero;
