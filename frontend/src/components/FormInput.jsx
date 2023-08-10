import { Box, Typography, Button } from "@mui/material";
import Input from "./Input";

import { colors, multiplierValues, toleranceValues } from "../constants";
import { getResistanceValues } from "../api/getResistanceValues";

const FormInput = ({
  bandAColor,
  setBandAColor,
  bandBColor,
  setBandBColor,
  bandCColor,
  setBandCColor,
  bandDColor,
  setBandDColor,
  isLoading,
  setIsLoading,
  setResistance,
  setTolerance,
}) => {
  const handleCalculate = async () => {
    setIsLoading(true);
    const { ohmValue, toleranceValue } = await getResistanceValues(
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor
    );
    setResistance(ohmValue);
    setTolerance(toleranceValue);
    setIsLoading(false);
  };

  const handleClear = () => {
    setBandAColor("");
    setBandBColor("");
    setBandCColor("");
    setBandDColor("");
    setResistance("");
    setTolerance("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: " 25px",
        padding: "15px",
      }}
    >
      <Typography variant="h4" textAlign="center">
        Resistor Parameters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          bandColor={bandAColor}
          setBandColor={setBandAColor}
          options={colors}
          label="Band A"
        />
        <Input
          bandColor={bandBColor}
          setBandColor={setBandBColor}
          options={colors}
          label="Band B"
        />
        <Input
          bandColor={bandCColor}
          setBandColor={setBandCColor}
          options={multiplierValues}
          label="Band C"
        />
        <Input
          bandColor={bandDColor}
          setBandColor={setBandDColor}
          options={toleranceValues}
          label="Band D"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            disabled={
              !bandAColor || !bandBColor || !bandCColor || !bandDColor || isLoading
            }
          >
            Calculate
          </Button>
          <Button variant="outlined" onClick={handleClear} disabled={isLoading}>
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormInput;
