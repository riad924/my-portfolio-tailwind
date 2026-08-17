const express = require("express");

const {
  register,
  login,
} = require("../controllers/auth.controller");

const {
  registerValidation,
  loginValidation,
} = require("../validations/auth.validation");

const validate = require("../middlewares/validation.middleware");

const router = express.Router();

// Register
router.post(
  "/register",
  registerValidation,
  validate,
  register
);

// Login
router.post(
  "/login",
  loginValidation,
  validate,
  login
);

module.exports = router;