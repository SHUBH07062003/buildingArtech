import React from "react";
import Lottie from "lottie-react";
import aboutVision from "../assets/about.json";
import aboutTeam from "../assets/about-team.json";
import aboutMission from "../assets/about-mission.json";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-6 md:px-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">🏢 About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building Dreams, Shaping Skylines – We design spaces that inspire.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">🎯 Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to deliver cutting-edge architectural solutions that reflect both functionality and aesthetics.
            We believe in designing with purpose – whether it’s a cozy home or a towering commercial complex.
          </p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <Lottie animationData={aboutMission} loop />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full max-w-md mx-auto order-2 md:order-1">
          <Lottie animationData={aboutVision} loop />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">🔭 Our Vision</h2>
          <p className="text-gray-700 text-lg">
            We aim to become a global leader in architectural design by integrating sustainability, technology, and artistic excellence.
            Our vision is to transform how people experience buildings.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">👨‍💼 Our Team</h2>
          <p className="text-gray-700 text-lg">
            We’re a group of passionate architects, engineers, and creatives. Together, we craft intelligent spaces that
            are sustainable, stylish, and tailor-made to your needs.
          </p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <Lottie animationData={aboutTeam} loop />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">💡 Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Innovation", desc: "We stay ahead with the latest technologies and trends." },
            { title: "Integrity", desc: "We believe in honesty, trust, and lasting relationships." },
            { title: "Sustainability", desc: "We build responsibly with the environment in mind." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
