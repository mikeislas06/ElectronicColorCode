import { useState } from "react";
import { Box, Grid, Autocomplete, TextField, Button, Typography } from "@mui/material";

import { colors, multiplierValues, toleranceValues } from "../constants";

import { getResistanceValues } from "../api/getResistanceValues";
import Resistor from "./Resistor";

const Form = () => {
  const [bandAColor, setBandAColor] = useState("");
  const [bandBColor, setBandBColor] = useState("");
  const [bandCColor, setBandCColor] = useState("");
  const [bandDColor, setBandDColor] = useState("");
  const [resistance, setResistance] = useState("");
  const [tolerance, setTolerance] = useState("");

  const handleCalculate = async () => {
    const { ohmValue, toleranceValue } = await getResistanceValues(
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor
    );
    setResistance(ohmValue);
    setTolerance(toleranceValue);
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
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
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
            <Autocomplete
              sx={{ width: "50%" }}
              disableClearable
              disablePortal
              id="combo-box-demo"
              options={colors}
              value={bandAColor}
              onChange={(event, newValue) => {
                setBandAColor(newValue.label);
              }}
              renderInput={(params) => <TextField {...params} label="Band A" />}
            />
            <Autocomplete
              sx={{ width: "50%" }}
              disableClearable
              disablePortal
              id="combo-box-demo"
              options={colors}
              value={bandBColor}
              onChange={(event, newValue) => {
                setBandBColor(newValue.label);
              }}
              renderInput={(params) => <TextField {...params} label="Band B" />}
            />
            <Autocomplete
              sx={{ width: "50%" }}
              disableClearable
              disablePortal
              id="combo-box-demo"
              options={multiplierValues}
              value={bandCColor}
              onChange={(event, newValue) => {
                setBandCColor(newValue.label);
              }}
              renderInput={(params) => <TextField {...params} label="Band C" />}
            />
            <Autocomplete
              sx={{ width: "50%" }}
              disableClearable
              disablePortal
              id="combo-box-demo"
              options={toleranceValues}
              value={bandDColor}
              onChange={(event, newValue) => {
                setBandDColor(newValue.label);
              }}
              renderInput={(params) => <TextField {...params} label="Band D" />}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
              <Button variant="contained" color="primary" onClick={handleCalculate}>
                Calculate
              </Button>
              <Button variant="outlined" onClick={handleClear}>
                Clear Selection
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ padding: "15px" }}>
          <Typography variant="h4" textAlign="center">
            Result
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "25px",
              height: "100%",
            }}
          >
            <Resistor
              bandA={bandAColor}
              bandB={bandBColor}
              bandC={bandCColor}
              bandD={bandDColor}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "0px 50px",
              }}
            >
              <Typography variant="p">Resistance: {resistance} &#8486;</Typography>
              <Typography variant="p">Tolerance: {tolerance} &#x25;</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
