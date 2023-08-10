import mongoose from "mongoose";

const multiplierSchema = mongoose.Schema({
  color: String,
  value: Number,
});

const Multiplier = mongoose.model("Multiplier", multiplierSchema);

export default Multiplier;
