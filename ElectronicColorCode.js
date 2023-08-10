class OhmValueCalculator {
  constructor() {
    this.colorCodes = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      white: 9,
    };
  }

  calculateOhmValue(bandAColor, bandBColor, multiplier, tolerance) {
    const bandAValue = this.colorCodes[bandAColor];
    const bandBValue = this.colorCodes[bandBColor];
    const bandCMultiplier = multiplier;
    const toleranceValue = tolerance;

    if (
      bandAValue !== undefined &&
      bandBValue !== undefined &&
      bandCMultiplier !== undefined &&
      toleranceValue !== undefined
    ) {
      const ohmValue = (bandAValue * 10 + bandBValue) * bandCMultiplier;
      return { ohmValue, toleranceValue };
    } else {
      throw new Error("Invalid color code(s) provided.");
    }
  }
}

export default OhmValueCalculator;

// Example usage
// const calculator = new OhmValueCalculator();
// const result = calculator.calculateOhmValue("brown", "black", "red", "gold");
// console.log(`Ohm Value: ${result.ohmValue} ohms, Tolerance: ${result.toleranceValue}%`);
