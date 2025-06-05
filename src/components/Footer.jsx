// src/components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20 mt-12">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            🏛️ BuildCraft Designs
          </h3>
          <p className="text-sm">
            We craft personalized building and interior designs tailored to your
            lifestyle, plot size, and budget. From homes to commercial spaces —
            we've got you covered.
          </p>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/design" className="hover:text-white">
                Get a Design
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Custom Building Design</li>
            <li>Interior Design</li>
            <li>3D Visualization</li>
            <li>Site Planning</li>
            <li>Consultation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">
            📍 A-101, Skyline Tower, Noida, UP - 201301
            <br />
            📞 +91 98765 43210
            <br />
            ✉️ contact@buildcraft.in
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} BuildCraft Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
