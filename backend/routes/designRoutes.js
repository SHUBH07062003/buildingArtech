import express from "express";
import {
  submitRequest,
  getAllRequests,
} from "../controllers/designController.js";
import DesignRequest from "../models/DesignRequest.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", submitRequest); // Public route for users
router.get("/", protectAdmin, getAllRequests); // Protected route for admin
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const design = await DesignRequest.findById(req.params.id);
    if (!design) return res.status(404).json({ error: "Design not found" });

    await design.deleteOne();
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;
