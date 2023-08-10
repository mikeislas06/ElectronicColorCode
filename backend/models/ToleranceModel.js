import mongoose from "mongoose";

const toleranceSchema = mongoose.Schema({
  color: String,
  value: Number,
});

const Tolerance = mongoose.model("Tolerance", toleranceSchema);

export default Tolerance;
