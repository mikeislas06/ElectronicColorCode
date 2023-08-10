import asyncHandler from "../middlewares/asyncHandler.js";
import MultiplierModel from "../models/MultiplierModel.js";
import ToleranceModel from "../models/ToleranceModel.js";

import OhmValueCalculator from "../../ElectronicColorCode.js";

// @desc    Calculate resistor value
// @route   POST /api/calculate
// @access  Public
const calculateValue = asyncHandler(async (req, res) => {
  const { bandAColor, bandBColor, bandCColor, bandDColor } = req.body;

  try {
    const bandA = bandAColor;
    const bandB = bandBColor;
    const bandC = await MultiplierModel.findOne({ color: bandCColor });
    const bandD = await ToleranceModel.findOne({ color: bandDColor });

    const ohmValueCalculator = new OhmValueCalculator();
    const result = ohmValueCalculator.calculateOhmValue(
      bandA,
      bandB,
      bandC.value,
      bandD.value
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

export { calculateValue };
