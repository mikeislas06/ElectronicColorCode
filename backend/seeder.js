import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// DB Connect
import connectDB from "./config/db.js";

// Data
import tolerance from "./data/tolerance.js";
import mulitiplier from "./data/multiplier.js";

// Models
import ToleranceModel from "./models/ToleranceModel.js";
import MultiplierModel from "./models/MultiplierModel.js";

connectDB();

mongoose.connection.once("open", async () => {
  await ToleranceModel.deleteMany();
  await MultiplierModel.deleteMany();

  await ToleranceModel.insertMany(tolerance);
  await MultiplierModel.insertMany(mulitiplier);

  console.log("Database populated");
  mongoose.connection.close();
});
