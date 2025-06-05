import jwt from "jsonwebtoken";

export const protectAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("🔐 Received Auth Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.warn("⛔ No token provided");
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = { id: decoded.id }; // optional: add more decoded info
    console.log("✅ Token verified for admin:", decoded);
    next();
  } catch (err) {
    console.error("❌ Token error:", err.message);
    return res.status(403).json({ error: "Invalid token" });
  }
};
