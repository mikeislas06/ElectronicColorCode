import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// Routes
import routes from "./routes/index.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
