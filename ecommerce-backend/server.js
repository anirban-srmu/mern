require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express();
app.use(express.json());
connectDB();


app.use("api/auth",authRoutes);
app.get("/",(req,res) => res.send("API is running..."));

const PORT = process.env.PORT ;
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
