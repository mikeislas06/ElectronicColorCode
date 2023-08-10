import { useState } from "react";
import { Autocomplete, Box, Typography, TextField } from "@mui/material";

import { colorCodes } from "../constants";

const Input = ({ bandColor, setBandColor, options, label }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <Autocomplete
      sx={{ width: "80%" }}
      disableClearable
      disablePortal
      id="bandA"
      options={options}
      value={bandColor}
      open={isOptionsOpen}
      onFocus={() => setIsOptionsOpen(true)}
      onBlur={() => setIsOptionsOpen(false)}
      renderOption={(props, option) => {
        return (
          <Box
            {...props}
            key={props.key}
            sx={{
              backgroundColor: colorCodes[option.label],
              cursor: "pointer",
              padding: "10px",
              color: colorCodes[option.label] === "#000000" ? "#ffffff" : "#000000",
            }}
            onClick={() => {
              setBandColor(props.key);
              setIsOptionsOpen(false);
            }}
          >
            <Typography>{option.label}</Typography>
          </Box>
        );
      }}
      renderInput={(params) => <TextField {...params} label={label} required />}
    />
  );
};

export default Input;
