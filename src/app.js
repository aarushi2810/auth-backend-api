require("dotenv").config();

const pool = require("./config/db");

pool.query("SELECT 1")
  .then(() => console.log("Database connected "))
  .catch(err => console.error("DB connection failed ", err));


const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.send("Server is running ");
});


app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});