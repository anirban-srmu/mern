require("dotenv").config();
const cors = require('cors');
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");


const app = express();
app.use(express.json());
app.use(cors());
connectDB();


app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.get("/",(req,res) => res.send("Welcome to the E-commerce API"));
//api.use(errorHandler);

const PORT = process.env.PORT ;
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
