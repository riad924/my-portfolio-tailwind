const express = require("express");

const {
  getProfile,
  updateProfile,
  updatePassword,
} = require("../controllers/user.controller");

const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/update-password", protect, updatePassword);

module.exports = router;