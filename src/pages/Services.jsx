import React from "react";
import Lottie from "lottie-react";
import servicesAnimation from "../assets/services.json"; // Add appropriate animation file
import { Building2, Ruler, Sparkle, ShieldCheck, Home, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Building2 size={32} className="text-blue-600" />,
    title: "Residential Design",
    desc: "Custom homes and living spaces designed to match your lifestyle and plot dimensions."
  },
  {
    icon: <LayoutDashboard size={32} className="text-blue-600" />,
    title: "Commercial Architecture",
    desc: "We deliver innovative commercial designs for offices, hotels, and retail spaces."
  },
  {
    icon: <Ruler size={32} className="text-blue-600" />,
    title: "3D Planning & Visualization",
    desc: "Visualize your future building with immersive 3D models and renders."
  },
  {
    icon: <Sparkle size={32} className="text-blue-600" />,
    title: "Interior Design",
    desc: "From minimalist to luxurious — we craft interiors that reflect your personality."
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: "Structural Consulting",
    desc: "We ensure your design is safe, functional, and compliant with local laws."
  },
  {
    icon: <Home size={32} className="text-blue-600" />,
    title: "Renovation Services",
    desc: "Transform existing spaces with smart and modern architectural solutions."
  }
];

const Services = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Our Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We offer a full suite of architectural solutions — from concept to creation.
        </motion.p>
      </section>

      {/* Animation */}
      <div className="w-full max-w-3xl mx-auto px-4 md:px-0 py-8">
        <Lottie animationData={servicesAnimation} loop />
      </div>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl p-6 rounded-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">🏆 Expertise & Experience</h4>
            <p>With over 10+ years of industry experience, we bring proven excellence in design & delivery.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">🚀 Innovative Solutions</h4>
            <p>We blend creativity with functionality to deliver innovative architectural solutions tailored to your needs.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">🤝 Client-Centric Approach</h4>
            <p>From consultation to construction — we work closely with you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream Project?</h2>
        <p className="text-lg mb-8">Let us turn your ideas into stunning architecture. Contact us today!</p>
        <a
          href="/design"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          🚀 Get a Free Design Quote
        </a>
      </section>
    </div>
  );
};

export default Services;
