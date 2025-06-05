import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import designRoutes from "./routes/designRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import aiRoute from "./routes/ai.js";
import imageRoutes from "./routes/imageRoutes.js";
import contactRoutes from "./routes/contact.js";
import userAuthRoutes from "./routes/userAuth.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/design", designRoutes);
app.use("/api/ai", aiRoute);
app.use("/api/image", imageRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userAuthRoutes);

// Root Test Route
app.get("/", (req, res) => {
  res.send("API is working 🎉");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
