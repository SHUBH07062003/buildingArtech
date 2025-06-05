import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // Tokens
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  // Names
  const userName = localStorage.getItem("userName");
  const adminName = localStorage.getItem("adminName");

  const userInitial = userName ? userName.charAt(0).toUpperCase() : "U";
  const adminInitial = adminName ? adminName.charAt(0).toUpperCase() : "A";

  // Logout
  const handleLogout = () => {
    if (userToken) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      navigate("/user-login");
    } else if (adminToken) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminName");
      navigate("/admin/login");
    }
  };

  return (
    <nav className="bg-blue-400 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏛️</span>
          <Link to="/" className="text-2xl font-bold text-white">
            BuildArch
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="/"
              className={`hover:text-yellow-300 transition ${
                isActive("/") ? "text-yellow-300 font-semibold underline" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-yellow-300 transition ${
                isActive("/about")
                  ? "text-yellow-300 font-semibold underline"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-yellow-300 transition ${
                isActive("/services")
                  ? "text-yellow-300 font-semibold underline"
                  : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/design"
              className={`hover:text-yellow-300 transition ${
                isActive("/design")
                  ? "text-yellow-300 font-semibold underline"
                  : ""
              }`}
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-yellow-300 transition ${
                isActive("/contact")
                  ? "text-yellow-300 font-semibold underline"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>

          {/* Account Dropdown */}
          <li className="relative group">
            <div className="cursor-pointer hover:text-yellow-300 transition flex items-center gap-2">
              {/* Show avatar */}
              {userToken ? (
                <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold">
                  {userInitial}
                </div>
              ) : adminToken ? (
                <div className="w-8 h-8 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold">
                  {adminInitial}
                </div>
              ) : (
                <span>👤</span>
              )}
              <span className="font-semibold">Account</span>
            </div>

            {/* Dropdown Content */}
            <div className="absolute top-full right-0 mt-1 bg-white text-gray-800 rounded-md shadow-lg w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {!userToken && !adminToken ? (
                <>
                  <Link
                    to="/user-login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    User Login
                  </Link>
                  <Link
                    to="/user-register"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    User Register
                  </Link>
                  <Link
                    to="/admin/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Admin Login
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={userToken ? "/" : "/admin"}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
