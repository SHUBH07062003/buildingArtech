import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DesignRequest from "./pages/DesignRequest";
import DesignConfirmation from "./pages/DesignConfirmation";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Import karo
import Consultation from "./pages/Consultation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProtectedRoute from "./components/UserProtectedRoute"; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
           <Route
  path="/design"
  element={
    <ProtectedRoute>
      <DesignRequest />
    </ProtectedRoute>
  }
/>
            <Route path="/thank-you" element={<DesignConfirmation />} />
             <Route path="/consultation" element={<Consultation />} />
             <Route path="/user-login" element={<Login />} />
             <Route path="/user-register" element={<Register />} />
             <Route
  path="/design"
  element={
    <UserProtectedRoute>
      <DesignRequest />
    </UserProtectedRoute>
  }
/>
            
            {/* ✅ Protected route wrap */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
