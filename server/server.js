const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ====================
// MIDDLEWARE
// ====================
app.use(cors());
app.use(express.json());

// ====================
// ROUTES
// ====================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/attempts", require("./routes/attemptRoutes"));

// ✅ NEW: USER / STUDENT MANAGEMENT ROUTES
app.use("/api/users", require("./routes/userRoutes"));

// ====================
// SERVER START
// ====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
