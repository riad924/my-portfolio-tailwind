const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// =======================
// Middlewares
// =======================

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// HTTP request logger
app.use(morgan("dev"));

// =======================
// Routes
// =======================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MERN Backend API is running",
  });
});

// Example API routes
// const authRoutes = require("./routes/auth.routes");
// const userRoutes = require("./routes/user.routes");

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

// =======================
// 404 Handler
// =======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =======================
// Global Error Handler
// =======================

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;