const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
  updatePassword,
  deleteUser,
} = require("../controllers/user.controller");

const protect = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");

// Get logged-in user's profile
router.get("/profile", protect, getProfile);

// Update logged-in user's profile
router.put("/profile", protect, updateProfile);

// Update logged-in user's password
router.put("/update-password", protect, updatePassword);

// Admin: Delete user
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;