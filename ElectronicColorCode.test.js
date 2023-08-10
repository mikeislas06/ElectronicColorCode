import OhmValueCalculator from "./ElectronicColorCode";

describe("OhmValueCalculator", () => {
  let calculator;

  beforeAll(() => {
    calculator = new OhmValueCalculator();
  });

  it("calculates the ohm value and tolerance correctly", () => {
    const result = calculator.calculateOhmValue("brown", "black", "red", "gold");
    expect(result.ohmValue).toBe(1000); // 10 * 100
    expect(result.toleranceValue).toBe(5);
  });

  it("throws an error for invalid color codes", () => {
    expect(() => calculator.calculateOhmValue("pink", "black", "red", "gold")).toThrow();
  });

  it("calculates the tolerance value correctly", () => {
    expect(calculator.calculateToleranceValue("gold")).toBe(5);
    expect(calculator.calculateToleranceValue("silver")).toBe(10);
    expect(() => calculator.calculateToleranceValue("purple")).toThrow();
  });
});
