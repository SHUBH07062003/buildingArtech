// routes/adminRoutes.js
import express from "express";
import {
  loginAdmin,
  registerAdmin,
  getAdminProfile,
} from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @route   POST /api/admin/login
 * @desc    Admin login
 */
router.post("/login", loginAdmin);

/**
 * @route   POST /api/admin/register
 * @desc    Create an admin account (⚠️ TEMPORARY: remove after first use)
 */
router.post("/register", registerAdmin);

/**
 * @route   GET /api/admin/profile
 * @desc    Get admin profile (Protected)
 */
router.get("/profile", protectAdmin, getAdminProfile);

export default router;
