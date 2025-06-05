// ...imports same as before
import React, { useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import buildingAnimation from "../assets/designn.json";

const DesignRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    plotSize: "",
    buildingType: "",
    style: "",
  });

  const [generatedDesign, setGeneratedDesign] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneratedDesign("");
    setGeneratedImage("");
    setLoadingAI(true);

    try {
      const res = await fetch("http://localhost:5000/api/design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        alert("Failed to submit: " + (error?.error || "Unknown error"));
        setLoadingAI(false);
        return;
      }

      const prompt = `
Suggest a building design based on:
Name: ${formData.name}
Budget: ₹${formData.budget}
Plot Size: ${formData.plotSize}
Building Type: ${formData.buildingType}
Preferred Style: ${formData.style}`;

      const aiRes = await fetch("http://localhost:5000/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const aiData = await aiRes.json();
      setGeneratedDesign(aiData.response || "No AI response.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting.");
    } finally {
      setLoadingAI(false);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("🏗️ AI Suggested Building Design", 10, 10);
    doc.setFontSize(12);
    doc.text(generatedDesign, 10, 20);
    doc.save("AI_Building_Design.pdf");
  };

  const handleGenerateImage = async () => {
    setGeneratedImage("");
    setLoadingImage(true);

    try {
      // ✅ Use AI-generated text as prompt, but trim to max 400 characters
      const trimmedPrompt = generatedDesign.slice(0, 400);

      const res = await fetch("http://localhost:5000/api/image/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedPrompt }),
      });

      const data = await res.json();

      if (data?.base64Image) {
        const imgUrl = `data:image/png;base64,${data.base64Image}`;
        setGeneratedImage(imgUrl);
      } else {
        alert("No image generated.");
      }
    } catch (err) {
      console.error(err);
      alert("Image generation failed.");
    } finally {
      setLoadingImage(false);
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "generated_image.png";
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
          <Lottie animationData={buildingAnimation} loop={true} />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
            🏗️ Request a Building Design
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
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="💰 Budget (INR)"
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            />
            <input
              type="text"
              name="plotSize"
              value={formData.plotSize}
              onChange={handleChange}
              placeholder="📐 Plot Size (e.g. 40x60 ft)"
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            />
            <select
              name="buildingType"
              value={formData.buildingType}
              onChange={handleChange}
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
              required
            >
              <option value="">🏢 Select Building Type</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="hotel">Hotel</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              name="style"
              value={formData.style}
              onChange={handleChange}
              placeholder="🎨 Preferred Style (Modern, Classic...)"
              className="w-full border p-3 rounded-md shadow-sm focus:outline-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              🚀 Submit Request
            </button>
          </form>

          {loadingAI && (
            <div className="mt-6 text-blue-600 text-center font-semibold">
              ✨ Generating AI design suggestion...
            </div>
          )}

          {generatedDesign && (
            <div className="mt-6 p-4 border rounded-md bg-gray-100 shadow-inner">
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                🧠 AI Suggested Design:
              </h3>
              <p className="whitespace-pre-line">{generatedDesign}</p>

              <div className="flex flex-col md:flex-row gap-3 mt-4">
                <button
                  onClick={handleDownloadPDF}
                  className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition"
                >
                  📄 Download as PDF
                </button>
                <button
                  onClick={handleGenerateImage}
                  className="bg-purple-600 text-white py-2 px-4 rounded-md shadow hover:bg-purple-700 transition"
                >
                  🖼️ Generate Image
                </button>
              </div>
            </div>
          )}

          {loadingImage && (
            <div className="mt-4 text-purple-600 text-center font-medium">
              🧪 Generating Image...
            </div>
          )}

          {generatedImage && (
            <div className="mt-6 border rounded-md p-3 bg-gray-50 text-center">
              <h4 className="text-md font-bold text-gray-700 mb-2">
                🖼️ AI-Generated Image:
              </h4>
              <img
                src={generatedImage}
                alt="AI Design"
                className="mx-auto rounded-lg shadow-md max-h-[400px]"
              />
              <button
                onClick={handleDownloadImage}
                className="mt-3 bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition"
              >
                ⬇️ Download Image
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignRequest;
