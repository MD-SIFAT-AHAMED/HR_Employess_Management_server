const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mySqlPool = require("./src/config/db");

dotenv.config();

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  })
);

// Test Route
app.get("/", (req, res) => {
  res.send("Delivery Web App Backend Running...");
});

// Routes
// app.use("/api/v1/employee", require("./src/routes/employeeRoute"));
// app.use("/api/v1/admin", require("./src/routes/adminRoute"));
// app.use("/api/v1/auth", require("./src/routes/authRoute"));


// Server Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
