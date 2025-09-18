import mongoose from "mongoose"; 
import express from "express"; 
import {cartRoutes} from "./Routes/cart.routes.js";
import {productRoutes} from "./Routes/products.routes.js";
import { userRoutes } from "./Routes/user.routes.js";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to ShoppyGlobe API");
});

userRoutes(app)
cartRoutes(app);
productRoutes(app);


// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

// Database connection
mongoose.connect("mongodb://localhost:27017/");
const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connection is Successful");
});

db.on("error", () => {
  console.log("Database connection failed");
});


