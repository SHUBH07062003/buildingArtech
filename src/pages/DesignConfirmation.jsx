import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import designAnimation from "../assets/design.json"; // same animation you're using

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="w-72 md:w-96 mb-6">
        <Lottie animationData={designAnimation} loop={false} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-4">
        🎉 Thank You for Your Request!
      </h1>
      <p className="text-gray-700 text-center text-lg mb-8 max-w-md">
        Our architectural team has received your design request. We'll review your preferences and get back to you soon!
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        🔙 Back to Home
      </Link>
    </section>
  );
};

export default ThankYou;
