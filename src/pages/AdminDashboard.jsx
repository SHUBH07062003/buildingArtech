import React, { useEffect, useState } from "react";
import api from "../api"; // uses token from localStorage automatically

const AdminDashboard = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await api.get("/design"); // uses token via api interceptor
        setDesigns(res.data);
      } catch (err) {
        console.error("Error fetching designs:", err);
        setError("Failed to load design requests");
      } finally {
        setLoading(false);
      }
    };

    fetchDesigns();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        await api.delete(`/design/${id}`);
        setDesigns((prev) => prev.filter((item) => item._id !== id));
      } catch (err) {
        alert("Failed to delete request");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        🛠️ Admin Dashboard - Design Requests
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : designs.length === 0 ? (
        <p className="text-center text-gray-500">No design requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Budget</th>
                <th className="py-3 px-4 text-left">Plot Size</th>
                <th className="py-3 px-4 text-left">Building Type</th>
                <th className="py-3 px-4 text-left">Style</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {designs.map((item) => (
                <tr key={item._id} className="border-t hover:bg-blue-50 transition">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">₹{item.budget}</td>
                  <td className="py-3 px-4">{item.plotSize}</td>
                  <td className="py-3 px-4">{item.buildingType}</td>
                  <td className="py-3 px-4">{item.style}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button
                      onClick={() => setSelectedDesign(item)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Design Request Details</h2>
            <ul className="space-y-2">
              <li><strong>Name:</strong> {selectedDesign.name}</li>
              <li><strong>Budget:</strong> ₹{selectedDesign.budget}</li>
              <li><strong>Plot Size:</strong> {selectedDesign.plotSize}</li>
              <li><strong>Building Type:</strong> {selectedDesign.buildingType}</li>
              <li><strong>Style:</strong> {selectedDesign.style}</li>
            </ul>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedDesign(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
