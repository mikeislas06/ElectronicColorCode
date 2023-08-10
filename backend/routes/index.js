import express from "express";
import { calculateValue } from "../controllers/index.js";

const router = express.Router();

router.route("/calculate").post(calculateValue);

export default router;
